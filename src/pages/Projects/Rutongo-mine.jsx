
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
                <source src="https://trinity-metals.com/wp-content/uploads/2025/06/rutongo-122.mp4" type="video/mp4" />
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
                        <p> 26km north <br/>of Kigali, Rwanda</p>
                     </div>
                   </div>
                </div>

                <div className="project-brief pt-3">
                  <h4>
                    Brief history 
                  </h4>
                  <p className="fw-bold">
                     Rutongo Mines sit 26km north of Kigali, comprising six underground tin mines – Gisanze, Masoro, Nyamyumba, Gasambya, Karambo and Mahaza. Together, they contain one of the biggest cassiterite deposits in Africa.
                  </p>

                  {/* <h4>
                      Presented on a history timeline
                  </h4> */}
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
          <div className="main-map-parent">
               <div className="map-wrapper rutongo-map">

               </div>
          </div>
          <SiteFooter />
        </>
    )
}
export default Rutongo