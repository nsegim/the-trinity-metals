
import { useTranslation } from 'react-i18next'
import SiteFooter from '../../components/Footer/Footer'
import SiteHeader from '../../components/header/Header'
import ImageGallery from '../../components/ImageGallery'
import './Project.css'
const Rutongo = () => {

    const { t } = useTranslation()
    return(
        <>
            <SiteHeader />
          {/* Hero section */}
          <div className="the-project-hero-section-wrapper">
              <video autoPlay muted loop>
                <source src="https://contents.trinity-metals.com/wp-content/uploads/2025/06/rutongo-122.mp4" type="video/mp4" />
              </video>
          </div>
          {/* Projects description */}
          <div className="project-content-wrapper">
            <div className="container d-flex justify-content-center">
              <div className="information-project">
                <div className="project-title-element">
                  <h1>{t("our-project-page.rutongo-mines.rutongo-title")} </h1>
                </div>
                <div className="work-result row">
                   <div className="col-md-3 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Black-3.svg" />
                     </div>
                     <div className="details-element">
                        <h4>{t("our-project-page.rutongo-mines.satellite-mines")} </h4>
                        <p>{t("our-project-page.rutongo-mines.satellite-mines-achievement")} </p>
                     </div>
                   </div>

                   <div className="col-md-3 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Black.svg" />
                     </div>
                     <div className="details-element">
                        <h4>{t("our-project-page.rutongo-mines.tin-production")} </h4>
                        <p>{t("our-project-page.rutongo-mines.tin-production-achievement")} </p>
                     </div>
                   </div>

                   <div className="col-md-3 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Black-1.svg" />
                     </div>
                     <div className="details-element">
                        <h4>{t("our-project-page.rutongo-mines.workforce")} </h4>
                        <p>{t("our-project-page.rutongo-mines.Workforce-achievement")} </p>
                     </div>
                   </div>
                   <div className="col-md-3 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Black-2.svg" />
                     </div>
                     <div className="details-element">
                        <h4>{t("our-project-page.rutongo-mines.location")} </h4>
                        <p> {t("our-project-page.rutongo-mines.location-achievement")}  <br/>{t("our-project-page.rutongo-mines.location-achievement1")} </p>
                     </div>
                   </div>
                </div>

                <div className="project-brief pt-3">
                  {/* <h4>
                    Brief history 
                  </h4> */}
                  <p className="fw-bold heading-20">
                    
                    
                      {t("our-project-page.rutongo-mines.rutongo-bold-title")} 
                  </p>

                  {/* <h4>
                      Presented on a history timeline
                  </h4> */}
                  <p>
                      {t("our-project-page.rutongo-mines.rutongo-description")} 
                  </p>
                  <p>
                     {t("our-project-page.rutongo-mines.rutongo-description1")} 
                  </p>

                  <p>
                   {t("our-project-page.rutongo-mines.rutongo-description2")} 
                  </p>

                  <p>
                     {t("our-project-page.rutongo-mines.rutongo-description3")}                   </p>

                  <p>
                       {t("our-project-page.rutongo-mines.rutongo-description4")} 
                  </p>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Project site map */}
          <div className="main-map-parent">
               <div className="map-wrapper rutongo-map">

               </div>
          </div>
          <SiteFooter />
        </>
    )
}
export default Rutongo