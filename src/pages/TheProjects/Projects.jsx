import { Link } from 'react-router-dom'
import SiteFooter from '../../components/Footer/Footer'
import SiteHeader from '../../components/header/Header'
import ImageGallery from '../../components/ImageGallery'
import { useTranslation } from 'react-i18next'
import './Projects.css'
import { Helmet } from 'react-helmet-async'
const ProjectPage = () => {

  const { t } = useTranslation()
    return(
        <>
            <Helmet>
                <title>Our Projects | Trinity Metals Limited</title>

                <meta
                  name="description"
                  content="Trinity Metals operates three certified conflict-free mining projects in Rwanda, upholding strict ESG and sustainable mining standards."
                />

                <meta
                  name="keywords"
                  content="Trinity Metals Projects, Rutongo Mines, Nyakabingo Mine, Musha Mines, Ntunga Lithium Project
 Responsible Mining Rwanda, ESG Mining, Conflict-Free Minerals"
                />

                <meta property="og:title" content="Our Projects | Trinity Metals Limited" />
                <meta
                  property="og:description"
                  content="Explore Trinity Metals Limited’s mining operations in Rwanda – Rutongo, Nyakabingo, and Musha Mines. Operated responsibly under ESG and OECD conflict-free standards."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://trinity-metals.com/our-projects" />
                
                <link rel="canonical" href="https://trinity-metals.com/our-projects" />
          </Helmet>


          <SiteHeader />
          {/* Hero Section */}
          <div className="project-section-wrapper">
               
                <div className="inner-wrapper">
                    <h1 className="heading text-uppercase">{t("our-project-page.projects-title")}</h1>
                </div>
          </div>

          {/* Projects section */}
          <div className="projects-section-holder">
            <div className="container">
              <div className="inner-section-header">
                <h2>{t("our-project-page.projects-sub-title")}</h2>
              </div>
              <div className="projects-description pb-3">
                
                    <p>
                       <b dangerouslySetInnerHTML={{ __html: t("our-project-page.project-description-1") }} />

                    
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
                        <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
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
                        <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
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
                        <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
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
                        <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
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