import { Link, useLocation } from "react-router-dom"
import SiteFooter from "../../components/Footer/Footer"
import SiteHeader from "../../components/header/Header"
import ImageGallery from "../../components/ImageGallery"
import './About.css'
import Modal from 'react-bootstrap/Modal';

import { useRef, useEffect, useState } from "react"
import Spinner from "../../components/Spinner/Spinner"
import { fetchData } from "../../config/apiConfig"
import { useTranslation } from "react-i18next"

const AboutPage = () => {
    const location = useLocation()
    
    const history = useRef(null)
   
    const values = useRef(null)
    const strategies = useRef(null)
    const products = useRef(null)

    const scrollToSection = (ref) =>{
         ref.current?.scrollIntoView({behavior: "smooth"})
    }

    useEffect(()=>{
        if(location.pathname === "/about/our-history"){
            
            scrollToSection(history)
        }
         else if(location.pathname === "/about/our-values"){
            
            scrollToSection(values)
        } else if(location.pathname === "/about/our-strategies"){
            
            scrollToSection(strategies)
        } else if(location.pathname === "/about/our-products"){
            
            scrollToSection(products)
        }
        
        

        

        
    }, [location])

    const [modalShow, setModalShow] = useState(false)





       //Render Team member for the dashboard
       const [data, setData] = useState([]);
       const [tags, setTags] = useState({});
      // const [memberImage, setMemberImage] = useState({});
       const [error, setError] = useState(null);
       const [boardMember, setBoardMember] = useState([]);
       const [managementMember, setManagementMember] = useState([]);
       const [rutongoBoardMember, setRutongoBoardMember] = useState([]);
       const [activeModal, setActiveModal] = useState(null); // ✅ Single state for modals
       
   
     
       // Fetch posts
       const getMembers = async () => {
         try {
           const response = await fetchData('member-showcase?per_page=100&_embed');
           setData(response);
           

         } catch (error) {
           setError(error);
           console.error(error);
         }
       };
     
       useEffect(() => {
          getMembers();
       }, []);
     
      

       useEffect(() => {
          const processMembers = async () => {
            if (data.length === 0) return;
        
            let boardTemp = [];
            let rutongoBoardTemp = [];
            let managementTemp = [];
            let tagsMap = {};
           // let imagesMap = {};
            let tagIds = new Set(); // Collect unique tag IDs for batch fetching
        
            // Collect all tag IDs (handling multiple tags per member)
            data.forEach((item) => {
              if (item?.tags?.length > 0) {
                item.tags.forEach((tagId) => tagIds.add(tagId)); // ✅ Collect all tags
              }
            });
        
            // Fetch all tags in one API request (instead of one per item)
            const tagResponses = await fetchData(`tags?include=${[...tagIds].join(",")}`);
            const tagLookup = {}; // Map tag ID to tag name
            tagResponses.forEach(tag => {
              tagLookup[tag.id] = tag.name;
            });
        
            // Process members with tags and images
            data.forEach((item) => {
              const tagNames = item?.tags?.map(tagId => tagLookup[tagId]) || []; 
              
              tagsMap[item.id] = tagNames; // Store all assigned tags
             
              // Categorize team members if at least one tag matches
              if (tagNames.includes("Board member")) boardTemp.push(item);
              if (tagNames.includes("Management Team")) managementTemp.push(item);
              if(tagNames.includes("Rutongo Mines Board Members")) rutongoBoardTemp.push(item);
        
            });
        
            // 4️⃣ Update state once (avoids multiple re-renders)
            setTags(tagsMap);
           // setMemberImage(imagesMap);
            setBoardMember(boardTemp);
            setManagementMember(managementTemp);
            setRutongoBoardMember(rutongoBoardTemp);
          };
        
          processMembers();

          
        }, [data]); // Runs when `data` changes

        const { t } = useTranslation()
    
    return(
        <>
            <SiteHeader />
            {/* Hero section */}
            <div className="about-hero-section">
                <div className="inner-wrapper">
                    <h1 className="heading text-uppercase">{t("about-us-page.about-us-title")}</h1>
                </div>
            </div>

            {/* Our History Section */}
            <div ref={history} className="container history-section-wrapper">
                <div className="row justify-content-between">
                    <div className="col-md-6 image-holder">
                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/06/tyu.webp" customClass={'history-image'}/>
                        {/* <ImageGallery imageUrl="History-playButton.svg" customClass={'history-play-button'}/> */}
                    </div>
                    <div className="col-md-6 histort-content-holder">
                        <div className="content-holder">
                            <h1 className="section-heading">
                              {t("about-us-page.our-history-section-title")}
                            </h1>
                            <div className="text-content">
                                <p className="fw-bold">
                                  {t("about-us-page.our-history-top-description")}
                                </p>
                                <p>
                                  {t("about-us-page.our-history-sub-desc")}

                                </p>

                                

                            </div>
                            <Modal
                            
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            >
                                <Modal.Header closeButton>
                                    
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="text-content">
                                        <p className="fw-bold">
                                          {t("about-us-page.our-history-popup-top-desc")}
                                        </p>
                                        <p>
                                           {t("about-us-page.our-history-popup-desc")}
                                        </p>
                                        <p>
                                         {t("about-us-page.our-history-popup-desc1")}

                                        </p>
                                        <p>
                                          {t("about-us-page.our-history-popup-desc2")}

                                        </p>

                                        

                                    </div>
                                </Modal.Body>
                                
                            </Modal>
                            <div class="general-button justify-content-left">
                                <a href="#" class="hover-green" onClick={() => setModalShow(true)}>
                                    <span>{t("home.read-more-button")}</span>
                                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Arrow2.svg"/>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Our Mission and Values */}
            <div className="container our-values-wrapper">
                <div className="row justify-content-between">
                    <div className="col-md-6 our-mission d-flex justify-content-center align-items-center flex-column">
                        <div className="icon-box">
                            <div className="icon d-flex justify-content-center">
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Our_mission-icon.svg" />
                            </div>
                            <div className="icon-box-header">
                                <p className="text-001">{t("about-us-page.our-mission-title")}</p>
                               
                            </div>
                            
                        </div>
                        <div className="icon-box-description d-flex justify-content-center">
                                <p className="text-description text-center">
                                   {t("about-us-page.our-mission-description")}
                                </p>
                               
                            </div>
                    </div>
                    <div className="col-md-6 our-vision d-flex justify-content-center align-items-center flex-column">
                        <div className="icon-box">
                            <div className="icon d-flex justify-content-center">
                            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Our_vision-icon.svg" />
                            </div>
                            <div className="icon-box-text">
                                <p className="text-001">{t("about-us-page.our-vision-title")} </p>
                               
                            </div>
                            
                            
                        </div>
                        <div className="icon-box-description  d-flex justify-content-center">
                                <p className="text-description text-center">
                                  {t("about-us-page.our-vision-description")} 
                                </p>
                               
                        </div>

                    </div>
                </div>

            </div>
            {/* Our Values */}
            <div ref={values} className="values-section">
                <div className="container our-values-holder">
                    
                    <div className="inner-contentWrapper">
                        <div className="trinity-heading">
                            <h1 className="section-heading0002">
                               {t("about-us-page.our-values-section-title")}
                            </h1>
                        </div>
                        <div className="grid-wrapper">
                            <div className="the-grid-item">
                                <div className="the-icon-box">
                                    <div className="the-iconbox-icon">
                                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/LightBulb.svg" />
                                    </div>
                                    <div className="iconbox-content-wrapper">
                                        <div className="icon-box-header">
                                            <p>{t("about-us-page.we-empower")}</p>   
                                        </div>
                                        <div className="icon-box-description">
                                            <p>{t("about-us-page.we-empower-description")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="the-grid-item">
                                <div className="the-icon-box">
                                    <div className="the-iconbox-icon">
                                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Watch-icon.svg" />
                                    </div>
                                    <div className="iconbox-content-wrapper">
                                        <div className="icon-box-header">
                                            <p>{t("about-us-page.we-do-no-warm")}</p>   
                                        </div>
                                        <div className="icon-box-description">
                                            <p>{t("about-us-page.we-do-no-warm-description")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="the-grid-item">
                            <div className="the-icon-box">
                                <div className="the-iconbox-icon">
                                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/User-icon.svg" />
                                </div>
                                <div className="iconbox-content-wrapper">
                                    <div className="icon-box-header">
                                        <p>{t("about-us-page.we-set-standard")}</p>   
                                    </div>
                                    <div className="icon-box-description">
                                        <p>{t("about-us-page.we-set-standard-description")}</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="the-grid-item">
                            <div className="the-icon-box">
                                <div className="the-iconbox-icon">
                                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/trophy-icon.svg" />
                                </div>
                                <div className="iconbox-content-wrapper">
                                    <div className="icon-box-header">
                                        <p>{t("about-us-page.we-hold-ourselves-accountable")}</p>   
                                    </div>
                                    <div className="icon-box-description">
                                        <p>{t("about-us-page.we-hold-ourselves-accountable-description")}</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        

                    </div>
               </div>
            </div>
            {/* Our Strategies */}
            <div ref={strategies} className="strategies-section d-flex justify-content-center flex-column">
                <div className="inner-container container">
                    <div className="top-content d-flex justify-content-center align-items-center flex-column">
                        <div className="text-heading">
                            <h1>
                              {t("about-us-page.our-strategy-section-title")}
                            </h1>
                        </div>
                        <div className="text-content-inner">
                            <p>
                             {t("about-us-page.our-strategy-section-description")}
                            </p>
                        </div>

                    </div>
                    <div className="grid-container">
                        <div className="the-grid-item">
                            <div className="the-icon-box">
                                <div className="the-iconbox-icon">
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Hammer-icon.svg" customClass={'strategy-icon'}/>
                                </div>
                                <div className="iconbox-content-wrapper">
                                    <div className="icon-box-header">
                                        <p className="text-center"> {t("about-us-page.our-strategies-business")}</p>   
                                    </div>
                                    <div className="icon-box-description">
                                        <p className="text-center">
                                        {t("about-us-page.our-strategies-business-description")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="the-grid-item">
                            <div className="the-icon-box">
                                <div className="the-iconbox-icon">
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/group-icon.svg" customClass={'strategy-icon'}/>
                                </div>
                                <div className="iconbox-content-wrapper">
                                    <div className="icon-box-header">
                                        <p className="text-center">{t("about-us-page.our-strategies-people")}</p>   
                                    </div>
                                    <div className="icon-box-description">
                                        <p className="text-center">{t("about-us-page.our-strategies-people-description")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="the-grid-item">
                            <div className="the-icon-box">
                                <div className="the-iconbox-icon">
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/intersection-cion.svg" customClass={'strategy-icon'}/>
                                </div>
                                <div className="iconbox-content-wrapper">
                                    <div className="icon-box-header">
                                        <p className="text-center">{t("about-us-page.our-strategies-relationships")}</p>   
                                    </div>
                                    <div className="icon-box-description">
                                        <p className="text-center">{t("about-us-page.our-strategies-relationships-description")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="the-grid-item">
                            <div className="the-icon-box">
                                <div className="the-iconbox-icon">
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/qlementine-icons_build-16.svg" customClass={'strategy-icon'}/>
                                </div>
                                <div className="iconbox-content-wrapper">
                                    <div className="icon-box-header">
                                        <p className="text-center">{t("about-us-page.our-strategies-future")}</p>   
                                    </div>
                                    <div className="icon-box-description">
                                        <p className="text-center">
                                        {t("about-us-page.our-strategies-future-description")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Executive management team */}
            <div className="executive-management-wrapper">
                <div className="container">
                    <div className="header-part">
                        <h1 className="section-heading text-center">
                          {t("about-us-page.executive-management-team-section-title")}
                        </h1>
                    </div>  
                     <div className="team-members">
              
               


                          {
                             managementMember?.length > 0 ? (
                                <div className="team-member-wrapper">
                                  {
                                    managementMember.slice(8, 14).reverse().map((item, index) => (
                                        <div key={index} className="single-team-member">
                                        <ImageGallery imageUrl={item._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://trinity-metals.com/wp-content/uploads/2025/02/animated_loader_gif_n6b5x0.gif"} customClass={'team-member-photo'}/>
                                               <div className="team-member-details">
                                                   <div className="team-member-info">
                                                       <h2 className="member-name">
                                                          {item?.title?.rendered}
                                                       </h2>
                                                       <p className="member-post">
                                                           {item?.acf?.member_personal_information?.designation}
                                                       </p>
                                                   </div>
           
                                                       <Modal
                                                       
                                                       size="lg"
                                                       aria-labelledby="contained-modal-title-vcenter"
                                                       centered
                                                       show={activeModal === item.id}
                                                       onHide={() => setActiveModal(false)}
                                                       >
                                                           <Modal.Header closeButton>
                                                               
                                                           </Modal.Header>
                                                           <Modal.Body>
                                                               <div className="a-member-desc">
                                                                   <div className="a-member-image">
                                                                   <ImageGallery imageUrl={item._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://trinity-metals.com/wp-content/uploads/2025/02/animated_loader_gif_n6b5x0.gif"} customClass={'team-member-photo'}/>
           
                                                                   </div>
                                                                   <div className="text-content">
                                                                           
                                                                   <p dangerouslySetInnerHTML={{ __html: item?.content?.rendered || "Content is loading..." }} />
           
                                                                   </div>
                                                               </div>
                                                           
                                                           </Modal.Body>
                                                           
                                                       </Modal>
                                                   <div className="view-member-desc" onClick={() => setActiveModal(item.id)}>
                                                       <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Vector-1.svg"/>
                                                   </div>
                                               </div>
                                       
                                        </div>
                                    )
                                 ) 
                                }
                             </div>   
                               
                            ) 
                             : (
                                <Spinner />
                             )
                          }
          
                             
                        
                         
       
                               
                             
                              
            </div>
                    <div class="general-button justify-content-center">
                            <Link to="/about/our-leadership" class="hover-green">
                                <span>{t("about-us-page.view-all-team-button")}</span>
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Arrow2.svg"/>
                            </Link>
                    </div>
                </div>
            </div>
            {/* Our Products */}
            <div ref={products} className="container our-products-section">
                <div className="first-container">
                  <div className="header-part">
                     <h1 className="section-heading">
                       {t("about-us-page.our-product-section-title")}
                     </h1>
                  </div>
                  <div className="description-part">
                      <p className="description-text">
                        {t("about-us-page.our-product-section-description")}
                      </p>
                  </div>
                </div>
                <div className="second-container d-flex">
                   <div className="single-product">
                      <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Tin.svg" customClass={'product-image'}/>
                      <div className="product-desc">
                        <div className="product-name">
                            <p>
                               {t("about-us-page.our-product-TIN")}
                            </p>
                        </div>
                        <hr class="custom-divider" />
                        <div className="product-description">
                            <p className="description-text">
                              {t("about-us-page.our-product-TIN-description")}
                            </p>
                        </div>
                      </div>
                   </div>
                   <div className="single-product">
                      <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Tantalum.svg" customClass={'product-image'}/>
                      <div className="product-desc">
                        <div className="product-name">
                            <p>
                              {t("about-us-page.our-product-TANTALUM")}
                            </p>
                        </div>
                        <hr class="custom-divider" />

                        
                        <div className="product-description">
                            <p className="description-text">
                              {t("about-us-page.our-product-TANTALUM-description")}
                            </p>
                        </div>
                      </div>
                   </div>
                   <div className="single-product">
                      <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Tangusten.svg" customClass={'product-image'}/>
                      <div className="product-desc">
                        <div className="product-name">
                            <p>
                              {t("about-us-page.our-product-TUNGSTEN")}
                            </p>
                        </div>
                        <hr class="custom-divider" />
                        <div className="product-description">
                            <p className="description-text">
                               {t("about-us-page.our-product-TUNGSTEN-description")}

                            </p>
                        </div>
                      </div>
                   </div>

                </div>
            </div>

            <SiteFooter />
        
        </>
    )
}
export default AboutPage