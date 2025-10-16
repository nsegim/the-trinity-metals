import { Link } from "react-router-dom";
import IncreamentCounter from "../../components/Counter";
import SiteFooter from "../../components/Footer/Footer";
import SiteHeader from "../../components/header/Header";
import ImageGallery from "../../components/ImageGallery";
import "./home.css";
import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/NavBar/NavigationBar";
import LoopGrid from "../../components/Loop-grid/LoopGrid";
import ImageLightBox from "../../components/LightBox/Image-LightBox/ImageLightBox";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import mySvg from '../../../public/asset/SVG.svg'
import { Helmet } from "react-helmet";




const BottomImagesGallery = [
  {
    'link': 'https://contents.trinity-metals.com/wp-content/uploads/2025/06/3_32.webp',
    'text': 'H.E Paul Kagame as our visitor'
  },
  {
    'link': 'https://contents.trinity-metals.com/wp-content/uploads/2025/06/3_32-2.webp',
    'text': 'H.E Paul Kagame as our visitor 2'
  },
  {
    'link': 'https://contents.trinity-metals.com/wp-content/uploads/2025/02/trinity-employes2-scaled.jpeg',
    'text': 'Employees of triniy'
  }
]



const HomePage = () => {
// Scroll to about section
const sectionRef = useRef(null);

const scrollToAboutSection = () => {
  sectionRef.current.scrollIntoView({ behavior: "smooth" });
}

    // The tabs declaration
    const [activeTab, setActiveTab] = useState('tab1');
    const handleTabClick = (tab) => {
      setActiveTab(tab)
      
    }

    // Handle video control on gallery section
    
    const videoRef = useRef(null)
   
    const [stop, setStop] = useState(false);

    const handleVideo = () => {
        setStop(!stop);
        if (stop === true) {
            videoRef.current.pause();
            
        } else {
            videoRef.current.play();
            
        }
    };
  
  //Detect window screen size changes
  const isSmallScreen = useMediaQuery("(max-width:480px)");
  const isMediumScreen = useMediaQuery("(max-width:768px)");
   
  const { t } = useTranslation()
  
  const handleVideoHandler = () =>{
    const youtubeLink = "https://www.youtube.com/@TrinityMetalsGroup";
    window.open(youtubeLink, "_blank");
  }

  return (
    <>
    {/* <HomeMeta/> */}

      <Helmet>
          <title>Home</title>
          <meta name="description" content="Trinity Metals Limited is a leading mining company in Rwanda, specializing in tin, tungsten, and tantalum with responsible mining practices" data-rh="true" />  
          <meta property="og:url" content="https://trinity-metals.com/" />
          <link rel="canonical" href="/" />  
      </Helmet>
          
      <SiteHeader />


      {/* hero section */}

      <div className="hero-section home-hero">
        <div className="background-video-container">
          <video autoPlay muted loop>
            <source src="https://contents.trinity-metals.com/wp-content/uploads/2025/06/homepage-1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="background-overlay">
        </div>  
        <div className="container hero-section-content-wrapper">
            <div className="basic-info">

              <h1 className="section-header"><span className="welcome-icon"><ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/welcome-icon.svg"/></span>{t("home.welcome")}</h1>
              <h2  dangerouslySetInnerHTML={{ __html: t("home.welcome-description") }} className="section-desc" />
              
              <p className="section-sub-desc">{t("home.min-description")}</p>

              <div className="info-buttons">
                
                <div className="button-element">
                  <span  className="get-started" onClick={scrollToAboutSection}>
                    
                    {t("home.get-stated-button")}
                    <span>
                      <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
                    </span>
                    
                  </span>
                </div>
                <div className="button-element">
                  <Link to="/our-projects" className="view-projects transprent-button">
                    {t("home.view-project-button")}
                    <span>
                      <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
                    </span>
                    
                    
                  </Link>
                </div>
              </div>
            </div>
            
            
        </div>
        <div className="coverage-precentages-wrapper">
             <div className="leadership-counter-wrapper">
                <div className="leadership-counter">
                   
                   <IncreamentCounter start= {0} end = {75} speed={20}/>%
                </div>
                <p className="leader-text">
                   {t("home.rwandan-leadership")}
                </p>
             </div>
             <div className="workforce-counter-wrapper">
                <div className="workforce-counter">
                   
                <IncreamentCounter start= {0} end = {99} speed={50}/>%
                </div>
                <p className="workforce-text">
                   {t("home.rwandan-workforce")}           
                </p>
             </div>
          </div>
      </div>

      {/* About Us */}
      <div className="about-us-intro-section-wrapper container" ref={sectionRef}>
         <div className="basic-intro-left">
          
          {/* <div className="coverage-precentages-wrapper">
             <div className="leadership-counter-wrapper">
                <div className="leadership-counter">
                   
                   <IncreamentCounter start= {0} end = {75} speed={20}/>%
                </div>
                <p className="leader-text">
                   {t("home.rwandan-leadership")}
                </p>
             </div>
             <div className="workforce-counter-wrapper">
                <div className="workforce-counter">
                   
                <IncreamentCounter start= {0} end = {99} speed={50}/>%
                </div>
                <p className="workforce-text">
                   {t("home.rwandan-workforce")}           
                </p>
             </div>
          </div> */}
         </div>
         <div className="basic-intro-right">
              <div className="right-intro-wrapper">
                <div className="right-intro-header">
                <h3 className="heading">
                  {t("home.home-about-heading")}
                </h3>
              </div>
          
              <div className="tabs-wrapper">
                {/* Tabs Buttons */}
                <div className="tabs-buttons">
                  <button className={`tab-button ${activeTab === "tab1" ? "active-button" : ""}`}
                   onClick={() => handleTabClick("tab1")}
                  >

                    {t("home.about-tab-who-we-are")}
                  </button>
                  <button className={`tab-button ${activeTab === "tab2" ? "active-button" : ""}`}
                   onClick ={() => handleTabClick("tab2")}
                  >
                    {t("home.about-tab-vision")}
                  </button>
                  <button className={`tab-button ${activeTab === "tab3" ? "active-button" : ""}`}
                   onClick ={() => handleTabClick("tab3")}
                  >
                     {t("home.about-tab-mission")}
                  </button>
                </div>
                {/* Tab Content */}
                <div className="tab-content-wrapper">
                   <div className={`tab-content ${activeTab === "tab1" ? "active-tab" : ""}`}>
                    <div className="tab-content-holder">
                      <div className="text-content">
                        <p>
                        {t("home.who-we-are-content")}
                        </p>
                      </div>
                      <div className="wrapper_content">
                        <div className="the_content_left">
                        <div className="who-are-we-numbers">
                          <div className="employess-count">
                            <span>6000+</span>
                            <p>{t("home.employees")}</p>
                          </div>
                        </div>
                        <div className="mine-site-numbers">
                          <div className="mine-site-count">
                            <span>3</span>
                            <p>{t("home.mine-site")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="the_content_right">
                        <ImageGallery  imageUrl= 'https://contents.trinity-metals.com/wp-content/uploads/2025/02/mine_site_employees.png' customClass="miners_img1" />
                      </div>
                     </div>
                      
                    </div>
                      
                   </div>
                   <div className={`tab-content ${activeTab === "tab2" ? "active-tab" : ""}`}>
                    <div className="tab-content-holder">
              
                     <div className="text-content">
                        <p>
                           {t("home.our-vision-content")}
                        </p>
                     </div>

                     <div className="wrapper_content">
                        
                        <div className="the_content_right">
                          <ImageGallery imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/mine_site_employees2.png' customClass="miners_img1" />
                        </div>
                     
                      </div>

                    </div>
                      
                   </div>
                   <div className={`tab-content ${activeTab === "tab3" ? "active-tab" : ""}`}>
                     <div className="tab-content-holder">
                     <div className="text-content">
                        <p>
                          {t("home.our-mission-content")}
                        </p>
                      </div>
                      <div className="wrapper_content">
                        
                        <div className="the_content_right">
                          <ImageGallery imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/mine_site_employees3.png' customClass="miners_img1" />
                        </div>
                     
                      </div>
                   </div>
                   </div>
                </div>
              </div>
               

              <div className="buttonElement">
                <Link to="/about" className="hover-green">
                  
                  <span>{t("home.read-more-button")}</span>
                  <ImageGallery imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/Arrow2.svg' />

                </Link>
              </div>
            </div>

            

         </div>
      </div>
       {/* Our Projects */}
       <div className="the-top-bg"></div>
       <div className="our-porject-wrapper">
          <div className="container">
              <div className="container-holder">
                <div className="sectionTops">
                  <div className="section-heading">
                    <h1 className="section-header-2">
                      <span className="welcome-icon">
                        <ImageGallery imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/welcome-icon2.svg' />
                      </span>{t("home.latest-work-section")}
                      
                    </h1>
                  <h2 className="heading">
                    <span className="text-white">
                    {t("home.our-project")}
                    </span>
                  </h2>


                  </div>
                  
                  <div className="button-element">
                  <Link to="our-projects" className="view-projects transprent-button">
                    {t("home.view-project-button")}
                    <span>
                      <ImageGallery imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg'/>
                    </span>
                    
                    
                  </Link>
                </div>
                  
                </div>

                <div className="cards-wrapper d-flex">
                   <div className="a-card">
                   
                     
                     
                      <div className="featured-image">
                        <Link to="/our-projects/nyakabingo">
                          <ImageGallery imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/nyakabingo-mine-min.png' customClass= "card-image" />
                        </Link>  
                      </div>
                      
                      <div className="project-title">
                        <Link to="/our-projects/nyakabingo">
                          <span>
                          {t("home.trinity-Nyakabingo-mine")}
                          </span>
                        </Link>
                      </div>
                   </div>
                   
                   <div className="a-card">
                      <div className="featured-image">
                        <Link to="/our-projects/musha">
                          <ImageGallery imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/musha_mine-min.png' customClass= "card-image" />
                        </Link>  
                      </div>
                      <div className="project-title">
                          <Link to="/our-projects/musha">
                            <span>
                            {t("home.trinity-musha-mine")}
                            </span>
                          </Link>
                        </div>
                   </div>
                   <div className="a-card">
                      <div className="featured-image">
                        <Link to="/our-projects/rutongo">
                          <ImageGallery imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/rutongo-min.png' customClass= "card-image"/>
                        </Link>  
                      </div>
                      <div className="project-title">
                          <Link to="/our-projects/rutongo">
                            <span>
                            {t("home.rutongo-mine")}
                            </span>
                          </Link>
                        </div>
                   </div>
                </div>
            </div>
            
          </div>
       </div>

       {/* Sastainability */}
       <div className="sastainability-section-wrapper sastain-home">
        <div className="container content-wrapper">
          <div className="d-flex Sastainability-content">
          <div className="col-md-6 Sastainability-image">
            
          </div>
           <div className="col-md-6 Sastainability-right">
             <h2 className="section-header">
              <span className="welcome-icon">
                <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/06/Vector.svg"/>
              </span>{t("home.sustainability")}
             </h2>

             <h3 className="heading w-100">
              <span>{t("home.we-are-energy")}</span>
             </h3>

             <div className="text-content002">
              <p className="">{t("home.we-are-energy-description")}</p>
              <p className="">
              {t("home.we-are-energy-description1")} 
              </p>
             </div>

             <div className="button-element">
                  <Link to="/sustainability" className="view-projects transprent-button">
                    {t("home.read-more-button")}
                    <span>
                      <ImageGallery imageUrl={mySvg}/>
                    </span>
                    
                    
                  </Link>
            </div>


           </div>
         </div>
        </div>
         
       </div>

       {/* Latest articles section */}
       <div className="article-sectionwrapper">
        <div className="container">
          <div className="sectionTops pb-4">
                  <div className="section-heading">
                    <h1 className="section-header-2 with-blue">
                      <span className="welcome-icon-blue me-3">
                        <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/welcome-icon-blue.svg"/>
                      </span>
                      {t("home.blog-post-section")}
                      
                    </h1>
                  <h2 className="heading">
                    <span>
                    {t("home.latest-articles")}
                    </span>
                  </h2>


                  </div>
                  
                  <div className="button-element">
                  <Link to="/investor-relations/latest-news" className="explore-more">
                  {t("home.read-more-button")}
                    <span>
                      <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
                    </span>
                    
                    
                  </Link>
                </div>
                  
          </div>

          <div className="articles-cards-wrapper">
            <LoopGrid itemsPerPage={ isMediumScreen ? 1 : 3 } />

          </div>
        </div>
       </div>
        
       {/* Our Gallery Section */}
       <div className="gallery-section">
        <div className="container">
          <div className="sectionTops">
                  <div className="section-heading">
                    <h1 className="section-header-2 with-blue">
                      <span className="welcome-icon-blue me-3">
                        <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/welcome-icon-blue.svg"/>
                      </span>
                      {t("home.media-section")}
                      
                    </h1>
                  <h2 className="heading">
                    <span>
                   {t("home.our-gallery")}
                    </span>
                  </h2>


                  </div>
                  
                  <div className="button-element">
                  <Link to="/investor-relations/gallery/photos" className="explore-more">
                    {t("home.view-gallery-btn")}
                    <span>
                      <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
                    </span>
                    
                    
                  </Link>
                </div>
                  
          </div>
          <div className="media-sample">
            <div className="video-wrapper">
                {/* <video  
                ref = {videoRef}
                 
                 muted>
                   <source src="https://contents.trinity-metals.com/wp-content/uploads/2022/12/Loop-9.mp4" type="video/mp4" />
                </video>
               
                 
                <div className="play-button" onClick={handleVideoHandler}>
                  <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Play-button.svg"/>
                </div> */}
                 <iframe 
                 className="video-player-fromyoutbe"
               
                src="https://www.youtube.com/embed/aSxVT-MduHQ?controls=1&modestbranding=1&showinfo=0&rel=0&fs=0"
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="YouTube Video"
              />
            </div>
           

            
            <div className="image-wrapper">
             
              {/* <ImageLightBox /> */}

              <ImageLightBox
                  images={BottomImagesGallery} 
                  renderImage={(images, handleClick) => (
                    <div className="image-grid-wrapper">
                      <div className="the-image-grid">
                        {images.map((item, index) => (
                          <div key={index} className={`grid-item${index + 1}`}>
                            <img
                              src={item.link}
                              alt={item.text}
                              className="gallery-image"
                              onClick={() => handleClick(item, index)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>  
                  )}
              />


              
            </div>
          </div>
        </div>


       </div>

      
      
      <SiteFooter />

      {/* <div className="container pb-5">
        <Navbar />
      </div> */}
    </>
  );
};
export default HomePage;
