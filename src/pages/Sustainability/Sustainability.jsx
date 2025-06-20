import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import SiteFooter from "../../components/Footer/Footer"
import SiteHeader from "../../components/header/Header"
import ImageGallery from "../../components/ImageGallery"
import { fetchData } from '../../config/apiConfig'
import './Sastainability.css'
import { useTranslation } from "react-i18next"

const SustainabilityPage = () => {

      const [Documents, setDocuments] = useState([])
        const [attachmentsUrl, setAttachmentsUrl] = useState([])
        const [loading, setLoading] = useState(true)
        const [areport, setAreport] = useState(null)
     
         useEffect(() => {
                 const fetchReportsData = async () => {
                     try {
                         const response = await fetchData('trinity-document');
                         if (response.length) {
                             setDocuments(response);
                             // Store attachment URLs
                             const urls = response.flatMap(item => item._links.self.map(link => link.href));
     
                             
     
                             setAttachmentsUrl(urls);
                         }
                     } catch (error) {
                         console.error("Error fetching gallery:", error);
                     }
                 };
         
                 fetchReportsData();
             }, []);
     
                 const fetchDocuments = async () => {
                     try {
                         const documentsIds = attachmentsUrl.map(url => url.split('/').pop());
                         const documentsResponses = await Promise.all(documentsIds.map(id => fetchData(`media?parent=${id}`)));
                         const documentLinks = await Promise.all(documentsResponses.map(item => item[0]))
                         setAreport(documentLinks);
                        // setAreport(documentsIds)
                         setLoading(false);
                     } catch (error) {
                         console.error("Error fetching images:", error);
                     }
                     console.log("This is a pdf document", areport)
                 };
         
             
         
     
             useEffect(()=>{
                  console.log("The Documents:", Documents)
                  //console.log("The attachments:", attachmentsUrl)
                 console.log("The documents Pdf => :", areport)
     
             }, [Documents, attachmentsUrl, areport] )
     
     
     const [selectedPostUrl, setSelectedPostUrl] = useState('')
     const [loadinPdf,setLoadingPdf] = useState(false)
             const download = async () =>{
                 setLoadingPdf(true)
                 try {
                     const response = await fetchData(`media?parent=${selectedPostUrl}`)
                     // window.location.href = response[0].guid.rendered;
                     window.open(response[0].guid.rendered, '_blank');
                     setLoadingPdf(false)
                 // console.log(response)
                 } catch (error) {
                     setLoadingPdf(false)
                 }
             }
             useEffect(()=>{
                 if(selectedPostUrl)
                     download()
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
                    <ul>
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
                      <p>
                      {t("Sustainability.approach-to-closure-management-desc2")}
                    </p>


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

                  <h5 class="min-header header009 ">{t("Sustainability.community-subtitle")}</h5>
                  
                  <p>
                    <b>{t("Sustainability.community-desc")}</b>
                    
                  </p>
                  {/* <p>
                    {t("Sustainability.governance-desc1")}
                  </p>
                   
                  <p>
                    {t("Sustainability.governance-desc2")}
                  </p>  */}

                  <ul className="content-achievement">
                      <li><b>{t("Sustainability.community-list1")} </b>{t("Sustainability.community-list1-2")}</li>
                      
                      
                  </ul>

                  <ul className="content-achievement">
                      <li><b>{t("Sustainability.community-list2")} </b>{t("Sustainability.community-list2-2")}</li>
                      
                      
                  </ul>

                  <ul className="content-achievement">
                      <li><b>{t("Sustainability.community-list3")} </b>{t("Sustainability.community-list3-2")}</li>
                      
                      
                  </ul>

                  <ul className="content-achievement">
                      <li><b>{t("Sustainability.community-list3")} </b>{t("Sustainability.community-list3-2")}</li>
                      
                      
                  </ul>
                  
                  <ul className="content-achievement">
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
           <div className="goverance">
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



                  </ul>
                  
                </div>
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