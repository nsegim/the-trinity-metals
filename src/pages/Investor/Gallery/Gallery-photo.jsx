import ImageGallery from "../../../components/ImageGallery"
import './Gallery.css'
import SiteHeader from "../../../components/header/Header"
import SiteFooter from "../../../components/Footer/Footer"
import { data, Link } from "react-router-dom"
import { useEffect, useState } from "react"

const ThePhotoGallery = () => {
     // The tabs declaration
        const [activeFilter, setActiveFilter] = useState('Tab1');
        const handleFilterClick = (tab) => {
          setActiveFilter(tab)
          
        }
    //Handling Images from trinity dashboard
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect(()=>{
    //     const fetchImages = async () => {

    //         try{

    //             const response = await fetch('https://trinity-metals.com/wp-json/wp/v2/media')
    //             if(!response.ok){
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
                    
    //             }
    //             const data = await response.json
    //             console.log(data)
    //             if(Array.isArray(data)){
                    
    //               const imageUrls = data.filter(item => item.media_type === 'image' && item.source_url).map(item => item.source_url);
                    
    //                 setImages(imageUrls);
    //             }else {
    //                 console.error("Unexpected API response:", data);
    //             }

                
    //         }catch(error){
    //             console.error("Error fetching images:", error);

    //         }
            

    //         finally{
    //             setLoading(false)
    //         }
            
    //     }

    //     fetchImages();
        
    // }, [])

    useEffect(() => {
        fetch('https://trinity-metals.com/wp-json/wp/v2/media?media_type=image')
          .then(response => response.json())
          .then(data => {
            //Extract the required image size (e.g., 'medium' or 'full')
            const imageArray = data.map(item => ({
              id: item.id,
              title: item.title.rendered,
              url: item.media_details.sizes.medium
                ? item.media_details.sizes.medium.source_url
                : item.source_url // Fallback if 'medium' is not available
            }));
            setImages(imageArray);
            setLoading(false);

            console.log(data)
          })
          .catch(error => {
            console.error('Error fetching images:', error);
            setLoading(false);
          });
      }, []);

    return(
        <>  
           <SiteHeader />
           {/* Hero Section */}
           <div className="custom-hero photo-gallery">
                <div className="child-item-wrapper z-1">
                    <h1 className="heading">Photos</h1>
                </div>
                
           </div>
           {/* Gallery Navigation */}
           <div className="gallery-navigation">
             <div className="gallery-nav-wrapper d-flex">
                <Link to="/investor-relations/gallery/photos" className="gallery-nav visited">
                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Photo-icon.svg"/>
                    <span>
                    Photo Gallery
                    </span>
                </Link>
                <Link to="/investor-relations/gallery/videos" className="gallery-nav">
                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Video-icon.svg"/>
                    <span>
                    Video Gallery
                    </span>
                </Link>

             </div>
             
            </div>
            {/* The Photo gallery */}
            <div className="photo-gallery-wrapper">
              <div className="photo-gallery-container container">
                    <div className="photo-gallery-filters">
                        <button onClick={()=> handleFilterClick("Tab1")} className={`filter-title ${activeFilter === "Tab1" ? "active-button" : ""}`}>All</button>
                        <button onClick={()=>  handleFilterClick("Tab2")} className={`filter-title ${activeFilter === "Tab2" ? "active-button" : ""}`}>Visitors</button>
                        <button onClick={()=>  handleFilterClick("Tab3")} className={`filter-title ${activeFilter === "Tab3" ? "active-button" : ""}`}>Events</button>
                        <button onClick={()=>  handleFilterClick("Tab4")} className={`filter-title ${activeFilter === "Tab4" ? "active-button" : ""}`}>Sports</button>
                    </div>

                    <div className="photos-wrapper">
                       <div className="photo-category All">
                         <div className="image-grid">
                            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Gallery-image-1.webp" customClass={'gallery-img'}/>
                            <Link to=""> 
                                <div className="view-image">
                                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/View-button.svg" customClass="play-video-player"/>
                                </div>
                            </Link>
                         </div>
                         <div className="image-grid">
                            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Gallery-image-1.webp" customClass={'gallery-img'}/>
                            <Link to=""> 
                                <div className="view-image">
                                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/View-button.svg" customClass="play-video-player"/>
                                </div>
                            </Link>
                         </div>
                         <div className="image-grid">
                            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Gallery-image-1.webp" customClass={'gallery-img'}/>
                            <Link to=""> 
                                <div className="view-image">
                                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/View-button.svg" customClass="play-video-player"/>
                                </div>
                            </Link>
                         </div>
                         <div className="image-grid">
                            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Gallery-image-1.webp" customClass={'gallery-img'}/>
                            <Link to=""> 
                                <div className="view-image">
                                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/View-button.svg" customClass="play-video-player"/>
                                </div>
                            </Link>
                         </div>
                         <div className="image-grid">
                            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Gallery-image-1.webp" customClass={'gallery-img'}/>
                            <Link to=""> 
                                <div className="view-image">
                                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/View-button.svg" customClass="play-video-player"/>
                                </div>
                            </Link>
                         </div>
                         <div className="image-grid">
                            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Gallery-image-1.webp" customClass={'gallery-img'}/>
                            <Link to=""> 
                                <div className="view-image">
                                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/View-button.svg" customClass="play-video-player"/>
                                </div>
                            </Link>
                         </div>

                       </div>
                    </div>

             </div>
            </div>

            <div className="container test-APi">
            <div>
                    {loading ? <p>Loading images...</p> : 
                        images.length > 0 ? (
                        images.map((image, index) => (
                            <img key={index} src={image} alt={`Image ${index}`} width="200" />
                        ))
                        ) : (
                        <p>No images found.</p>
                        )}
                    </div>
            </div>
           
           <SiteFooter />
        </>
    )
}

export default ThePhotoGallery