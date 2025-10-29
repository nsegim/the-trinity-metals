// import { useState,useEffect } from "react";
// import './styles.css'
// import Carousel from 'react-bootstrap/Carousel';

// import ReUsablePost from '../../components/ReUsablePost';
// import { fetchData } from "../../config/apiConfig";


// const LoopGrid = ({ items, itemsPerPage = 3 }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   // const [animationDirection, setAnimationDirection] = useState('');
//   const [activeIndex, setActiveIndex] = useState(0)

//   // Pagination logic
  

//   const [data, setData] = useState([]);
//   const [categories, setCategories] = useState({});
//   const [postImages, setPostImages] = useState({});
//   const [error, setError] = useState(null);

//   // Fetch posts
//   const getPosts = async () => {
//     try {
//       const response = await fetchData('posts?page=1&per_page=9');
//       setData(response);

//     } catch (error) {
//       setError(error);
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getPosts();
     
//   }, []);

//   useEffect(() => {
//     if (data.length > 0) {
//       data.forEach(async (item) => {
//         if (item?.categories?.[0]) {
//           const categoryName = await getPostCategory(item?.categories[0]);
//           setCategories((prevCategories) => ({
//             ...prevCategories,
//             [item.id]: categoryName,
//           }));
//         }
//         if (item?.featured_media) {
//           const featuredImage = await getPostImage(item?.featured_media);
//           setPostImages((prevImages) => ({
//             ...prevImages,
//             [item.id]: featuredImage,
//           }));

          
//         }

       

//       });


      
//     }

    
         


  
//   }, [data]);

//   const getPostCategory = async (id) => {
//     try {
//       const response = await fetchData(`categories/${id}`);
//       return response?.name;
//     } catch (error) {
//       console.log(error);
//       return null;
//     }
//   };

//   const getPostImage = async (id) => {
//     try {
//       const response = await fetchData(`media/${id}`);
//      // const testImage = response?.media_details?.sizes?.tp-image-grid?.source_url;

//       return response?.media_details?.sizes?.large?.source_url;
       

//     } catch (error) {
//       console.log(error);
//       return null;
//     }
//   };


//    useEffect(()=>{

//      // console.log("Test inner image: ", postImages)
//   },[postImages])
  




//   const totalPages = Math.ceil(data.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

 

//   const handleSelected = (selectedIndex) => {
//       setActiveIndex(selectedIndex)
     
//       for(let i=0; i < totalPages; i++){
        
//         if(i == selectedIndex){
//           setCurrentPage(i+1);
          

//         }
//       }  
          
//   }


//   return (
//     <div>
//       {/* Bootstrap Carousel */}
//       {/* Loop Grid */}
//       <Carousel className="article-carousel"
//          activeIndex={activeIndex} 
//          onSelect={handleSelected} 
//          interval={5000} 
//          style={{minHeight: "300px", 
                 
                 
//                 paddingBottom: "60px"}}
//         controls={false}        
//       >
        
//         {[...Array(totalPages)].map((_, index) =>(
//              <Carousel.Item style={{minHeight: "300px"}} key={index}>
//              <div className= {`grid article`}>
//                {currentItems.map((item, index) => (
//                  <ReUsablePost
//                     key={index}
//                     item={item}
//                     categories={categories}
//                     postImages={postImages}
//                   />
//                ))}
//              </div>

               
//            </Carousel.Item>
//         )

//         )}
          
         
          
//       </Carousel>
 


         


    
    

      
//     </div>
//   );
// };

// export default LoopGrid  


import { useState, useEffect, useCallback, useMemo } from "react";
import './styles.css'
import Carousel from 'react-bootstrap/Carousel';
import ReUsablePost from '../../components/ReUsablePost';
import { fetchData } from "../../config/apiConfig";

const LoopGrid = ({ itemsPerPage = 3 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState({});
  const [postImages, setPostImages] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all posts with their details in parallel
  const getPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetchData('posts?page=1&per_page=9');
      setData(response);

      // Create promises for all categories and images
      const promises = response.map(async (item) => {
        const [categoryResult, imageResult] = await Promise.all([
          item?.categories?.[0] 
            ? fetchData(`categories/${item.categories[0]}`).catch(() => null)
            : Promise.resolve(null),
          item?.featured_media
            ? fetchData(`media/${item.featured_media}`).catch(() => null)
            : Promise.resolve(null)
        ]);

        return {
          id: item.id,
          category: categoryResult?.name || null,
          image: imageResult?.media_details?.sizes?.large?.source_url || null
        };
      });

      // Wait for all promises to resolve
      const results = await Promise.all(promises);

      // Batch update state once
      const newCategories = {};
      const newImages = {};
      
      results.forEach(result => {
        if (result.category) {
          newCategories[result.id] = result.category;
        }
        if (result.image) {
          newImages[result.id] = result.image;
        }
      });

      setCategories(newCategories);
      setPostImages(newImages);

    } catch (error) {
      console.error('Failed to fetch posts:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch data on mount
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  // Memoized carousel items to prevent unnecessary re-renders
  const carouselItems = useMemo(() => {
    if (loading || data.length === 0) {
      return [];
    }

    const totalPages = Math.ceil(data.length / itemsPerPage);
    
    return [...Array(totalPages)].map((_, pageIndex) => {
      const startIndex = pageIndex * itemsPerPage;
      const currentPageItems = data.slice(startIndex, startIndex + itemsPerPage);

      return (
        <Carousel.Item 
          key={pageIndex} 
          style={{ minHeight: "300px" }}
        >
          <div className={`grid article`}>
            {currentPageItems.map((item) => (
              <ReUsablePost
                key={item.id}
                item={item}
                categories={categories}
                postImages={postImages}
              />
            ))}
          </div>
        </Carousel.Item>
      );
    });
  }, [data, categories, postImages, loading, itemsPerPage]);

  // Optimized carousel handler
  const handleSelected = useCallback((selectedIndex) => {
    setActiveIndex(selectedIndex);
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="loading-state" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '300px',
        background: '#f5f5f5'
      }}>
        <div>Loading latest articles...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="error-state" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '300px',
        background: '#f5f5f5',
        color: '#d32f2f'
      }}>
        <div>Failed to load articles. Please try again later.</div>
      </div>
    );
  }

  // Empty state
  if (data.length === 0) {
    return (
      <div className="empty-state" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '300px',
        background: '#f5f5f5'
      }}>
        <div>No articles available.</div>
      </div>
    );
  }

  return (
    <div className="loop-grid-container">
      <Carousel 
        className="article-carousel"
        activeIndex={activeIndex} 
        onSelect={handleSelected} 
        interval={5000} 
        style={{ 
          minHeight: "300px", 
          paddingBottom: "60px" 
        }}
        controls={false}        
      >
        {carouselItems}
      </Carousel>
    </div>
  );
};

export default LoopGrid;