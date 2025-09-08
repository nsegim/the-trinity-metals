
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
                        <p>70-90 tons per month</p>
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
                    
                    
                      Rutongo Mines is a Tin Mine with a mining concession of 9,600 ha, located 26km north of
                      Kigali, comprising six underground tin mines – Gisanze, Masoro, Nyamyumba, Gasambya,
                      Karambo and Mahaza. Together, they contain one of the biggest cassiterite deposits in Africa.
                  </p>

                  {/* <h4>
                      Presented on a history timeline
                  </h4> */}
                  <p>
                      The Rutongo mines operate under a 25-year license that began in 2015. They are estimated to
                      contain approximately 54,000 tonnes of recoverable tin and currently produce between 40 to 70 tons
                      per month, projected to increase to 200 tonnes per month in the next five years.
                  </p>
                  <p>
                      Tin exploitation at Rutongo began in 1931, and from the 1940s, the mines consistently exported 800
                        tonnes a year of cassiterite. By the 1950s, SOMUKI, a Belgian mining company, had developed the
                        mine into the largest tin concentrate producer in Rwanda. In 1973, the fusion of former colonial
                        mining sites gave rise to SOMIRWA (Société Des Mines Du Rwanda), a joint venture between the
                        Government of Rwanda and GEOMINES. This Belgium-based mining company operated on site until
                        its liquidation in 1986. At this time, the mines were nationalised and operated under REDEMI (Regie
                        d’Exploitation et de Developpement des Mines).
                  </p>

                  <p>
                    The mines closed in 1994 when the genocide against the Tutsi occurred. In 1995 they reopened
                    under REDEMI as a miners’ co-operative and operated as such until 2008, when the government
                    re-privatized them.
                  </p>

                  <p>
                    In May 2022, the mine was incorporated into the newly established Trinity Metals Group.
                  </p>

                  <p>
                    The mine has significant growth potential - future plans consist of increasing mining volumes by
                    opening up new reserves at depth through the development of a decline below 33 level, introducing
                    new bulk mining, utilization of larger mining equipment and the design and construction of a number
                    of mineral processing facilities to process run of mine material and legacy stockpiled material. These
                    plans give the mine the opportunity to more than double production over the next 5 years.
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