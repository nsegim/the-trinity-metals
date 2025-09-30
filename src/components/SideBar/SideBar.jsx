import { Link } from 'react-router-dom'
import ImageGallery from '../ImageGallery'
import './SideBar.css'
import { fetchData } from '../../config/apiConfig'
import { useEffect, useState, useTransition } from 'react'

import TheModal from '../LightBox/Image-LightBox/Modal'
import ImageLightBox from '../LightBox/Image-LightBox/ImageLightBox'
import Spinner from '../Spinner/Spinner'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { use } from 'i18next'
import moment from 'moment'


const SideBar = ({ currentCategories, postTofieldField, onFiltedPost }) => {
   const [categories, setCategories] = useState([])
   const [relatedPosts, setRelatedPosts] = useState([])
   const [searchQuery, setSearchQuery] = useState('')

   // Fetch categories (already implemented in your code)
   const readCategories = async () => {
      try {
         const response = await fetchData('categories')
         setCategories(response)
      } catch (error) {
         console.log(error)
      }
   }

   // Fetch related posts by category
   const readRelatedPosts = async () => {
      try {
         // Fetch posts in the same category as the current post
         const response = await fetchData('posts?_embeded&per_page=100')
         setRelatedPosts(response)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      readCategories()
      
    }, [currentCategories])
  
  
   
   

   const handleSubmit = (e) => {
      e.preventDefault()
      displayFilteredPosts()
   }



   const displayFilteredPosts = () => {
      if (!postTofieldField || postTofieldField.length === 0) {
         // console.log('No posts available to filter');
         return;
      }
   
      const filteredPosts = postTofieldField.filter(post =>
         (post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.content.rendered.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      //console.log("Filtered posts", filteredPosts);
      onFiltedPost(filteredPosts);
      
   }



   const [gallery, setGallery] = useState([]);
  
   const [imageUrl, setImageUrl] = useState([]);
   
   const [allImages, setAllImages] = useState([]);
   const [All, setAll] = useState([]);
   const [isSinglePost, setIsSinglePost] = useState(false)
   const [featuredImage, setFeaturedImage] = useState([])
  

     // Fetch gallery data
     useEffect(() => {
        let isMounted = true; // To prevent state updates on unmounted component

        const fetchGalleryData = async () => {
            try {
                const response = await fetchData('gallery?per_page=12&_embed');
                if (isMounted && response.length) {
                    setGallery(response);

                    // Process images from the response
                    const images = response.map(item =>
                        item?._embedded["acf:attachment"].map(subItem => ({
                            link: subItem?.source_url || "",
                            text: "Gallery Image"
                        }))
                    );
                    setAllImages(images);

                    // Extract attachment URLs
                    const urls = response.flatMap(item =>
                        item._links["acf:attachment"]?.map(att => att.href) || []
                    );
                    
                }
            } catch (error) {
                console.error("Error fetching gallery:", error);
            }
        };

        fetchGalleryData();

        // Cleanup function
        return () => {
            isMounted = false;
            
        };
    }, []); // Empty dependency array to run only once

    



    useEffect(() => {
        if (allImages.length === 0) return; // Ensure allImages is available before processing
    
        // Flatten the nested arrays into a single array
        const flattenedImages = allImages.flat();
    
        
        setAll(flattenedImages.reverse().slice(0, 12));
      

        
    
    }, [allImages]); // Re-run only when allImages changes
    


   const location = useLocation()
   
  useEffect(() => {
      if(location.pathname.includes("/single-post")){
         setIsSinglePost(true)
      }

      readRelatedPosts()
  },[])
   
  useEffect(() => {

     if(relatedPosts?.length>0){
        relatedPosts.forEach(async (item) => {
         
        const image = await getPostImage(item?.featured_media) 
         setFeaturedImage((prevImage) => ({...prevImage, [item?.id] : image}))
           
        })

        
     }

   // console.log(relatedPosts)
   }, [relatedPosts])


  const getPostImage = async (id) => {

   try {
      const response = await fetchData(`media/${id}`)
       return response?.media_details?.sizes?.thumbnail?.source_url
      
   } catch (error) {
      console.log(error)
   }
     
  }
 
 


   const { t } = useTranslation()



   
   
   return (
      <>
         <div className="sidebar-wrapper">
            <div className="contain">
               <div className="side-bar-wrapper">
                  {/* Search Form */}
                  <div className="about-posts-search">
                     <div className="sidebar-headers">
                        <h5>{t("sidebar.search")}</h5>
                     </div>
                     <div className="search-form">
                        <form action="" onSubmit={handleSubmit}>
                           <input type="text" placeholder={t("sidebar.search-input")}
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                           />
                           <button type="submit">
                              <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Symbol-9.svg" />
                           </button>
                        </form>
                     </div>
                  </div>

                  {/* Featured Posts */}
                  {
                    isSinglePost && <div className="about-featured-posts">
                     <div className="featured-posts">
                        <div className="sidebar-headers">
                           
                           <h5>{t("sidebar.featured-posts")}</h5>
                        </div>
                        <div className="a-related-post">
                           {relatedPosts.length &&  isSinglePost? (

                              
                            relatedPosts.slice(0, 3).map((item, index) => (
                                 <div key={index} className="featured-post">
                                    <div className="featured-image">
                                    <ImageGallery imageUrl={featuredImage[item?.id] || 'https://contents.trinity-metals.com/wp-content/uploads/2025/02/animated_loader_gif_n6b5x0.gif' } customClass="related-featured-img" />

                                       {/* {
                                          featuredImage[item?.id] ? (
                                             <ImageGallery imageUrl={featuredImage[item?.id] || 'https://contents.trinity-metals.com/wp-content/uploads/2025/02/animated_loader_gif_n6b5x0.gif' } customClass="related-featured-img" />
                                          ) : (
                                             <Spinner />
                                          )
                                       } */}
                                       
                                    </div>
                                    <div className="post-details">
                                       <div className="post-title">
                                          <Link to={`/single-post/${item?.id}`}>
                                             <p>{item?.title?.rendered || 'Default Post Title'}</p>
                                          </Link>
                                       </div>
                                       <div className="post-date">
                                          <span>{moment(item?.date).format('MMMM DD , YYYY')}</span>
                                       </div>
                                    </div>
                                 </div>
                              
                              ))
                           ) : (
                             <div></div>
                           )}
                        </div>
                     </div>
                  </div>
                  }
                  

                  {/* Newsletter and Categories sections */}
                  <div className="about-newsletters">
                     <div className="sidebar-headers">
                        <h5>{t("sidebar.newsletter")}</h5>
                     </div>
                     <div className="newsletter-container">
                        <h5 className="news-letter-header">
                          {t("sidebar.newsletter-section.section-title")}
                        </h5>
                        <div className="newsletter-form">
                           <form action="" className="subscribe-form">
                              <input type="email" name="email" placeholder={t("sidebar.newsletter-section.input-field")} />
                              <button type="submit">{t("sidebar.newsletter-section.subscribe-btn")}</button>
                           </form>
                        </div>
                     </div>
                  </div>

                  {/* Categories */}
                  {/* <div className="about-categories">
                     <div className="sidebar-headers">
                        <h5>{t("sidebar.category")}</h5>
                     </div>
                     <div className="categories-container">
                        {categories
                        .filter(item => Number(item?.count) > 0) 
                        .map((item, index) => (
                           item?.count && (
                              <div className="a-category" key={index}>
                                 <div className="category-name-wrapper">
                                    <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Document-icon.svg" />
                                    <Link >
                                       <span className="category-name" dangerouslySetInnerHTML={{ __html: item?.name}}></span>
                                    </Link>
                                 </div>
                                 <div className="with-category-counter">
                                    <span>{item?.count}</span>
                                 </div>
                              </div>
                           )
                        ))}
                     </div>
                  </div> */}

                  {/* Gallery */}
                  <div className="about-gallery">
                     <div className="sidebar-headers">
                        <h5>{t("sidebar.our-gallery")}</h5>
                     </div>
                     <div className="categories-container">
                        <div className="a-gallery sidebar-gallery">
                           {/* Gallery Images */}


                           {!(allImages?.length > 0) ? (
                                                <Spinner />
                                            ) : (
                                                <ImageLightBox
                                                    images={All}
                                                    renderImage={(images, handleClick) => (
                                                        <div className="the-gallery">
                                                            {images.map((item, index) => (
                                                                <div key={index} className="image-grid">
                                                                    <ImageGallery
                                                                        imageUrl={item.link}
                                                                        customClass="gallery-img"
                                                                    />
                                                                    <div className="view-image" onClick={() => handleClick(item, index)}>

                                                                        <ImageGallery
                                                                            imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/View-button.svg"
                                                                            customClass="play-video-player"
                                                                            
                                                                        />
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                />
                                            )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default SideBar
