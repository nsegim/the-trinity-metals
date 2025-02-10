import SiteFooter from '../../../components/Footer/Footer'
import SiteHeader from '../../../components/header/Header'
import ImageGallery from '../../../components/ImageGallery'
import './Reports.css'

const Reports = ()=>{
    return(
        <>
           <SiteHeader />
           <div className="custom-hero reports">
                <div className="child-item-wrapper z-1">
                    <h1 className="heading">Reports</h1>
                </div>
           </div>
           <div className="contains-reports">
               <div className="container">
                  <div className="top-search-container">
                    <div className="search-form">
                        <form action="">
                            <input type="text" placeholder='Enter your keywords...' />
                            <button type='submit' className=''>
                            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Symbol-9.svg"/>
                            </button>
                        </form>
                    </div>
                  </div>
                 
                  <div className="reports-container">
                     <div className="single-report">
                        <div className="report-name">
                            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Report-icon.svg" />
                            <h4 className="report-name">
                                Anti-Bribery and Corruption Policy
                            </h4>
                        </div>
                        <div className="download-section">
                                <span>2.9KB</span>
                                <a href="" className="download-button">
                                <span>Download</span>
                                </a>
                        </div>
                        
                    </div>
                 </div>

               </div>

                
            
           </div>
           <SiteFooter />
        </>
    )
}

export default Reports