
import SiteFooter from '../../components/Footer/Footer'
import SiteHeader from '../../components/header/Header'
import ImageGallery from '../../components/ImageGallery'
import './Project.css'
const Rutongo = () => {
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
                  <h1>Rutongo Mines </h1>
                </div>
                <div className="work-result row">
                   <div className="col-md-3 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Black-3.svg" />
                     </div>
                     <div className="details-element">
                        <h4>Rutongo Satellite Mines</h4>
                        <p>6 Mines</p>
                     </div>
                   </div>

                   <div className="col-md-3 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Black.svg" />
                     </div>
                     <div className="details-element">
                        <h4>Tin Production</h4>
                        <p>70-90 tonnes</p>
                     </div>
                   </div>

                   <div className="col-md-3 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Black-1.svg" />
                     </div>
                     <div className="details-element">
                        <h4>Workforce</h4>
                        <p>2,500+</p>
                     </div>
                   </div>
                   <div className="col-md-3 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Black-2.svg" />
                     </div>
                     <div className="details-element">
                        <h4>Location</h4>
                        <p>Rutongo Mines sit 26km north <br/>of Kigali, Rwanda</p>
                     </div>
                   </div>
                </div>

                <div className="project-brief pt-3">
                  <h4>
                    Brief history 
                  </h4>
                  <p>
                    Rutongo Mines is a Tin mine with a mining concession of 9,960 ha. Features 6 operational mining sites - Nyamyumba, 
                    Gasambya, Masoro, Mahaza, Karambo and Gisanse. They are estimated to contain approximately 56,000 tonnes of recoverable 
                    tin with potential to grow the resource substantially at depth. Currently produce between 70-90 tonnes of tin concentrate
                     at 68-70% Sn, projected to increase to 200 tonnes per month in the next five years.
                  </p>
                  <h4>
                      Presented on a history timeline
                  </h4>
                  <p>
                    Tin exploitation at Rutongo began in 1931, and from the 1940s, the mines consistently exported 800 tonnes a year of cassiterite. 
                    By the 1950s, SOMUKI, a Belgian mining company, had developed the mine into the largest tin concentrate producer in Rwanda. In 1973, 
                    the fusion of former colonial mining sites gave rise to SOMIRWA (Société Des Mines Du Rwanda), a joint venture between the Government 
                    of Rwanda and GEOMINES. This Belgium-based mining company operated on site until its liquidation in 1986. At this time, the mines were 
                    nationalized and operated under REDEMI (Regie d’Exploitation et de Developpement des Mines).
                  </p>
                  <p>
                    The mines closed in 1994 when the genocide against the Tutsi occured. In 1995 they reopened under REDEMI as a miners’ co-operative and
                     operated as such until 2008, when the government re-privatized them. 
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project site map */}
          <div className="map-wrapper">

             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.088586584535!2d30.058246836491325!3d-1.81666367409583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc992eeb294c9b%3A0x7eb5d43ca2c602ae!2sTrinity%20Rutongo%20Mines!5e1!3m2!1sen!2srw!4v1738925999792!5m2!1sen!2srw" width="100%" height="634"></iframe>
          </div> 
          <SiteFooter />
        </>
    )
}
export default Rutongo