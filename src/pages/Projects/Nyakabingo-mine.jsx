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
              <source src="https://trinity-metals.com/wp-content/uploads/2025/06/nyakibingo-1.mp4" type="video/mp4" />
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
                        <p>100-110 tons per month</p>
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
                        <p>19km northwest <br/>of Kigali, Rwanda</p>
                     </div>
                   </div>
                </div>

                <div className="project-brief pt-3">
                  {/* <h4>
                    Brief history 
                  </h4> */}
                  <p className="fw-bold heading-20">
                     Trinity Nyakabingo Mine is a Tungsten ore mine with a mining concession of 1,600 ha. The
                      mine is estimated to contain approximately 115,502 tons of recoverable Tungsten with
                      potential to grow the resource substantially at depth. Current production is between 100 to 110
                      tons of wolframite per month, containing 66-70% Tungsten, under a 25-year license that
                      commenced in 2015.
                     
                  </p>
                  {/* <h4>
                      Presented on a history timeline
                  </h4> */}
                  <p>
                      Exploration of the mine’s alluvial deposits began in the late 1930s, but it was only after WWII that
                        systematic open cast mining began. In the late 1960’s underground mining started through adits,
                        followed by drives along quartz veins situated in bedding planes (known as concordant parallel
                        veins). The first Companies to mine the deposit were Belgium using semi-mechanized methods until
                        1986. At this time, the mines were nationalized and operated under REDEMI (Regie d’Exploitation et
                        de Developpement des Mines). The mines closed in 1994 when the genocide against the Tutsi
                        occurred. In 1995 they reopened under REDEMI as a miners’ co-operative and operated as such until
                        2007, when Euro Trade International took ownership. In May 2022 the mine was incorporated into the
                        newly established Trinity Metals Group and renamed Trinity Nyakabingo Mine.
                  </p>
                  <p>
                    Trinity Nyakabingo Mine is the African continent’s largest Tungsten producer.
                  </p>
                  <p>
                    The mine has significant growth potential - future plans consist of increasing mining volumes by
opening up new reserves at depth through the development of a decline below 22 level, introducing
new bulk mining, utilization of larger mining equipment and the design and construction of mineral
processing facilities to process run of mine material and legacy stockpiled material. These plans give
the mine the opportunity to at least double current production levels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project site map */}
          <div className="main-map-parent">
               <div className="map-wrapper nyakabingo-map">

               </div>
          </div>
           
          <div className="yellow-bg"></div>
          <SiteFooter />
        </>
    )
}
export default Nyakabingo