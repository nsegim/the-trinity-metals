import ImageGallery from "../../../components/ImageGallery"
import './Gallery.css'
import SiteHeader from "../../../components/header/Header"
import SiteFooter from "../../../components/Footer/Footer"
import { Link } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import { fetchData } from "../../../config/apiConfig"
import Spinner from "../../../components/Spinner/Spinner"
import LightBox from "./VideoLightBox/LightBox"



const TheVideoGallery = ()=>{
     // The tabs declaration
     const [activeFilter, setActiveFilter] = useState('Tab1');
     const handleFilterClick = (tab) => {
       setActiveFilter(tab)
       
     }

         
        const [data, setData] = useState([]);
        const [thumbnail, setThumbnail] = useState([]);
         
     
         
     
          // Fetch gallery data
          useEffect(() => {
             let isMounted = true; // To prevent state updates on unmounted component
     
             const fetchGalleryData = async () => {
                 try {
                     const response = await fetchData('video-posts?_embed');
                     if (isMounted && response.length) {
                         setData(response);


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
     
       

         const [clickedPlayButtonLink, setClickedPlayButtonLink] = useState([])
         
         const [isOpen, setIsOpen] = useState(false)
         const popup = useRef(null)

        //  const handleClick = (event, item) => {
        //   event.preventDefault(); 
        //   setClickedPlayButtonLink(item?.acf?.video_url);
        //   setIsOpen(true)
        //   console.log(clickedPlayButtonLink)
        // };
         

        const handleClosePopup = () => {

           setIsOpen(false)

          
        }

        const handleClickOutSide = (event) =>{
          if (popup.current && !popup.current.contains(event.target)) {
            setIsOpen(false)
         }
        }
        

        useEffect(() => {
          if (isOpen) {
            document.addEventListener("mousedown", handleClickOutSide);
          } else {
            document.removeEventListener("mousedown", handleClickOutSide);
          }
      
          return () => {
            document.removeEventListener("mousedown", handleClickOutSide); // Cleanup on unmount
          };
        }, [isOpen]); // Runs when `isOpen` changes
      

        useEffect(()=>{console.log(data)}, [data])


        //Video fetch try
       const [youtubeList, setYoutubeList] = useState([]) // Initialize as empty array
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(null)

        const fetchYoutubeData = async () => {
          try {
            setLoading(true)
            setError(null)
            
            const APIKey = "AIzaSyBDIRHkiZhooxRilDmjWuFtAt6ax2ZDrVI" 
            const channelId = "UCs7L7h5xrBdfI7_4YLn66QA" 
            
            // FIRST: Get the uploads playlist ID from the channel
            const channelResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${APIKey}`
            )
            
            if (!channelResponse.ok) {
              throw new Error(`HTTP error! status: ${channelResponse.status}`)
            }
            
            const channelData = await channelResponse.json()
            
            if (!channelData.items || channelData.items.length === 0) {
              throw new Error("Channel not found or no items")
            }
            
            // Get the uploads playlist ID
            const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads
           // console.log("Uploads Playlist ID:", uploadsPlaylistId)
            
            // SECOND: Now fetch videos from the uploads playlist
            const videosResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=25&key=${APIKey}`
            )
            
            if (!videosResponse.ok) {
              throw new Error(`HTTP error! status: ${videosResponse.status}`)
            }
            
            const videosData = await videosResponse.json()
            //console.log("Videos data all:", videosData)
            
            // Set the videos to state
            setYoutubeList(videosData.items)
            
          } catch (error) {
            console.error("Error fetching YouTube data:", error)
            setError(error.message)
          } finally {
            setLoading(false)
          }
        }

        useEffect(() => {
          fetchYoutubeData()
        }, [])


        const handleVideoPlay = (event, item) => {
          event.preventDefault(); 
          setClickedPlayButtonLink(item?.snippet?.resourceId?.videoId);
          setIsOpen(true)
          console.log(clickedPlayButtonLink)
        };
         

     
    return(
        <>
          <SiteHeader />
          {/* Hero section */}
          <div className="custom-hero video-gallery">
                <div className="child-item-wrapper z-1">
                    <h1 className="heading text-uppercase">Videos</h1>
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
                        
                          {
                             youtubeList?.length > 0 ? (

                              <div className="video-category  All">
                                {
                                 youtubeList.map((item, index) => {
                                  
                                    
                                    return (
                                       <div className="image-grid youtube-vid-wrapper">
                                        {/* <ImageGallery imageUrl={item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url} customClass={'gallery-img'} /> */}
                                           <ImageGallery imageUrl ={item?.snippet?.thumbnails?.medium?.url} />

                                            <div className="play-video" onClick={(event) => handleVideoPlay(event, item)}>
                                              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Link-e1739190132637.png" customClass="play-video-player"/>
                                            </div>
                                          

                                          <div>{ thumbnail}</div>
                                 
                                      </div>
                                    )
                                   
                                  

                                 })
                                } 

                              </div>

                             ) : (
                                 <Spinner />
                             )
                             
                          }
                          
                          
                          

                       
                    </div>

                    {/* Video LightBox */}
                    {isOpen ? (
                       
                            <LightBox clickedPlayButtonLink={`https://youtube.com/embed/${clickedPlayButtonLink}?start&autoplay=0&controls=1&enablejsapi=1&modestbranding=1&origin=https://trinity-metals.com&rel=0&showinfo=0&version=3&wmode=transparent`} handleClosePopup={handleClosePopup} ref={popup}/>
                        
                          
                    ) : (
                        <div></div>
                    )}
                    

              </div>
            </div>
          <SiteFooter />
        </>
    )
}

export default TheVideoGallery