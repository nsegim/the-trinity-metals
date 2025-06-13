import ImageGallery from "../../../components/ImageGallery";
import './Gallery.css';
import SiteHeader from "../../../components/header/Header";
import SiteFooter from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchData } from "../../../config/apiConfig";
import TheModal from "../../../components/LightBox/Image-LightBox/Modal";
import ImageLightBox from "../../../components/LightBox/Image-LightBox/ImageLightBox";
import Spinner from "../../../components/Spinner/Spinner";


const ThePhotoGallery = () => {
    // The tabs declaration
    const [activeFilter, setActiveFilter] = useState('Tab1');
    const handleFilterClick = (tab) => setActiveFilter(tab);

    // Handling Images from Trinity dashboard
   // State for gallery and images
   const [gallery, setGallery] = useState([]);
   const [attachmentsUrl, setAttachmentsUrl] = useState([]);
   const [imageUrl, setImageUrl] = useState([]);
   const [loading, setLoading] = useState(true);
   const [allImages, setAllImages] = useState([]);
   const [All, setAll] = useState([]);
   const [Sports, setSports] = useState([]);
   const [Events, setEvents] = useState([]);
   const [Visitors, setVisitors] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);

   const [selectedGallery, setSelectedGallery] = useState([]);
    

    

     // Fetch gallery data
     useEffect(() => {
        let isMounted = true; // To prevent state updates on unmounted component

        const fetchGalleryData = async () => {
            try {
                const response = await fetchData('gallery?per_page=100&_embed');
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

                    // // // Extract attachment URLs
                    // // const urls = response.flatMap(item =>
                    // //     item._links["acf:attachment"]?.map(att => att.href) || []
                    // // );
                    // setAttachmentsUrl(urls);
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
    
        // Assign slices to different state variables
        setAll(flattenedImages.slice().reverse());
        setSports(allImages[0].slice().reverse() || []);
        setEvents(allImages[3].slice().reverse() || []);
        setVisitors(allImages[2].slice().reverse() || []); 
    
      

    
    }, [allImages]); // Re-run only when allImages changes


    const handleFilterGallery = (filter) => {
        const galleries = {
            All: All,
            Sports: Sports,
            Events: Events,
            Visitors: Visitors
        }
        setSelectedGallery(galleries[filter] || All);
    }

  const itemsPerPage = 16;
    // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (selectedGallery?.length > 0 ? selectedGallery : All).slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(selectedGallery.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
 

  //Pagination Scroll rediction
  const scrollRef = useRef();
  const scrollToTheTop = () => {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }
   
  useEffect(() => {
        scrollToTheTop();
  }, [currentPage]);


    return (
        <>  
            <SiteHeader />
            {/* Hero Section */}
            <div className="custom-hero photo-gallery">
                <div className="child-item-wrapper z-1">
                    <h1 className="heading text-uppercase">Photos</h1>
                </div>
            </div>

            {/* Gallery Navigation */}
            <div className="gallery-navigation">
                <div className="gallery-nav-wrapper d-flex">
                    <Link to="/investor-relations/gallery/photos" className="gallery-nav visited">
                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Photo-icon.svg"/>
                        <span>Photo Gallery</span>
                    </Link>
                    <Link to="/investor-relations/gallery/videos" className="gallery-nav">
                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Video-icon.svg"/>
                        <span>Video Gallery</span>
                    </Link>
                </div>
            </div>

            {/* Photo Gallery */}
            <div className="photo-gallery-wrapper" ref={scrollRef}>
                <div className="photo-gallery-container container">
                    <div className="photo-gallery-filters">
                        {["All", "Visitors", "Events", "Sports"].map((tab, index) => (
                            <button 
                                key={index} 
                                onClick={() => (handleFilterClick(`Tab${index + 1}`), handleFilterGallery(tab))} 
                                className={`filter-title ${activeFilter === `Tab${index + 1}` ? "active-button" : ""}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    
                           <div className={`photos-wrapper ${activeFilter === "tab1" ? "active-gallery": ""}`} >
                                   {
                                      allImages.length > 0 ?  (
                                        <ImageLightBox
                                            images={currentItems}
                                            renderImage={(images, handleClick) => (
                                                <div className="photo-category All">
                                                    {images.map((item, index) => (
                                                        <div key={index} className="image-grid">
                                                            <ImageGallery
                                                                imageUrl={item.link}
                                                                customClass="gallery-img"
                                                            />
                                                            <div className="view-image" onClick={() => handleClick(item, index)}>

                                                                <ImageGallery
                                                                    imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/View-button.svg"
                                                                    customClass="play-video-player"
                                                                    
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        />
                                      ) : (
                                        <Spinner />
                                      )
                                   }  
                                   
                                   
                                    {/* <ImageLightBox
                                        images={currentItems}
                                        renderImage={(images, handleClick) => (
                                            <div className="photo-category All">
                                                {images.map((item, index) => (
                                                    <div key={index} className="image-grid">
                                                        <ImageGallery
                                                            imageUrl={item.link}
                                                            customClass="gallery-img"
                                                        />
                                                        <div className="view-image" onClick={() => handleClick(item, index)}>

                                                            <ImageGallery
                                                                imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/View-button.svg"
                                                                customClass="play-video-player"
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    /> */}
                            </div>

                            <div className="pagination">
                                    <button 
                                        className="pagination-btn" 
                                        disabled={currentPage === 1} 
                                        onClick={() => {
                                            setCurrentPage(currentPage - 1);
                                            scrollToTheTop();
                                        }}
                                    >
                                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Vector.svg" />
                                    </button>
                            
                                            {/* Page Numbers */}
                                            <div className="page-numbers-wrapper">
                            
                                              {pageNumbers.map((page) => (
                                                  <span 
                                                    key={page} 
                                                    className={`page-number ${currentPage === page ? "active" : ""}`} 
                                                    onClick={() => {
                                                        setCurrentPage(page);
                                                        scrollToTheTop();
                                                    }}
                                                  >
                                                    {page}
                                                  </span>
                                              
                                              
                                              ))}
                                           </div>
                                            {/* Next Button */}
                                    <button 
                                        className="pagination-btn" 
                                        disabled={currentPage === totalPages} 
                                        onClick={() => {
                                            setCurrentPage(currentPage + 1);
                                            scrollToTheTop();
                                        }}
                                    >
                                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Vector-1-1.svg" />
                                    </button>
                            </div>
                          
                        

                    

                </div>
            </div>

            <SiteFooter />
        </>
    );
};

export default ThePhotoGallery;
