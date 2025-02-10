import { Link } from 'react-router-dom'
import SiteFooter from '../../components/Footer/Footer'
import SiteHeader from '../../components/header/Header'
import ImageGallery from '../../components/ImageGallery'
import './Projects.css'
const ProjectPage = () => {
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
                <h1>Projects</h1>
              </div>
              <div className="projects-description pb-3">
                <p>
                  Trinity Metals has three mining projects operated as subsidiaries in Rwanda – Rutongo Mines,
                   Nyakabingo Mine, and Musha Mines. They include three primary mining sites and a few satellite
                    sites located in close proximity to the primary sites.
                </p>
                <p>
                  All of our mining sites operate to international mining regulations and uphold strict environmental 
                  standards. We do not use toxic or environmentally damaging chemical processes in our mines, nor do the 
                  mines produce any such material.
                </p>
                <p>
                  All of our production is certified “conflict-free” – our mines are fully compliant with conflict minerals
                   audit requirements under OECD guidelines.
                </p>
              </div>
              <div className="projects-cards-wrapper">
                <div className="project-card card-item card1">
                   <div className="project-name">
                    <h4>Trinity Nyakabingo Mine</h4>
                   </div>
                   <div className="read-more-about">
                     
                     <Link to='/our-projects/nyakabingo'>
                      <span className='button-name'>Read More</span>
                      <span className="button-icon">
                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
                      </span>
                     </Link>
                   </div>
                </div>
                <div className="project-card card-item card2">
                   <div className="project-name">
                    <h4>Trinity Musha Mines</h4>
                   </div>
                   <div className="read-more-about">
                     <Link to='/our-projects/musha'>
                      <span className='button-name'>Read More</span>
                      <span className="button-icon">
                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
                      </span>
                     </Link>
                   </div>
                </div>
                <div className="project-card card-item card3">
                   <div className="project-name">
                    <h4>Trinity Rutongo Mines </h4>
                   </div>
                   <div className="read-more-about">
                     <Link to='/our-projects/rutongo'>
                      <span className='button-name'>Read More</span>
                      <span className="button-icon">
                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/arrow-icon.svg"/>
                      </span>
                     </Link>
                   </div>
                </div>
                <div className="project-card card-item card4">
                   <div className="project-name">
                    <h4>LITHIUM EXPLORATION</h4>
                   </div>
                   <div className="read-more-about">
                     <Link to='/our-projects/lithium-exploration'>
                      <span className='button-name'>Read More</span>
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