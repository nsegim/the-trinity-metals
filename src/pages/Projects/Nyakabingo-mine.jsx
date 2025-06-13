import SiteFooter from '../../components/Footer/Footer'
import SiteHeader from '../../components/header/Header'
import ImageGallery from '../../components/ImageGallery'
import './Project.css'
const Nyakabingo = () => {
    return(
        <>
          <SiteHeader />
          {/* Hero section */}
          <div className="the-project-hero-section-wrapper">
            <video autoPlay muted loop>
              <source src="https://trinity-metals.com/wp-content/uploads/2025/03/TRINITY-DOC-WEB_1.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Projects description */}
          <div className="project-content-wrapper">
            <div className="container d-flex justify-content-center">
              <div className="information-project">
                <div className="project-title-element">
                  <h1>Trinity Nyakabingo Mine</h1>
                </div>
                <div className="work-result row">
                   <div className="col-md-4 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Black.svg" />
                     </div>
                     <div className="details-element">
                        <h4>Tungsten Production</h4>
                        <p>100-110 tonnes</p>
                     </div>
                   </div>

                   <div className="col-md-4 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Black-1.svg" />
                     </div>
                     <div className="details-element">
                        <h4>Workforce</h4>
                        <p>1,800+</p>
                     </div>
                   </div>

                   <div className="col-md-4 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Black-2.svg" />
                     </div>
                     <div className="details-element">
                        
                        <h4>Location</h4>
                        <p>Nyakabingo Mine sit 19km northwest <br/>of Kigali, Rwanda</p>
                     </div>
                   </div>
                </div>

                <div className="project-brief pt-3">
                  <h4>
                    Brief history 
                  </h4>
                  <p>
                     Trinity Nyakabingo Mine is a Tungsten ore mine with a mining concession of 1,600 ha.
                     They are estimated to contain approximately 115,502 tonnes of recoverable Tungsten with 
                     potential to grow the resource substantially at depth. Currently produces between 100 to 
                     110 tonnes of wolframite per month, containing 66-70% Tungsten, under a 25 year license 
                     that began in 2015.
                  </p>
                  <h4>
                      Presented on a history timeline
                  </h4>
                  <p>
                    Exploration of the mine’s alluvial deposits began in the late 1930s, but it was only after WWII 
                    that systematic open cast mining began. Underground mining started in the late 1960s with adits,
                     followed by drives along quartz veins situated in bedding planes (known as concordant parallel 
                     veins or PV). The first Companies to work the deposit were Belgium who mined on a semi-mechanized 
                     until the 1986. At this time, the mines were nationalized and operated under REDEMI (Regie d’Exploitation
                      et de Developpement des Mines). The mines closed in 1994 when the genocide against the Tutsi occurred. In 
                      1995 they reopened under REDEMI as a miners’ co-operative and operated as such until 2007, when Euro Trade 
                      International took ownership.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project site map */}
          <div className="map-wrapper">

             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1288.995535622144!2d29.97668413924816!3d-1.8634999512650818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca333c79c7c3f%3A0x42a1aa10c0acfe29!2sNyakabingo%20Mine!5e1!3m2!1sen!2srw!4v1738923560503!5m2!1sen!2srw" width="100%" height="634"></iframe>
          </div> 
          <div className="yellow-bg"></div>
          <SiteFooter />
        </>
    )
}
export default Nyakabingo