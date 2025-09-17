import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import SiteFooter from "../../components/Footer/Footer"
import SiteHeader from "../../components/header/Header"
import ImageGallery from "../../components/ImageGallery"
import { fetchData } from '../../config/apiConfig'
import './Sastainability.css'
import { useTranslation } from "react-i18next"

import axios from "axios"


const SustainabilityPage = () => {

      const [Documents, setDocuments] = useState([])
       const [Documents2, setDocuments2] = useState([])
        const [attachmentsUrl, setAttachmentsUrl] = useState([])
        const [attachmentsUrl2, setAttachmentsUrl2] = useState([])
        
        const [loading, setLoading] = useState(true)
        const [areport, setAreport] = useState(null)
     
         useEffect(() => {
                 const fetchReportsData = async () => {
                     try {
                         const [response, response2] = await Promise.all([
                              fetchData('trinity-document?categories=79'),
                              fetchData('trinity-document?categories=81')
                         ])
                        //  const response = await fetchData('trinity-document?categories=79');
                        //  const response2 = await fetchData('trinity-document?categories=81');

                         if (response.length) {
                             setDocuments(response);

                             // Store attachment URLs
                             const urls = response.flatMap(item => item._links.self.map(link => link.href));
     
                             
     
                             setAttachmentsUrl(urls);
                         }

                         if (response2.length) {
                          setDocuments2(response2);
                            const urls2 = response2.flatMap(item => item._links.self.map(link => link.href));
                              setAttachmentsUrl2(urls2)
                         }


                     } catch (error) {
                         console.error("Error fetching Reports:", error);
                     }
                 };
         
                 fetchReportsData();
                 
             }, []);
     
                 const fetchDocuments = async () => {
                     try {
                         if(attachmentsUrl){
                            const documentsIds = attachmentsUrl.map(url => url.split('/').pop());
                            const documentsResponses = await Promise.all(documentsIds.map(id => fetchData(`media?parent=${id}`)));
                            const documentLinks = await Promise.all(documentsResponses.map(item => item[0]))
                            setAreport(documentLinks);
                            // setAreport(documentsIds)
                            setLoading(false);
                         }
                         if(attachmentsUrl2){
                              const documentsIds2 = attachmentsUrl.map(url => url.split('/').pop());
                            const documentsResponses2 = await Promise.all(documentsIds2.map(id => fetchData(`media?parent=${id}`)));
                            const documentLinks2 = await Promise.all(documentsResponses2.map(item => item[0]))
                            setAreport(documentLinks2);
                            // setAreport(documentsIds)
                            setLoading(false);
                         }
                        
                     } catch (error) {
                         console.error("Error fetching images:", error);
                     }
                     console.log("This is a pdf document", areport)
                 };
         
         
          //  useEffect(()=>{
          //     console.log(Documents)
          //  }, Documents)
     
     const [selectedPostUrl, setSelectedPostUrl] = useState('')
     const [loadinPdf,setLoadingPdf] = useState(false)
     const [link, setLink] = useState('')
      
             const download = async () =>{
                 setLoadingPdf(true)
                 try {

                     //const response = await fetchData(`media/${selectedPostUrl}`)
                     const response = await fetch(`https://trinity-metals.com/wp-json/wp/v2/media/${selectedPostUrl}`, {
                       method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        mode: 'cors',
                        credentials: 'omit'
                     })


                      //const response = await fetch(`https://trinity-metals.com/wp-json/wp/v2/media/${selectedPostUrl}`)

                      // console.log("selectId:", selectedPostUrl)
                      
                       if(response){
                       // window.open(response[0].guid.rendered, '_blank');
                        setLoadingPdf(false)
                       // console.log("The response200:",response)
                        
                       }
                      if (!response.ok) {
                          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                      }

                      return await response.json();
                     


                     // window.location.href = response[0].guid.rendered;
                    // setLink(response[0].guid.rendered)
                     window.open(response[0].guid.rendered, '_blank');
                     setLoadingPdf(false)
                      console.log(response)


                    }catch (error) {
                        console.error('Media fetch failed:', error);
                        throw error;
                    } 
                //  } catch (error) {
                //      setLoadingPdf(false)
                //  }

               
             }

             useEffect(()=>{
                 if(selectedPostUrl)
                     download()
                   // console.log("The Id", selectedPostUrl)
             },[selectedPostUrl])


            
     
             
             const formatSize = (bytes) => {
                 if (bytes < 1024) return bytes + " B";
                 else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
                 else return (bytes / (1024 * 1024)).toFixed(2) + " MB";
             };
     

             const { t } = useTranslation()
    return(
        <>
          <SiteHeader />
          {/* Hero Section */}
          <div className="about-hero-section">
                <div className="inner-wrapper">
                    <h1 className="heading text-uppercase">{t("Sustainability.sustainability-page-title")}</h1>
                </div>
           </div>
           {/* Hero Section End */}
           <div className="below-hero-wrappr">
              <div className="container sust-container">
                <div className="row pt-5 pb-5">
                    <div className="sust-upper-content col-md-6">
                    <h2>{t("Sustainability.sustainability-into-left-header")}</h2>
                    <ul>
                      <li>{t("Sustainability.sustainability-into-left-header-desc")}</li>
                    </ul>
                  </div>

                  <div className="sust-upper-content  col-md-6">
                    <h2>{t("Sustainability.sustainability-into-right-header")}</h2>
                    <ul className="responsive-margin">
                      <li>{t("Sustainability.sustainability-into-right-header-desc")} </li>
                    </ul>
                  </div>
                </div>
                

              </div>
           </div>

           {/* Water management */}
           <div className="community-section ">
              <div className="row">
              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Community-icon.svg" customClass={'sustainabilty-icon sus-icon'}/>

                <div className="col-md-6 community-content">
                <div className="content-wrapper">
                    <h2 className="section-header header009">
                      {t("Sustainability.water-management-title")}
                    </h2>
                   
                    <p>
                      {t("Sustainability.water-management-desc")}
                    </p>
                    
                  </div>
                </div>
                <div className="col-md-6 water-man">
                 
                </div>
              </div>
           </div>
            

            {/* Our approach to Tailings  */}
            <div className="our-approach-section ">
             <div className="row">
              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Environment-bulk.svg" customClass={'sustainabilty-icon sus-icon'}/>
              <div className="col-md-6 bg-section">
                
              </div>
              <div className="col-md-6 content-section has-content">
                <div className="content-wrapper">
                  <h2 className="section-header header008">
                     {t("Sustainability.approach-to-Tailings-title")}
                  </h2>
               
                  <p>

                    {t("Sustainability.approach-to-Tailings-desc")}
                  </p>
                </div>
              </div>

             </div>
           </div>


          {/* Our approach to closure */}
           <div className="community-section">
              <div className="row">
              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Community-icon.svg" customClass={'sustainabilty-icon sus-icon'}/>

                <div className="col-md-6 community-content">
                <div className="content-wrapper">
                    <h2 className="section-header header009">
                      {t("Sustainability.approach-to-closure-management-title")}
                    </h2>
                    <p>
                      {t("Sustainability.approach-to-closure-management-desc1")}
                    </p>
                      {/* <p>
                      {t("Sustainability.approach-to-closure-management-desc2")}
                    </p> */}


                  </div>
                </div>
                <div className="col-md-6 community-bg-section">
                 
                </div>
              </div>
           </div>
           
              {/* Community */}
           <div className="goverance1 ">
             <div className="row">
              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Container-4.svg" customClass={'sustainabilty-icon sus-icon'}/>
              <div className="col-md-6 bg-section">
                
              </div>
              <div className="col-md-6 content-section has-content1">
                <div className="content-wrapper">
                  <h2 className="section-header header009">
                     {t("Sustainability.community-title")}
                  </h2>

                  {/* <h5 class="min-header header009 ">{t("Sustainability.community-subtitle")}</h5> */}
                  
                  <p>{t("Sustainability.community-description1")}</p>
                  <p>{t("Sustainability.community-description2")}</p>

                  {/* <p>
                    <b>{t("Sustainability.community-desc")}</b>
                    
                  </p> */}
                  {/* <p>
                    {t("Sustainability.governance-desc1")}
                  </p>
                   
                  <p>
                    {t("Sustainability.governance-desc2")}
                  </p>  */}

                  {/* <ul className="content-achievement">
                      <li><b>{t("Sustainability.community-list1")} </b>{t("Sustainability.community-list1-2")}</li>
                      
                      
                  </ul>

                  <ul className="content-achievement">
                      <li><b>{t("Sustainability.community-list2")} </b>{t("Sustainability.community-list2-2")}</li>
                      
                      
                  </ul>

                  <ul className="content-achievement">
                      <li><b>{t("Sustainability.community-list3")} </b>{t("Sustainability.community-list3-2")}</li>
                      
                      
                  </ul> */}

                  {/* <ul className="content-achievement">
                      <li><b>{t("Sustainability.community-list3")} </b>{t("Sustainability.community-list3-2")}</li>
                      
                      
                  </ul> */}
                  
                  {/* <ul className="content-achievement">
                      <li><b>{t("Sustainability.community-list4")} </b>{t("Sustainability.community-list4-2")}</li>
                      
                      
                  </ul>

                  <ul className="content-achievement">
                      <li><b>{t("Sustainability.community-list5")} </b>{t("Sustainability.community-list5-2")}</li>
                      
                      
                  </ul>

                  <ul className="content-achievement">
                      <li><b>{t("Sustainability.community-list6")} </b>{t("Sustainability.community-list6-2")}</li>
                      
                      
                  </ul>

                  <ul className="content-achievement">
                      <li><b>{t("Sustainability.community-list7")} </b>{t("Sustainability.community-list7-2")}</li>
                      
                      
                  </ul>
                   */}
                  
                </div>
              </div>

             </div>
           </div>



           {/* Envirnoment section */}
           {/* <div className="environment-section">
             <div className="row">
              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Environment-bulk.svg" customClass={'sustainabilty-icon sus-icon'}/>
              <div className="col-md-6 bg-section">
                
              </div>
              <div className="col-md-6 content-section has-content">
                <div className="content-wrapper">
                  <h2 className="section-header header008">
                     {t("Sustainability.environment-title")}
                  </h2>
                  <h5 className="min-header header0002 ">
                    {t("Sustainability.environment-min-title")}
                  </h5>
                  <p>
                    {t("Sustainability.environment-desc")}
                  </p>
                  <p>
                    {t("Sustainability.environment-desc1")}
                  </p>
                   
                  <p>
                    <b>{t("Sustainability.environment-desc2-title")}</b>
                  </p> 
                  <p>

                    {t("Sustainability.environment-desc2")}
                  </p>
                </div>
              </div>

             </div>
           </div> */}

             {/*Occupational Health */}
           <div className="community-section1">
              <div className="row">
              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Community-icon.svg" customClass={'sustainabilty-icon sus-icon'}/>

                <div className="col-md-6 community-content">
                <div className="content-wrapper">
                    <h2 className="section-header header009">
                      {t("Sustainability.Occupational-Health-title")}
                    </h2>

                    <p>
                      {t("Sustainability.Occupational-Health-desc")}
                    </p>

                    <div className="w-75 pt-4">
                      <p>
                        {t("Sustainability.Occupational-statement-title")}
                      </p>
                      <p>
                        {t("Sustainability.Occupational-statement-desc")}
                      </p>
                    </div>

                    


                  </div>
                </div>
                <div className="col-md-6 community-bg-section1">
                 
                </div>
              </div>
           </div>
        

           {/* Governance */}
           {/* <div className="goverance">
             <div className="row">
              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Container-4.svg" customClass={'sustainabilty-icon sus-icon'}/>
              <div className="col-md-6 bg-section">
                
              </div>
              <div className="col-md-6 content-section has-content1">
                <div className="content-wrapper">
                  <h2 className="section-header header009">
                     {t("Sustainability.governance")}
                  </h2>
                  
                  <p>
                    {t("Sustainability.governance-desc")}
                  </p>
                  <p>
                    {t("Sustainability.governance-desc1")}
                  </p>
                   
                  <p>
                    {t("Sustainability.governance-desc2")}
                  </p> 

                  <ul className="content-achievement">
                      <li><b>{t("Sustainability.governance-list")} </b> {t("Sustainability.governance-list-2")}</li>
                      
                      <li><b>{t("Sustainability.governance-list1")} </b>{t("Sustainability.governance-list1-2")}</li>

                      <li><b>{t("Sustainability.governance-list2")} </b>{t("Sustainability.governance-list2-2")}</li>

                      <li><b>{t("Sustainability.governance-list3")} </b>{t("Sustainability.governance-list3-2")}</li>

                     <li><b>{t("Sustainability.governance-list4")} </b>{t("Sustainability.governance-list4-2")}</li>
                     <li>{t("Sustainability.governance-list5")}</li>
                     <li>{t("Sustainability.governance-list6")}</li>
                     <li>{t("Sustainability.governance-list7")}</li>



                  </ul>
                  
                </div>
              </div>

             </div>
           </div> */}
            <div class="yellow-bg"></div>
            <div class="the-project-hero-section-wrapper Governance-section"></div>
            <div class="project-content-wrapper pb-5">
               <div class="container d-flex justify-content-center">
                   <div class="information-project">
                      <div class="project-title-element">
                        <h1>Governance</h1>
                        <div class="project-brief2 pt-3">
                          <h4>Corporate Governance&nbsp;</h4>
                          <p>At Trinity Metals, we believe strong corporate governance is more than a responsibility, it’s a driving force behind our ethical business practices and long-term success. We lead with integrity, ensuring transparency and accountability in everything we do. Our governance framework reflects our deep commitment to our core values, empowering sound decision-making that supports sustainable growth and protects the interests of our people, partners, communities, and planet. By integrating Environmental, Social, and Governance (ESG) principles into our operations, we go beyond compliance—creating real, lasting value and reinforcing our role as a trusted and responsible industry leader.</p>

                          <h4>Traceability&nbsp;</h4>
                          <p>We take pride in ensuring that every mineral we produce is 100% conflict-free, fully traceable, and responsibly sourced from our own licensed concessions. From the moment it leaves the ground to the point it reaches the market, our minerals are never blended or traded from external sources—guaranteeing full transparency and control throughout the supply chain. Our vertically integrated operations give us unmatched oversight, reinforcing our commitment to ethical sourcing. We work closely with RCS Global through its Better Mining Program, an industry-leading initiative recognized by the Responsible Minerals Initiative (RMI). In line with global best practices, we publish annual due diligence reports based on the OECD Framework, underscoring our dedication to integrity, accountability, and sustainable mining.</p>
                          <h4>Board of Directors&nbsp;</h4>
                          <p>Our Board of Directors is a driving force behind our commitment to responsible leadership and ethical excellence. With a clear strategic vision and unwavering oversight, the Board ensures that every aspect of our business meets the highest ethical and regulatory standards. Backed by dedicated committees, the Audit Committee for financial integrity, the Remuneration Committee for fair and performance-driven rewards, and the SHECS Committee for Safety, Health, Environment, Community, and Security, we maintain strong governance that champions accountability, protects our stakeholders, and fuels sustainable growth. This structure empowers us to lead with purpose and deliver meaningful impact across every level of our operations.</p>
                        </div>
                      </div>
                   </div>
               </div> 
            </div>  

              {/*  Diligence Report */}
            <div className="policies-section-wrapper1">
            <div className="container">
              <div className="policies-section-title">
                <h2>
                   Due Diligence Report
                </h2>
              </div>
              <div className="reports-container">
                      {Documents2 ? (
                                Documents2.map((item, index) => (
                                  <div key={index} className="single-report">
                                      <div className="report-name">
                                          <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Report-icon.svg" />
                                          
                                          <h4 className="report-name">
                                              {item.title.rendered}
                                          </h4>
                                  
                                          
                                      </div>
                                      <div className="download-section">
                                              <span>{}</span>
                                              {
                                                      !loadinPdf &&
                                                      <a   
                                                          className="download-button"
                                                          onClick={()=>setSelectedPostUrl(item.acf.document_uploaded)}
                                              
                                              >
                                                    <span>{t("reports.Download-btn")}</span>
                                                    {/* <span>{item.acf.document_uploaded}</span> */}
                                                   
                                                    
                                              </a>
                                                  }
                                              
                                              
                                      </div>
                          
                                  </div>
                          ))
                          
                      ) : (
  
                      <div>Loading...</div>
                      
                          
                          
                        
                      )}
              
                                  
              
                                   
              </div>

            </div>
           </div>


           {/* Policies & Standards section */}
           <div className="policies-section-wrapper">
            <div className="container">
              <div className="policies-section-title">
                <h2>
                {t("Sustainability.policies-standards")}
                </h2>
              </div>
              <div className="reports-container">
                      {Documents ? (
                                Documents.map((item, index) => (
                                  <div key={index} className="single-report">
                                      <div className="report-name">
                                          <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Report-icon.svg" />
                                          
                                          <h4 className="report-name">
                                              {item.title.rendered}
                                          </h4>
                                  
                                          
                                      </div>
                                      <div className="download-section">
                                              <span>{}</span>
                                              {
                                                      !loadinPdf &&
                                                      <a   
                                                          className="download-button"
                                                          onClick={()=>setSelectedPostUrl(item.id)}
                                              
                                              >
                                                    <span>{t("reports.Download-btn")}</span>
                                                      {/* <span>{item.acf.document_uploaded}</span> */}
                                              </a>
                                                  }
                                              
                                              
                                      </div>
                          
                                  </div>
                          ))
                          
                      ) : (
  
                      <div>Loading...</div>
                      
                          
                          
                        
                      )}
              
                                  
              
                                   
              </div>

            </div>
           </div>
            





           <SiteFooter />
        </>
    )
}

export default SustainabilityPage