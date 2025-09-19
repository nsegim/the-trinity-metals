import { useTranslation } from 'react-i18next'
import SiteFooter from '../../components/Footer/Footer'
import SiteHeader from '../../components/header/Header'
import ImageGallery from '../../components/ImageGallery'
import './Project.css'
const Musha = () => {

  const { t } = useTranslation()
    return(
        <>
          <SiteHeader />
          {/* Hero section */}
          <div className="the-project-hero-section-wrapper">
            <video autoPlay muted loop>
              <source src="https://trinity-metals.com/wp-content/uploads/2025/06/musha-1.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Projects description */}
          <div className="project-content-wrapper">
            <div className="container d-flex justify-content-center">
              <div className="information-project">
                <div className="project-title-element">
                  <h1>{t("our-project-page.musha-mines.musha-mines-title")}</h1>
                </div>
                <div className="work-result row">
                   <div className="col-md-4 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Black.svg" />
                     </div>
                     <div className="details-element">
                        <h4>{t("our-project-page.musha-mines.tin-production")}</h4>
                        <p>{t("our-project-page.musha-mines.tin-production-achievement")}</p>
                     </div>
                   </div>

                   <div className="col-md-4 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Black-1.svg" />
                     </div>
                     <div className="details-element">
                        <h4>{t("our-project-page.musha-mines.Workforce")}</h4>
                        <p>
                          {t("our-project-page.musha-mines.workforce-achievement")} 
                        </p>
                     </div>
                   </div>

                   <div className="col-md-4 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Black-2.svg" />
                     </div>
                     <div className="details-element">
                        
                        <h4>{t("our-project-page.musha-mines.location")}</h4>
                        <p>{t("our-project-page.musha-mines.location-achievement")} <br/>
                           {t("our-project-page.musha-mines.location-achievement1")}
                        </p>
                     </div>
                   </div>
                </div>

                <div className="project-brief pt-3">
                  {/* <h4>
                    Brief history 
                  </h4> */}
                  <p className="fw-bold heading-20">
                      {t("our-project-page.musha-mines.brief-history-desc")}
                  </p>
                  {/* <h4>
                      Presented on a history timeline
                  </h4> */}
                  <p>
                       {t("our-project-page.musha-mines.brief-history-desc1")}
                  </p>
                     
                  <p>
                     {t("our-project-page.musha-mines.brief-history-desc2")}
                  </p>

                  <p>
                     {t("our-project-page.musha-mines.brief-history-desc3")}
                  </p>
                </div>
              </div>
            </div>
          </div>

         
           {/* Project site map */}
          <div className="main-map-parent">
               <div className="map-wrapper musha-map">

               </div>
          </div>
          <div className="yellow-bg"></div>
          <SiteFooter />
        </>
    )
}
export default Musha