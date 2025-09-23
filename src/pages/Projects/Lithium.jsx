import SiteFooter from "../../components/Footer/Footer"
import SiteHeader from "../../components/header/Header"
import { useTranslation } from "react-i18next"
 
const Lithium = () => {
   const { t } = useTranslation()
    return(
        <>
            <SiteHeader />
          {/* Hero section */}
          <div className="the-project-hero-section-wrapper lithium">
            {/* <video autoPlay muted loop>
              <source src="https://contents.trinity-metals.com/wp-content/uploads/2025/03/TRINITY-DOC-WEB_1.mp4" type="video/mp4" />
            </video> */}
          </div>
          {/* Projects description */}
          <div className="project-content-wrapper pb-5">
            <div className="container d-flex justify-content-center">
              <div className="information-project">
                <div className="project-title-element">
                  <h1 style={{marginBottom: "0"}}>{t("our-project-page.LITHIUM-EXPLORATION.LITHIUM-EXPLORATION-title")}</h1>
                </div>
                

                <div className="project-brief">
                  <p className="fw-bold">
                    {t("our-project-page.LITHIUM-EXPLORATION.LITHIUM-EXPLORATION-subtitle")} 
                  </p>
                  <p>
                      {t("our-project-page.LITHIUM-EXPLORATION.description1")} 
                  </p>
                  
                  <p>
                    {t("our-project-page.LITHIUM-EXPLORATION.description2")} 
                  </p>
                  <div>
                    <ul>
                      <li>
                        <p style={{marginBottom: "5px"}}><b>{t("our-project-page.LITHIUM-EXPLORATION.description2-1")}</b></p>
                        <p>{t("our-project-page.LITHIUM-EXPLORATION.description2-1-0")}</p>
                      </li>
                      <li>
                          <p style={{marginBottom: "5px"}}><b>{t("our-project-page.LITHIUM-EXPLORATION.description2-2")}</b></p>
                          <p>{t("our-project-page.LITHIUM-EXPLORATION.description2-2-0")}</p>
                      </li>
                      <li>
                           <p style={{marginBottom: "5px"}}><b>{t("our-project-page.LITHIUM-EXPLORATION.description2-3")}</b></p>
                           <p>{t("our-project-page.LITHIUM-EXPLORATION.description2-3-0")}</p>
                      </li>
                      
                      <li>
                          <p style={{marginBottom: "5px"}}><b>{t("our-project-page.LITHIUM-EXPLORATION.description2-4")}</b></p>
                          <p>{t("our-project-page.LITHIUM-EXPLORATION.description2-4-0")}</p>
                      </li>
                    </ul>
                    
                  </div>
                  <p>
                     {t("our-project-page.LITHIUM-EXPLORATION.description3")} 
                  </p>
                  
                  <p>
                      {t("our-project-page.LITHIUM-EXPLORATION.description4")} 
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="yellow-bg"></div>
          <SiteFooter />
          
        </>
    )
}

export default Lithium