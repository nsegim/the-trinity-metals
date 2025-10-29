// import { Link } from "react-router-dom";
// import IncreamentCounter from "../../components/Counter";
// import SiteFooter from "../../components/Footer/Footer";
// import SiteHeader from "../../components/header/Header";
// import ImageGallery from "../../components/ImageGallery";
// import "./home.css";
// import { useState, useRef, useEffect } from "react";
// import Navbar from "../../components/NavBar/NavigationBar";
// import LoopGrid from "../../components/Loop-grid/LoopGrid";
// import ImageLightBox from "../../components/LightBox/Image-LightBox/ImageLightBox";
// import { useMediaQuery } from "@mui/material";
// import { useTranslation } from "react-i18next";
// import mySvg from '../../../public/asset/SVG.svg'
// import { Helmet } from "react-helmet-async";




// const BottomImagesGallery = [
//   {
//     'link': 'https://contents.trinity-metals.com/wp-content/uploads/2025/06/3_32.webp',
//     'text': 'H.E Paul Kagame as our visitor'
//   },
//   {
//     'link': 'https://contents.trinity-metals.com/wp-content/uploads/2025/05/3_32-2-768x1049.jpg.webp',
//     'text': 'H.E Paul Kagame as our visitor 2'
//   },
//   {
//     'link': 'https://contents.trinity-metals.com/wp-content/uploads/2025/02/trinity-employes2-scaled.jpeg.webp',
//     'text': 'Employees of triniy'
//   }
// ]



// const HomePage = () => {
// // Scroll to about section
// const sectionRef = useRef(null);

// const scrollToAboutSection = () => {
//   sectionRef.current.scrollIntoView({ behavior: "smooth" });
// }

//     // The tabs declaration
//     const [activeTab, setActiveTab] = useState('tab1');
//     const handleTabClick = (tab) => {
//       setActiveTab(tab)
      
//     }

//     // Handle video control on gallery section
    
//     const videoRef = useRef(null)
   
//     const [stop, setStop] = useState(false);

//     const handleVideo = () => {
//         setStop(!stop);
//         if (stop === true) {
//             videoRef.current.pause();
            
//         } else {
//             videoRef.current.play();
            
//         }
//     };
  
//   //Detect window screen size changes
//   const isSmallScreen = useMediaQuery("(max-width:480px)");
//   const isMediumScreen = useMediaQuery("(max-width:768px)");
   
//   const { t } = useTranslation()
  
//   const handleVideoHandler = () =>{
//     const youtubeLink = "https://www.youtube.com/@TrinityMetalsGroup";
//     window.open(youtubeLink, "_blank");
//   }

//   return (
//     <>
//     {/* <HomeMeta/> */}

//       {/* <Helmet>
//           <title>Home | Trinity Metals Limited</title>
//           <meta name="description" content="Trinity Metals Limited is a leading mining company in Rwanda, specializing in tin, tungsten, and tantalum with responsible mining practices ----" />  
//           <meta property="og:url" content="https://trinity-metals.com/" />
//           <link rel="canonical" href="/" />  
//       </Helmet> */}
      
          
//       <SiteHeader />


//       {/* hero section */}

//       <div className="hero-section home-hero">
//         <div className="background-video-container">
//           <video autoplay muted loop playsinline preload="metadata">
//             <source src="https://contents.trinity-metals.com/wp-content/uploads/2025/10/homepage-1-compressed.webm" type="video/webm" />
//             <source src="https://contents.trinity-metals.com/wp-content/uploads/2025/10/homepage-1-compressed.mp4" type="video/mp4" />
            

//           </video>
//         </div>
//         <div className="background-overlay">
//         </div>  
//         <div className="container hero-section-content-wrapper">
//             <div className="basic-info">

//               <h1 className="section-header"><span className="welcome-icon"><ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/welcome-icon.svg" height="10px" width="36px" /></span>{t("home.welcome")}</h1>
//               <h2  dangerouslySetInnerHTML={{ __html: t("home.welcome-description") }} className="section-desc" />
              
//               <p className="section-sub-desc">{t("home.min-description")}</p>

//               <div className="info-buttons">
                
//                 <div className="button-element">
//                   <span  className="get-started" onClick={scrollToAboutSection}>
                    
//                     {t("home.get-stated-button")}
//                     <span>
//                       <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg" height="24px" width="24px" />
//                     </span>
                    
//                   </span>
//                 </div>
//                 <div className="button-element">
//                   <Link to="/our-projects" className="view-projects transprent-button">
//                     {t("home.view-project-button")}
//                     <span>
//                       <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg" height="24px" width="24px"/>
//                     </span>
                    
                    
//                   </Link>
//                 </div>
//               </div>
//             </div>
            
            
//         </div>
//         <div className="coverage-precentages-wrapper">
//              <div className="leadership-counter-wrapper">
//                 <div className="leadership-counter">
                   
//                    <IncreamentCounter start= {0} end = {75} speed={20}/>%
//                 </div>
//                 <p className="leader-text">
//                    {t("home.rwandan-leadership")}
//                 </p>
//              </div>
//              <div className="workforce-counter-wrapper">
//                 <div className="workforce-counter">
                   
//                 <IncreamentCounter start= {0} end = {99} speed={50}/>%
//                 </div>
//                 <p className="workforce-text">
//                    {t("home.rwandan-workforce")}           
//                 </p>
//              </div>
//           </div>
//       </div>

//       {/* About Us */}
//       <div className="about-us-intro-section-wrapper container" ref={sectionRef}>
//          <div className="basic-intro-left">
          
//           {/* <div className="coverage-precentages-wrapper">
//              <div className="leadership-counter-wrapper">
//                 <div className="leadership-counter">
                   
//                    <IncreamentCounter start= {0} end = {75} speed={20}/>%
//                 </div>
//                 <p className="leader-text">
//                    {t("home.rwandan-leadership")}
//                 </p>
//              </div>
//              <div className="workforce-counter-wrapper">
//                 <div className="workforce-counter">
                   
//                 <IncreamentCounter start= {0} end = {99} speed={50}/>%
//                 </div>
//                 <p className="workforce-text">
//                    {t("home.rwandan-workforce")}           
//                 </p>
//              </div>
//           </div> */}
//          </div>
//          <div className="basic-intro-right">
//               <div className="right-intro-wrapper">
//                 <div className="right-intro-header">
//                 <h2 className="heading">
//                   {t("home.home-about-heading")}
//                 </h2>
//               </div>
          
//               <div className="tabs-wrapper">
//                 {/* Tabs Buttons */}
//                 <div className="tabs-buttons">
//                   <button className={`tab-button ${activeTab === "tab1" ? "active-button" : ""}`}
//                    onClick={() => handleTabClick("tab1")}
//                   >

//                     {t("home.about-tab-who-we-are")}
//                   </button>
//                   <button className={`tab-button ${activeTab === "tab2" ? "active-button" : ""}`}
//                    onClick ={() => handleTabClick("tab2")}
//                   >
//                     {t("home.about-tab-vision")}
//                   </button>
//                   <button className={`tab-button ${activeTab === "tab3" ? "active-button" : ""}`}
//                    onClick ={() => handleTabClick("tab3")}
//                   >
//                      {t("home.about-tab-mission")}
//                   </button>
//                 </div>
//                 {/* Tab Content */}
//                 <div className="tab-content-wrapper">
//                    <div className={`tab-content ${activeTab === "tab1" ? "active-tab" : ""}`}>
//                     <div className="tab-content-holder">
//                       <div className="text-content">
//                         <p>
//                         {t("home.who-we-are-content")}
//                         </p>
//                       </div>
//                       <div className="wrapper_content">
//                         <div className="the_content_left">
//                         <div className="who-are-we-numbers">
//                           <div className="employess-count">
//                             <span>6000+</span>
//                             <p>{t("home.employees")}</p>
//                           </div>
//                         </div>
//                         <div className="mine-site-numbers">
//                           <div className="mine-site-count">
//                             <span>3</span>
//                             <p>{t("home.mine-site")}</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="the_content_right">
//                         <ImageGallery  imageUrl= 'https://contents.trinity-metals.com/wp-content/uploads/2025/02/mine_site_employees.png' customClass="miners_img1" />
//                       </div>
//                      </div>
                      
//                     </div>
                      
//                    </div>
//                    <div className={`tab-content ${activeTab === "tab2" ? "active-tab" : ""}`}>
//                     <div className="tab-content-holder">
              
//                      <div className="text-content">
//                         <p>
//                            {t("home.our-vision-content")}
//                         </p>
//                      </div>

//                      <div className="wrapper_content">
                        
//                         <div className="the_content_right">
//                           <ImageGallery imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/mine_site_employees2.png' customClass="miners_img1" />
//                         </div>
                     
//                       </div>

//                     </div>
                      
//                    </div>
//                    <div className={`tab-content ${activeTab === "tab3" ? "active-tab" : ""}`}>
//                      <div className="tab-content-holder">
//                      <div className="text-content">
//                         <p>
//                           {t("home.our-mission-content")}
//                         </p>
//                       </div>
//                       <div className="wrapper_content">
                        
//                         <div className="the_content_right">
//                           <ImageGallery imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/mine_site_employees3.png' customClass="miners_img1" />
//                         </div>
                     
//                       </div>
//                    </div>
//                    </div>
//                 </div>
//               </div>
               

//               <div className="buttonElement">
//                 <Link to="/about" className="hover-green">
                  
//                   <span>{t("home.read-more-button")}</span>
//                   <ImageGallery imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/Arrow2.svg' />

//                 </Link>
//               </div>
//             </div>

            

//          </div>
//       </div>
//        {/* Our Projects */}
//        <div className="the-top-bg"></div>
//        <div className="our-porject-wrapper">
//           <div className="container">
//               <div className="container-holder">
//                 <div className="sectionTops">
//                   <div className="section-heading">
//                     <h2 className="section-header-2">
//                       <span className="welcome-icon">
//                         <ImageGallery imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/welcome-icon2.svg' />
//                       </span>{t("home.latest-work-section")}
                      
//                     </h2>
//                   <h3 className="heading">
//                     <span className="text-white">
//                     {t("home.our-project")}
//                     </span>
//                   </h3>


//                   </div>
                  
//                   <div className="button-element">
//                   <Link to="our-projects" className="view-projects transprent-button">
//                     {t("home.view-project-button")}
//                     <span>
//                       <ImageGallery imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg'/>
//                     </span>
                    
                    
//                   </Link>
//                 </div>
                  
//                 </div>

//                 <div className="cards-wrapper d-flex">
//                    <div className="a-card">
                   
                     
                     
//                       <div className="featured-image">
//                         <Link to="/our-projects/nyakabingo">
//                           <ImageGallery imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/nyakabingo-mine-min.png.webp' customClass= "card-image" />
//                         </Link>  
//                       </div>
                      
//                       <div className="project-title">
//                         <Link to="/our-projects/nyakabingo">
//                           <span>
//                           {t("home.trinity-Nyakabingo-mine")}
//                           </span>
//                         </Link>
//                       </div>
//                    </div>
                   
//                    <div className="a-card">
//                       <div className="featured-image">
//                         <Link to="/our-projects/musha">
//                           <ImageGallery imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/musha_mine-min.png.webp' customClass= "card-image" />
//                         </Link>  
//                       </div>
//                       <div className="project-title">
//                           <Link to="/our-projects/musha">
//                             <span>
//                             {t("home.trinity-musha-mine")}
//                             </span>
//                           </Link>
//                         </div>
//                    </div>
//                    <div className="a-card">
//                       <div className="featured-image">
//                         <Link to="/our-projects/rutongo">
//                           <ImageGallery imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/rutongo-min.png.webp' customClass= "card-image"/>
//                         </Link>  
//                       </div>
//                       <div className="project-title">
//                           <Link to="/our-projects/rutongo">
//                             <span>
//                             {t("home.rutongo-mine")}
//                             </span>
//                           </Link>
//                         </div>
//                    </div>
//                 </div>
//             </div>
            
//           </div>
//        </div>

//        {/* Sastainability */}
//        <div className="sastainability-section-wrapper sastain-home">
//         <div className="container content-wrapper">
//           <div className="d-flex Sastainability-content">
//           <div className="col-md-6 Sastainability-image">
            
//           </div>
//            <div className="col-md-6 Sastainability-right">
//              <h2 className="section-header">
//               <span className="welcome-icon">
//                 <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/06/Vector.svg"/>
//               </span>{t("home.sustainability")}
//              </h2>

//              <h3 className="heading w-100">
//               <span>{t("home.we-are-energy")}</span>
//              </h3>

//              <div className="text-content002">
//               <p className="">{t("home.we-are-energy-description")}</p>
//               <p className="">
//               {t("home.we-are-energy-description1")} 
//               </p>
//              </div>

//              <div className="button-element">
//                   <Link to="/sustainability" className="view-projects transprent-button">
//                     {t("home.read-more-button")}
//                     <span>
//                       <ImageGallery imageUrl={mySvg}/>
//                     </span>
                    
                    
//                   </Link>
//             </div>


//            </div>
//          </div>
//         </div>
         
//        </div>

//        {/* Latest articles section */}
//        <div className="article-sectionwrapper">
//         <div className="container">
//           <div className="sectionTops pb-4">
//                   <div className="section-heading">
//                     <h2 className="section-header-2 with-blue">
//                       <span className="welcome-icon-blue me-3">
//                         <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/welcome-icon-blue.svg"/>
//                       </span>
//                       {t("home.blog-post-section")}
                      
//                     </h2>
//                   <h3 className="heading">
//                     <span>
//                     {t("home.latest-articles")}
//                     </span>
//                   </h3>


//                   </div>
                  
//                   <div className="button-element">
//                   <Link to="/investor-relations/latest-news" className="explore-more">
//                   {t("home.read-more-button")}
//                     <span>
//                       <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
//                     </span>
                    
                    
//                   </Link>
//                 </div>
                  
//           </div>

//           <div className="articles-cards-wrapper">
//             <LoopGrid itemsPerPage={ isMediumScreen ? 1 : 3 } />

//           </div>
//         </div>
//        </div>
        
//        {/* Our Gallery Section */}
//        <div className="gallery-section">
//         <div className="container">
//           <div className="sectionTops">
//                   <div className="section-heading">
//                     <h2 className="section-header-2 with-blue">
//                       <span className="welcome-icon-blue me-3">
//                         <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/welcome-icon-blue.svg"/>
//                       </span>
//                       {t("home.media-section")}
                      
//                     </h2>
//                   <h3 className="heading">
//                     <span>
//                    {t("home.our-gallery")}
//                     </span>
//                   </h3>


//                   </div>
                  
//                   <div className="button-element">
//                   <Link to="/investor-relations/gallery/photos" className="explore-more">
//                     {t("home.view-gallery-btn")}
//                     <span>
//                       <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
//                     </span>
                    
                    
//                   </Link>
//                 </div>
                  
//           </div>
//           <div className="media-sample">
//             <div className="video-wrapper">
//                 {/* <video  
//                 ref = {videoRef}
                 
//                  muted>
//                    <source src="https://contents.trinity-metals.com/wp-content/uploads/2022/12/Loop-9.mp4" type="video/mp4" />
//                 </video>
               
                 
//                 <div className="play-button" onClick={handleVideoHandler}>
//                   <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Play-button.svg"/>
//                 </div> */}
//                  <iframe  
//                  className="video-player-fromyoutbe"
               
//                 src="https://www.youtube.com/embed/aSxVT-MduHQ?controls=1&modestbranding=1&showinfo=0&rel=0&fs=0"
//                 frameBorder="0" 
//                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
//                 allowFullScreen
//                 title="YouTube Video"
//               />
//             </div>
           

            
//             <div className="image-wrapper">
             
//               {/* <ImageLightBox /> */}

//               <ImageLightBox
//                   images={BottomImagesGallery} 
//                   renderImage={(images, handleClick) => (
//                     <div className="image-grid-wrapper">
//                       <div className="the-image-grid">
//                         {images.map((item, index) => (
//                           <div key={index} className={`grid-item${index + 1}`}>
//                             <img
//                               src={item.link}
//                               alt={item.text}
//                               className="gallery-image"
//                               onClick={() => handleClick(item, index)}
//                             />
//                           </div>
//                         ))}
//                       </div>
//                     </div>  
//                   )}
//               />


              
//             </div>
//           </div>
//         </div>


//        </div>

      
      
//       <SiteFooter />

//       {/* <div className="container pb-5">
//         <Navbar />
//       </div> */}
//     </>
//   );
// };
// export default HomePage;

import { Link } from "react-router-dom";
import { useState, useRef, useCallback, lazy, Suspense } from "react";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

// Static imports for commonly used components
import ImageGallery from "../../components/ImageGallery";
import SiteFooter from "../../components/Footer/Footer";
import SiteHeader from "../../components/header/Header";
import ImageLightBox from "../../components/LightBox/Image-LightBox/ImageLightBox";

// Lazy load only truly heavy components
const IncreamentCounter = lazy(() => import("../../components/Counter"));
const LoopGrid = lazy(() => import("../../components/Loop-grid/LoopGrid"));

import "./home.css";
import mySvg from '../../../public/asset/SVG.svg';

// Optimized image component
const OptimizedImage = ({ src, alt, className, width, height, loading = "lazy" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
    />
  );
};

// Lazy YouTube component
const LazyYouTube = () => {
  const [loadVideo, setLoadVideo] = useState(false);
  
  return (
    <div className="video-wrapper">
      
     
        <iframe  
          className="video-player-fromyoutbe"
          src="https://www.youtube.com/embed/aSxVT-MduHQ?controls=1&modestbranding=1&showinfo=0&rel=0&fs=0"
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title="YouTube Video"
          loading="lazy"
          width="100%"
          height="400"
        />
  
    </div>
  );
};

// Tab content components
const Tab1Content = ({ t }) => (
  <div className="tab-content-holder">
    <div className="text-content">
      <p>{t("home.who-we-are-content")}</p>
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
        <OptimizedImage 
          src='https://contents.trinity-metals.com/wp-content/uploads/2025/02/mine_site_employees.png' 
          alt="Mine site employees"
          className="miners_img1"
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

const Tab2Content = ({ t }) => (
  <div className="tab-content-holder">
    <div className="text-content">
      <p>{t("home.our-vision-content")}</p>
    </div>
    <div className="wrapper_content">
      <div className="the_content_right">
        <OptimizedImage 
          src='https://contents.trinity-metals.com/wp-content/uploads/2025/02/mine_site_employees2.png' 
          alt="Our vision"
          className="miners_img1"
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

const Tab3Content = ({ t }) => (
  <div className="tab-content-holder">
    <div className="text-content">
      <p>{t("home.our-mission-content")}</p>
    </div>
    <div className="wrapper_content">
      <div className="the_content_right">
        <OptimizedImage 
          src='https://contents.trinity-metals.com/wp-content/uploads/2025/02/mine_site_employees3.png' 
          alt="Our mission"
          className="miners_img1"
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

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
];

// Loading fallback component
const LoadingFallback = ({ height = 200 }) => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: `${height}px`,
    background: '#f5f5f5'
  }}>
    <div>Loading...</div>
  </div>
);

const HomePage = () => {
  // Scroll to about section
  const sectionRef = useRef(null);

  const scrollToAboutSection = useCallback(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // The tabs declaration
  const [activeTab, setActiveTab] = useState('tab1');
  
  const handleTabClick = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  // Detect window screen size changes
  const isMediumScreen = useMediaQuery("(max-width:768px)");
  
  const { t } = useTranslation();
  
  const handleVideoHandler = useCallback(() => {
    const youtubeLink = "https://www.youtube.com/@TrinityMetalsGroup";
    window.open(youtubeLink, "_blank");
  }, []);

  // Memoized tab content
  const tabContent = {
    tab1: <Tab1Content t={t} />,
    tab2: <Tab2Content t={t} />,
    tab3: <Tab3Content t={t} />
  };

  return (
    <>
      <Helmet>
        <title>Home | Trinity Metals Limited</title>
        <meta name="description" content="Trinity Metals Limited is a leading mining company in Rwanda, specializing in tin, tungsten, and tantalum with responsible mining practices" />  
        <meta property="og:url" content="https://trinity-metals.com/" />
        <link rel="canonical" href="/" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="https://contents.trinity-metals.com/wp-content/uploads/2025/06/homepage-1.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="https://contents.trinity-metals.com/wp-content/uploads/2025/02/welcome-icon.svg" as="image" />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://contents.trinity-metals.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://contents.trinity-metals.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </Helmet>
      
      <Suspense fallback={<LoadingFallback height={100} />}>
        <SiteHeader />
      </Suspense>

      {/* Hero Section */}
      <div className="hero-section home-hero">
        <div className="background-video-container">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="metadata"
            poster="https://contents.trinity-metals.com/wp-content/uploads/2025/05/Aerial_36-scaled.jpg.webp"
          >
            <source src="https://contents.trinity-metals.com/wp-content/uploads/2025/06/homepage-1.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <OptimizedImage 
              src="https://contents.trinity-metals.com/wp-content/uploads/2025/02/hero-fallback.jpg"
              alt="Trinity Metals Hero"
              loading="eager"
            />
          </video>
        </div>
        <div className="background-overlay"></div>  
        <div className="container hero-section-content-wrapper">
          <div className="basic-info">
            <h1 className="section-header">
              <span className="welcome-icon">
                <Suspense fallback={<span>📷</span>}>
                  <ImageGallery 
                    imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/welcome-icon.svg" 
                    height="10px" 
                    width="36px" 
                  />
                </Suspense>
              </span>
              {t("home.welcome")}
            </h1>
            <h2 dangerouslySetInnerHTML={{ __html: t("home.welcome-description") }} className="section-desc" />
            <p className="section-sub-desc">{t("home.min-description")}</p>

            <div className="info-buttons">
              <div className="button-element">
                <span className="get-started" onClick={scrollToAboutSection}>
                  {t("home.get-stated-button")}
                  <span>
                    <Suspense fallback={<span>→</span>}>
                      <ImageGallery 
                        imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg" 
                        height="24px" 
                        width="24px" 
                      />
                    </Suspense>
                  </span>
                </span>
              </div>
              <div className="button-element">
                <Link to="/our-projects" className="view-projects transprent-button">
                  {t("home.view-project-button")}
                  <span>
                    <Suspense fallback={<span>→</span>}>
                      <ImageGallery 
                        imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg" 
                        height="24px" 
                        width="24px"
                      />
                    </Suspense>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="coverage-precentages-wrapper">
          <div className="leadership-counter-wrapper">
            <div className="leadership-counter">
              <Suspense fallback={<span>75%</span>}>
                <IncreamentCounter start={0} end={75} speed={20} />%
              </Suspense>
            </div>
            <p className="leader-text">{t("home.rwandan-leadership")}</p>
          </div>
          <div className="workforce-counter-wrapper">
            <div className="workforce-counter">
              <Suspense fallback={<span>99%</span>}>
                <IncreamentCounter start={0} end={99} speed={50} />%
              </Suspense>
            </div>
            <p className="workforce-text">{t("home.rwandan-workforce")}</p>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="about-us-intro-section-wrapper container" ref={sectionRef}>
        <div className="basic-intro-left"></div>
        <div className="basic-intro-right">
          <div className="right-intro-wrapper">
            <div className="right-intro-header">
              <h2 className="heading">{t("home.home-about-heading")}</h2>
            </div>
          
            <div className="tabs-wrapper">
              {/* Tabs Buttons */}
              <div className="tabs-buttons">
                <button 
                  className={`tab-button ${activeTab === "tab1" ? "active-button" : ""}`}
                  onClick={() => handleTabClick("tab1")}
                >
                  {t("home.about-tab-who-we-are")}
                </button>
                <button 
                  className={`tab-button ${activeTab === "tab2" ? "active-button" : ""}`}
                  onClick={() => handleTabClick("tab2")}
                >
                  {t("home.about-tab-vision")}
                </button>
                <button 
                  className={`tab-button ${activeTab === "tab3" ? "active-button" : ""}`}
                  onClick={() => handleTabClick("tab3")}
                >
                  {t("home.about-tab-mission")}
                </button>
              </div>
              
              {/* Tab Content */}
              <div className="tab-content-wrapper">
                <div className={`tab-content ${activeTab === "tab1" ? "active-tab" : ""}`}>
                  {tabContent.tab1}
                </div>
                <div className={`tab-content ${activeTab === "tab2" ? "active-tab" : ""}`}>
                  {tabContent.tab2}
                </div>
                <div className={`tab-content ${activeTab === "tab3" ? "active-tab" : ""}`}>
                  {tabContent.tab3}
                </div>
              </div>
            </div>

            <div className="buttonElement">
              <Link to="/about" className="hover-green">
                <span>{t("home.read-more-button")}</span>
                <Suspense fallback={<span>→</span>}>
                  <ImageGallery 
                    imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/Arrow2.svg' 
                    alt="Arrow"
                  />
                </Suspense>
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
                <h2 className="section-header-2">
                  <span className="welcome-icon">
                    <Suspense fallback={<span>📷</span>}>
                      <ImageGallery 
                        imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/welcome-icon2.svg' 
                        alt="Welcome icon"
                      />
                    </Suspense>
                  </span>
                  {t("home.latest-work-section")}
                </h2>
                <h3 className="heading">
                  <span className="text-white">{t("home.our-project")}</span>
                </h3>
              </div>
              
              <div className="button-element">
                <Link to="our-projects" className="view-projects transprent-button">
                  {t("home.view-project-button")}
                  <span>
                    <Suspense fallback={<span>→</span>}>
                      <ImageGallery 
                        imageUrl='https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg' 
                        alt="Arrow"
                      />
                    </Suspense>
                  </span>
                </Link>
              </div>
            </div>

            <div className="cards-wrapper d-flex">
              <div className="a-card">
                <div className="featured-image">
                  <Link to="/our-projects/nyakabingo">
                    <OptimizedImage 
                      src='https://contents.trinity-metals.com/wp-content/uploads/2025/02/nyakabingo-mine-min.png' 
                      alt="Nyakabingo Mine"
                      className="card-image"
                      loading="lazy"
                    />
                  </Link>  
                </div>
                <div className="project-title">
                  <Link to="/our-projects/nyakabingo">
                    <span>{t("home.trinity-Nyakabingo-mine")}</span>
                  </Link>
                </div>
              </div>
              
              <div className="a-card">
                <div className="featured-image">
                  <Link to="/our-projects/musha">
                    <OptimizedImage 
                      src='https://contents.trinity-metals.com/wp-content/uploads/2025/02/musha_mine-min.png' 
                      alt="Musha Mine"
                      className="card-image"
                      loading="lazy"
                    />
                  </Link>  
                </div>
                <div className="project-title">
                  <Link to="/our-projects/musha">
                    <span>{t("home.trinity-musha-mine")}</span>
                  </Link>
                </div>
              </div>
              
              <div className="a-card">
                <div className="featured-image">
                  <Link to="/our-projects/rutongo">
                    <OptimizedImage 
                      src='https://contents.trinity-metals.com/wp-content/uploads/2025/02/rutongo-min.png' 
                      alt="Rutongo Mine"
                      className="card-image"
                      loading="lazy"
                    />
                  </Link>  
                </div>
                <div className="project-title">
                  <Link to="/our-projects/rutongo">
                    <span>{t("home.rutongo-mine")}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability */}
      <div className="sastainability-section-wrapper sastain-home">
        <div className="container content-wrapper">
          <div className="d-flex Sastainability-content">
            <div className="col-md-6 Sastainability-image"></div>
            <div className="col-md-6 Sastainability-right">
              <h2 className="section-header">
                <span className="welcome-icon">
                  <Suspense fallback={<span>🌱</span>}>
                    <ImageGallery 
                      imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/06/Vector.svg" 
                      alt="Sustainability icon"
                    />
                  </Suspense>
                </span>
                {t("home.sustainability")}
              </h2>

              <h3 className="heading w-100">
                <span>{t("home.we-are-energy")}</span>
              </h3>

              <div className="text-content002">
                <p>{t("home.we-are-energy-description")}</p>
                <p>{t("home.we-are-energy-description1")}</p>
              </div>

              <div className="button-element">
                <Link to="/sustainability" className="view-projects transprent-button">
                  {t("home.read-more-button")}
                  <span>
                    <OptimizedImage src={mySvg} alt="Arrow" loading="lazy" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Articles Section */}
      <div className="article-sectionwrapper">
        <div className="container">
          <div className="sectionTops pb-4">
            <div className="section-heading">
              <h2 className="section-header-2 with-blue">
                <span className="welcome-icon-blue me-3">
                  <Suspense fallback={<span>📰</span>}>
                    <ImageGallery 
                      imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/welcome-icon-blue.svg" 
                      alt="Blog icon"
                    />
                  </Suspense>
                </span>
                {t("home.blog-post-section")}
              </h2>
              <h3 className="heading">
                <span>{t("home.latest-articles")}</span>
              </h3>
            </div>
            
            <div className="button-element">
              <Link to="/investor-relations/latest-news" className="explore-more">
                {t("home.read-more-button")}
                <span>
                  <Suspense fallback={<span>→</span>}>
                    <ImageGallery 
                      imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg" 
                      alt="Arrow"
                    />
                  </Suspense>
                </span>
              </Link>
            </div>
          </div>

          <div className="articles-cards-wrapper">
            <Suspense fallback={<LoadingFallback />}>
              <LoopGrid itemsPerPage={isMediumScreen ? 1 : 3} />
            </Suspense>
          </div>
        </div>
      </div>
        
      {/* Our Gallery Section */}
      <div className="gallery-section">
        <div className="container">
          <div className="sectionTops">
            <div className="section-heading">
              <h2 className="section-header-2 with-blue">
                <span className="welcome-icon-blue me-3">
                  <Suspense fallback={<span>🖼️</span>}>
                    <ImageGallery 
                      imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/welcome-icon-blue.svg" 
                      alt="Gallery icon"
                    />
                  </Suspense>
                </span>
                {t("home.media-section")}
              </h2>
              <h3 className="heading">
                <span>{t("home.our-gallery")}</span>
              </h3>
            </div>
            
            <div className="button-element">
              <Link to="/investor-relations/gallery/photos" className="explore-more">
                {t("home.view-gallery-btn")}
                <span>
                  <Suspense fallback={<span>→</span>}>
                    <ImageGallery 
                      imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg" 
                      alt="Arrow"
                    />
                  </Suspense>
                </span>
              </Link>
            </div>
          </div>
          
          <div className="media-sample">
            {/* <LazyYouTube /> */}
              <div className="video-wrapper">
              
            
                <iframe  
                  className="video-player-fromyoutbe"
                  src="https://www.youtube.com/embed/aSxVT-MduHQ?controls=1&modestbranding=1&showinfo=0&rel=0&fs=0"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  title="YouTube Video"
                  loading="lazy"
                  width="100%"
                  height="400"
                />
          
            </div>
            <div className="image-wrapper">
              <Suspense fallback={<LoadingFallback />}>
                {/* <ImageLightBox
                  images={BottomImagesGallery} 
                  renderImage={(images, handleClick) => (
                    <div className="image-grid-wrapper">
                      <div className="the-image-grid">
                        {images.map((item, index) => (
                          <div key={index} className={`grid-item${index + 1}`}>
                            <OptimizedImage
                              src={item.link}
                              alt={item.text}
                              className="gallery-image"
                              onClick={() => handleClick(item, index)}
                              loading="lazy"
                            />
                            
                          </div>
                        ))}
                      </div>
                    </div>  
                  )}
                /> */}
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
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<LoadingFallback height={100} />}>
        <SiteFooter />
      </Suspense>
    </>
  );
};

export default HomePage;


            