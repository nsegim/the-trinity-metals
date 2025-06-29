import { useEffect, useState } from 'react'
import SiteFooter from '../../../components/Footer/Footer'
import SiteHeader from '../../../components/header/Header'
import ImageGallery from '../../../components/ImageGallery'

import './Reports.css'
import { fetchData } from '../../../config/apiConfig'
import Spinner from '../../../components/Spinner/Spinner'
import { useTranslation } from 'react-i18next'

const Reports = ()=>{
   const [Documents, setDocuments] = useState([])
   const [attachmentsUrl, setAttachmentsUrl] = useState([])
   const [loading, setLoading] = useState(true)
   const [areport, setAreport] = useState(null)

    useEffect(() => {
            const fetchReportsData = async () => {
                try {
                    const response = await fetchData('trinity-document?categories=81');
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

        
      const { t } = useTranslation()

    return(
        <>
           <SiteHeader />
           <div className="custom-hero reports">
                <div className="child-item-wrapper z-1">
                    <h1 className="heading text-uppercase">{t("reports.report-page-title")}</h1>
                </div>
           </div>
           <div className="contains-reports">
               <div className="container">
                  <div className="top-search-container">
                    <div className="search-form">
                        <form action="">
                            <input type="text" placeholder={t("reports.form-placeholder")} />
                            <button type='submit' className=''>
                            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Symbol-9.svg"/>
                            </button>
                        </form>
                    </div>
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
                                                  <span>Download</span>
                                            </a>
                                                }
                                            
                                            
                                    </div>
                        
                                </div>
                        ))
                        
                    ) : (

                    <Spinner />
                    
                       
                        
                      
                    )}

                    

                     
                 </div>

               </div>

                
            
           </div>
           <SiteFooter />
        </>
    )
}

export default Reports