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


// Sample JSON data
const articles = [
  {
    date: "2024-01-16",
    dateDisplay: "26 January, 2024",
    title: "Trinity Metals Innovative Approach to the Illegal Mining Issue.",
    featuredImage: "https://trinity-metals.com/wp-content/uploads/2025/02/innovative-approach.jpeg",
    category: "Innovation",
  },
  {
    date: "2024-01-16",
    dateDisplay: "26 January, 2024",
    title:
      "Rutongo is now Rwanda’s largest and Africa’s second-largest tin producer Musha ranks as Rwanda's second-largest..",
    featuredImage: "https://trinity-metals.com/wp-content/uploads/2025/02/Macig.jpeg",
    category: "Featured",
  },
  {
    date: "2024-01-16",
    dateDisplay: "26 January, 2024",
    title:
      "Trinity Metals Group pushes for global mining standards after unveiling environmental audit report",
    featuredImage: "https://trinity-metals.com/wp-content/uploads/2025/02/Trinity-metals-group.jpeg",
    category: "Sustainability",
  },
  {
    date: "2024-01-16",
    dateDisplay: "26 January, 2024",
    title: "Rwanda is a ‘performance-driven country’, says Trinity Metals CEO ",
    featuredImage: "https://trinity-metals.com/wp-content/uploads/2024/07/Lithum-Project.jpg",
    category: "Innovation",
  },
  {
    date: "2024-01-16",
    dateDisplay: "26 January, 2024",
    title: "The cost - and value - of ESG in mining",
    featuredImage: "https://trinity-metals.com/wp-content/uploads/2025/02/Cost-And-value.png",
    category: "Featured",
  },
  {
    date: "2024-01-16",
    dateDisplay: "26 January, 2024",
    title: "Trinity Metals Secures $US3.8million funding from U.S. International Development Finance Corporation (DFC)",
    featuredImage: "https://trinity-metals.com/wp-content/uploads/2025/02/Secures-funding.jpg",
    category: "Sustainability",
  },
  {
     date : "2024-01-16",  
     dateDisplay : "26 January, 2024",
     title : "Celebration of International Day of Women in Mining (IDWIM), 2024",
     featuredImage : "https://trinity-metals.com/wp-content/uploads/2025/02/Rotongo-women.jpg",
     category : "Sustainability"
  },
  {
     date : "2024-01-16",  
     dateDisplay : "26 January, 2024",
     title : "Trinity Safety, Health, Environment and Community Pledge",
     featuredImage : "https://trinity-metals.com/wp-content/uploads/2025/02/SafetyHealth.jpg",
     category : "Health"
  },
  {
     date : "2024-01-16",  
     dateDisplay : "26 January, 2024",
     title : "Trinity Metals Secures $US3.8million funding from U.S. International Development Finance Corporation (DFC)",
     featuredImage : "https://trinity-metals.com/wp-content/uploads/2025/02/development_program.jpeg",
     category : "Featured"
  }
];




const HomePage = () => {

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
   
  
    
 
  

  return (
    <>
      <SiteHeader />


      {/* hero section */}

      <div className="hero-section">
        <div className="background-video-container">
          <video autoPlay muted loop>
            <source src="https://trinity-metals.com/wp-content/uploads/2022/12/Loop-9.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="background-overlay">
        </div>  
        <div className="container hero-section-content-wrapper">
            <div className="basic-info">

              <h1 className="section-header"><span className="welcome-icon"><ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/welcome-icon.svg"/></span>WELCOME TO TRINITY METALS</h1>

              <h2 className="section-desc">
                We are enabling a better future.<br/> 3 Minerals , 3 Mines , One
                Company
              </h2>
              <p className="section-sub-desc">We are a responsible producer of essential Technology metals</p>

              <div className="info-buttons">
                
                <div className="button-element">
                  <a href="#" className="get-started">
                    
                    Get Started
                    <span>
                      <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
                    </span>
                    
                  </a>
                </div>
                <div className="button-element">
                  <Link to="/our-projects" className="view-projects">
                    View Projects
                    <span>
                      <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
                    </span>
                    
                    
                  </Link>
                </div>
              </div>
            </div>
            
        </div>
      </div>

      {/* About Us */}
      <div className="about-us-intro-section-wrapper">
         <div className="basic-intro-left">
          
          <div className="coverage-precentages-wrapper">
             <div className="leadership-counter-wrapper">
                <div className="leadership-counter">
                   
                   <IncreamentCounter start= {0} end = {75} speed={20}/>%
                </div>
                <p className="leader-text">
                   Rwandan Leadership
                </p>
             </div>
             <div className="workforce-counter-wrapper">
                <div className="workforce-counter">
                   
                <IncreamentCounter start= {0} end = {99} speed={50}/>%
                </div>
                <p className="workforce-text">
                   Rwandan Workforce             
                </p>
             </div>
          </div>
         </div>
         <div className="basic-intro-right">
              <div className="right-intro-wrapper">
                <div className="right-intro-header">
                <h3 className="heading">
                  A Leader in Mining
                </h3>
              </div>
          
              <div className="tabs-wrapper">
                {/* Tabs Buttons */}
                <div className="tabs-buttons">
                  <button className={`tab-button ${activeTab === "tab1" ? "active-button" : ""}`}
                   onClick={() => handleTabClick("tab1")}
                  >

                    Who we are
                  </button>
                  <button className={`tab-button ${activeTab === "tab2" ? "active-button" : ""}`}
                   onClick ={() => handleTabClick("tab2")}
                  >
                    Our Vision
                  </button>
                  <button className={`tab-button ${activeTab === "tab3" ? "active-button" : ""}`}
                   onClick ={() => handleTabClick("tab3")}
                  >
                     Our Mission
                  </button>
                </div>
                {/* Tab Content */}
                <div className="tab-content-wrapper">
                   <div className={`tab-content ${activeTab === "tab1" ? "active-tab" : ""}`}>
                    <div className="tab-content-holder">
                      <div className="text-content">
                        <p>
                        Trinity Metals is a responsible producer of tin, tungsten and tantalum. We employ eco-conscious and ethical practices in every area of our business operations.
                        </p>
                      </div>
                      <div className="wrapper_content">
                        <div className="the_content_left">
                        <div className="who-are-we-numbers">
                          <div className="employess-count">
                            <span>5000+</span>
                            <p>Employees</p>
                          </div>
                        </div>
                        <div className="mine-site-numbers">
                          <div className="mine-site-count">
                            <span>3</span>
                            <p>Mine sites</p>
                          </div>
                        </div>
                      </div>
                      <div className="the_content_right">
                        <ImageGallery  imageUrl= 'https://trinity-metals.com/wp-content/uploads/2025/02/mine_site_employees.png' customClass="miners_img1" />
                      </div>
                     </div>
                      
                    </div>
                      
                   </div>
                   <div className={`tab-content ${activeTab === "tab2" ? "active-tab" : ""}`}>
                    <div className="tab-content-holder">
              
                     <div className="text-content">
                        <p>
                           We make difference in the world by responsibly  and reliably sourcing essential technology metals
                        </p>
                     </div>

                     <div className="wrapper_content">
                        
                        <div className="the_content_right">
                          <ImageGallery imageUrl='https://trinity-metals.com/wp-content/uploads/2025/02/mine_site_employees2.png' customClass="miners_img1" />
                        </div>
                     
                      </div>

                    </div>
                      
                   </div>
                   <div className={`tab-content ${activeTab === "tab3" ? "active-tab" : ""}`}>
                     <div className="tab-content-holder">
                     <div className="text-content">
                        <p>
                          We are on mission to produce high-quality metals through responsible, eco-conscious operations and business practices
                        </p>
                      </div>
                      <div className="wrapper_content">
                        
                        <div className="the_content_right">
                          <ImageGallery imageUrl='https://trinity-metals.com/wp-content/uploads/2025/02/mine_site_employees3.png' customClass="miners_img1" />
                        </div>
                     
                      </div>
                   </div>
                   </div>
                </div>
              </div>
               

              <div className="buttonElement">
                <Link to="/about" className="hover-green">
                  
                  <span>Read More</span>
                  <ImageGallery imageUrl='https://trinity-metals.com/wp-content/uploads/2025/02/Arrow2.svg' />

                </Link>
              </div>
            </div>

            

         </div>
      </div>
       {/* Our Projects */}
       <div className="our-porject-wrapper">
          <div className="container">
              <div className="container-holder">
                <div className="sectionTops">
                  <div className="section-heading">
                    <h1 className="section-header-2">
                      <span className="welcome-icon">
                        <ImageGallery imageUrl='https://trinity-metals.com/wp-content/uploads/2025/02/welcome-icon2.svg' />
                      </span>Latest Works
                      
                    </h1>
                  <h2 className="heading">
                    <span>
                    Our Projects
                    </span>
                  </h2>


                  </div>
                  
                  <div className="button-element">
                  <Link to="our-projects" className="view-projects">
                    View Projects
                    <span>
                      <ImageGallery imageUrl='https://trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg'/>
                    </span>
                    
                    
                  </Link>
                </div>
                  
                </div>

                <div className="cards-wrapper d-flex">
                   <div className="a-card">
                   
                     
                     
                      <div className="featured-image">
                        <Link to="/our-projects/nyakabingo">
                          <ImageGallery imageUrl='https://trinity-metals.com/wp-content/uploads/2025/02/nyakabingo-mine.png' customClass= "card-image" />
                        </Link>  
                      </div>
                      
                      <div className="project-title">
                        <a href="#">
                          <span>
                          Trinity Nyakabingo Mine
                          </span>
                        </a>
                      </div>
                   </div>
                   
                   <div className="a-card">
                      <div className="featured-image">
                        <Link to="/our-projects/musha">
                          <ImageGallery imageUrl='https://trinity-metals.com/wp-content/uploads/2025/02/musha_mine-min.png' customClass= "card-image" />
                        </Link>  
                      </div>
                      <div className="project-title">
                          <a href="#">
                            <span>
                            Trinity Musha Mines
                            </span>
                          </a>
                        </div>
                   </div>
                   <div className="a-card">
                      <div className="featured-image">
                        <Link to="/our-projects/rutongo">
                          <ImageGallery imageUrl='https://trinity-metals.com/wp-content/uploads/2025/02/rutongo-min.png' customClass= "card-image"/>
                        </Link>  
                      </div>
                      <div className="project-title">
                          <a href="#">
                            <span>
                            Rutongo Mines
                            </span>
                          </a>
                        </div>
                   </div>
                </div>
            </div>
            
          </div>
       </div>

       {/* Sastainability */}
       <div className="sastainability-section-wrapper">
        <div className="container content-wrapper">
          <div className="d-flex Sastainability-content">
          <div className="col-md-6 Sastainability-image">
            
          </div>
           <div className="col-md-6 Sastainability-right">
             <h1 className="section-header">
              <span className="welcome-icon">
                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/welcome-icon.svg"/>
              </span>Sustainability
             </h1>

             <h2 className="heading text-white w-75">
              <span>We are a part of the 
                energy revolution</span>
             </h2>

             <div className="text-content002">
              <p className="text-white">We take our values seriously and hold ourselves accountable to the communities where we operate and the greater good of the planet. 
                We support the UN’s mission to ensure that by 2030 all people enjoy peace and prosperity and do our part to contribute to the Global Sustainability Development Goals.</p>
              <p className="text-white">
              We have taken steps to track, actively reduce and offset our carbon emissions and utilise eco-conscious mining methods and technology. 
              </p>
             </div>

             <div className="button-element">
                  <Link to="/sustainability" className="view-projects">
                    Read More
                    <span>
                      <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
                    </span>
                    
                    
                  </Link>
            </div>


           </div>
         </div>
        </div>
         
         <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/plant-bg.png" customClass="sastain-bg-img"/>
       </div>

       {/* Latest articles section */}
       <div className="article-sectionwrapper">
        <div className="container">
          <div className="sectionTops pb-4">
                  <div className="section-heading">
                    <h1 className="section-header-2 with-blue">
                      <span className="welcome-icon-blue me-3">
                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/welcome-icon-blue.svg"/>
                      </span>
                      Blog Post
                      
                    </h1>
                  <h2 className="heading">
                    <span>
                    Latest Articles
                    </span>
                  </h2>


                  </div>
                  
                  <div className="button-element">
                  <Link to="/investor-relations/latest-news" className="explore-more">
                    Read More
                    <span>
                      <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
                    </span>
                    
                    
                  </Link>
                </div>
                  
          </div>

          <div className="articles-cards-wrapper">
            <LoopGrid items={articles} itemsPerPage={ isMediumScreen ? 1 : 3 } />

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
                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/welcome-icon-blue.svg"/>
                      </span>
                      Media
                      
                    </h1>
                  <h2 className="heading">
                    <span>
                    Our Gallery
                    </span>
                  </h2>


                  </div>
                  
                  <div className="button-element">
                  <Link to="/investor-relations/gallery/photos" className="explore-more">
                    View Gallery
                    <span>
                      <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
                    </span>
                    
                    
                  </Link>
                </div>
                  
          </div>
          <div className="media-sample">
            <div className="video-wrapper">
                <video  
                ref = {videoRef}
                 
                 muted>
                   <source src="https://trinity-metals.com/wp-content/uploads/2022/12/Loop-9.mp4" type="video/mp4" />
                </video>

                <div className="play-button" onClick={handleVideo}>
                  <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Play-button.svg"/>
                </div>
            </div>
            <div className="image-wrapper">
             
              <ImageLightBox />

              
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
