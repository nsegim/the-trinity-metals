import { useState,useEffect } from "react";
import './styles.css'
import Carousel from 'react-bootstrap/Carousel';

import ReUsablePost from '../../components/ReUsablePost';
import { fetchData } from "../../config/apiConfig";


const LoopGrid = ({ items, itemsPerPage = 3 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [animationDirection, setAnimationDirection] = useState('');
  const [activeIndex, setActiveIndex] = useState(0)

  // Pagination logic
  

  const [data, setData] = useState([]);
  const [categories, setCategories] = useState({});
  const [postImages, setPostImages] = useState({});
  const [error, setError] = useState(null);

  // Fetch posts
  const getPosts = async () => {
    try {
      const response = await fetchData('posts?page=1&per_page=9');
      setData(response);

    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
     console.log("Test image:", data);
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      data.forEach(async (item) => {
        if (item?.categories?.[0]) {
          const categoryName = await getPostCategory(item?.categories[0]);
          setCategories((prevCategories) => ({
            ...prevCategories,
            [item.id]: categoryName,
          }));
        }
        if (item?.featured_media) {
          const featuredImage = await getPostImage(item?.featured_media);
          setPostImages((prevImages) => ({
            ...prevImages,
            [item.id]: featuredImage,
          }));

          
        }

       

      });


      
    }

    
         


  
  }, [data]);

  const getPostCategory = async (id) => {
    try {
      const response = await fetchData(`categories/${id}`);
      return response?.name;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getPostImage = async (id) => {
    try {
      const response = await fetchData(`media/${id}`);
     // const testImage = response?.media_details?.sizes?.tp-image-grid?.source_url;

      return response?.media_details?.sizes?.large?.source_url;
       

    } catch (error) {
      console.log(error);
      return null;
    }
  };


   useEffect(()=>{

      console.log("Test inner image: ", postImages)
  },[postImages])
  




  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

 

  const handleSelected = (selectedIndex) => {
      setActiveIndex(selectedIndex)
     
      for(let i=0; i < totalPages; i++){
        
        if(i == selectedIndex){
          setCurrentPage(i+1);
          

        }
      }  
          
  }


  return (
    <div>
      {/* Bootstrap Carousel */}
      {/* Loop Grid */}
      <Carousel className="article-carousel"
         activeIndex={activeIndex} 
         onSelect={handleSelected} 
         interval={5000} 
         style={{minHeight: "300px", 
                 
                 
                paddingBottom: "60px"}}
        controls={false}        
      >
        
        {[...Array(totalPages)].map((_, index) =>(
             <Carousel.Item style={{minHeight: "300px"}} key={index}>
             <div className= {`grid article`}>
               {currentItems.map((item, index) => (
                 <ReUsablePost
                    key={index}
                    item={item}
                    categories={categories}
                    postImages={postImages}
                  />
               ))}
             </div>

               
           </Carousel.Item>
        )

        )}
          
         
          
      </Carousel>
 


         


    
    

      
    </div>
  );
};

export default LoopGrid  