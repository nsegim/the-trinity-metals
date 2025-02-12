import ImageGallery from "../../../components/ImageGallery"
import './Gallery.css'
import SiteHeader from "../../../components/header/Header"
import SiteFooter from "../../../components/Footer/Footer"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
const TheGalleryGallery = ()=>{
     // The tabs declaration
     const [activeFilter, setActiveFilter] = useState('Tab1');
     const handleFilterClick = (tab) => {
       setActiveFilter(tab)
       
     }
    return(
        <>
          <SiteHeader />
          {/* Hero section */}
          <div className="custom-hero video-gallery">
                <div className="child-item-wrapper z-1">
                    <h1 className="heading">Videos</h1>
                </div>
          </div>
           {/* Gallery Navigation */}
           <div className="gallery-navigation">
             <div className="gallery-nav-wrapper d-flex">
                <Link to="/investor-relations/gallery/photos" className="gallery-nav">
                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Photo-icon.svg"/>
                    <span>
                      Photo Gallery
                    </span>
                </Link>
                <Link to="/investor-relations/gallery/videos" className="gallery-nav visited">
                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Video-icon.svg"/>
                    <span>
                    Video Gallery
                    </span>
                </Link>

             </div>
             
            </div>


             {/* The Photo gallery */}
            <div className="video-gallery-wrapper">
              <div className="video-gallery-container container">
                    <div className="video-gallery-filters">
                        <button onClick={()=> handleFilterClick("Tab1")} className={`filter-title ${activeFilter === "Tab1" ? "active-button" : ""}`}>All</button>
                        <button onClick={()=>  handleFilterClick("Tab2")} className={`filter-title ${activeFilter === "Tab2" ? "active-button" : ""}`}>Visitors</button>
                        <button onClick={()=>  handleFilterClick("Tab3")} className={`filter-title ${activeFilter === "Tab3" ? "active-button" : ""}`}>Events</button>
                        <button onClick={()=>  handleFilterClick("Tab4")} className={`filter-title ${activeFilter === "Tab4" ? "active-button" : ""}`}>Sports</button>
                    </div>

                    <div className="videos-wrapper">
                        <div className="video-category  All">
                          <div className="image-grid">
                            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Gallery-image-1.webp" customClass={'gallery-img'}/>
                            <Link to=""> 
                              <div className="play-video">
                                 <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Link-e1739190132637.png" customClass="play-video-player"/>
                              </div>
                            </Link>
                           
                          </div>
                          <div className="image-grid">
                            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Gallery-image-1.webp" customClass={'gallery-img'}/>
                            <Link to="">
                              <div className="play-video">
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Link-e1739190132637.png" customClass="play-video-player"/>
                              </div>
                            </Link>
                            
                          </div>
                          <div className="image-grid">
                            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Gallery-image-1.webp" customClass={'gallery-img'}/>
                            <Link to="">
                              <div className="play-video">
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Link-e1739190132637.png" customClass="play-video-player"/>
                              </div>
                            </Link>
                            
                          </div>
                          <div className="image-grid">
                            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Gallery-image-1.webp" customClass={'gallery-img'}/>
                            <Link to="">
                              <div className="play-video">
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Link-e1739190132637.png" customClass="play-video-player"/>
                              </div>
                            </Link>
                            
                          </div>
                          

                        </div>
                    </div>

              </div>
            </div>
          <SiteFooter />
        </>
    )
}

export default TheGalleryGallery