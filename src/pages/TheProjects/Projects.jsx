import { Link } from 'react-router-dom'
import SiteFooter from '../../components/Footer/Footer'
import SiteHeader from '../../components/header/Header'
import ImageGallery from '../../components/ImageGallery'
import { useTranslation } from 'react-i18next'
import './Projects.css'
const ProjectPage = () => {

  const { t } = useTranslation()
    return(
        <>
          <SiteHeader />
          {/* Hero Section */}
          <div className="project-section-wrapper">
            
          </div>

          {/* Projects section */}
          <div className="projects-section-holder">
            <div className="container">
              <div className="inner-section-header">
                <h1>{t("our-project-page.projects-title")}</h1>
              </div>
              <div className="projects-description pb-3">
                <p>
                  {t("our-project-page.project-description-1")}
                </p>
                <p>
                  {t("our-project-page.project-description-2")}  
                </p>
                <p>
                  {t("our-project-page.project-description-3")}
                </p>
              </div>
              <div className="projects-cards-wrapper">
                <div className="project-card card-item card1">
                   <div className="project-name">
                    <h4>{t("our-project-page.project-sites.trinity-nyakabingo-mine")}</h4>
                   </div>
                   <div className="read-more-about">
                     
                     <Link to='/our-projects/nyakabingo'>
                      <span className='button-name'>{t("home.read-more-button")}</span>
                      <span className="button-icon">
                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
                      </span>
                     </Link>
                   </div>
                </div>
                <div className="project-card card-item card2">
                   <div className="project-name">
                    <h4>{t("our-project-page.project-sites.trinity-musha-mines")}</h4>
                   </div>
                   <div className="read-more-about">
                     <Link to='/our-projects/musha'>
                      <span className='button-name'>{t("home.read-more-button")}</span>
                      <span className="button-icon">
                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
                      </span>
                     </Link>
                   </div>
                </div>
                <div className="project-card card-item card3">
                   <div className="project-name">
                    <h4>{t("our-project-page.project-sites.trinity-rutongo-mines")} </h4>
                   </div>
                   <div className="read-more-about">
                     <Link to='/our-projects/rutongo'>
                      <span className='button-name'>{t("home.read-more-button")}</span>
                      <span className="button-icon">
                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
                      </span>
                     </Link>
                   </div>
                </div>
                <div className="project-card card-item card4">
                   <div className="project-name">
                    <h4>{t("our-project-page.project-sites.LITHIUM-EXPLORATION")}</h4>
                   </div>
                   <div className="read-more-about">
                     <Link to='/our-projects/lithium-exploration'>
                      <span className='button-name'>{t("home.read-more-button")}</span>
                      <span className="button-icon">
                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
                      </span>
                     </Link>
                   </div>
                </div>

              </div>
            </div>
          </div>
          <div className="yellow-bg">

          </div>
          <SiteFooter />
        </>
        
    )
}

export default ProjectPage