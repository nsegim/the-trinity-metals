import SiteFooter from '../../components/Footer/Footer'
import SiteHeader from '../../components/header/Header'
import ImageGallery from '../../components/ImageGallery'
import './Project.css'
const Musha = () => {
    return(
        <>
          <SiteHeader />
          {/* Hero section */}
          <div className="the-project-hero-section-wrapper">
            <video autoPlay muted loop>
              <source src="https://trinity-metals.com/wp-content/uploads/2025/06/musha-1.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Projects description */}
          <div className="project-content-wrapper">
            <div className="container d-flex justify-content-center">
              <div className="information-project">
                <div className="project-title-element">
                  <h1>Trinity Musha Mines</h1>
                </div>
                <div className="work-result row">
                   <div className="col-md-4 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Black.svg" />
                     </div>
                     <div className="details-element">
                        <h4>Tin Production</h4>
                        <p>30-40 tons per month</p>
                     </div>
                   </div>

                   <div className="col-md-4 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Black-1.svg" />
                     </div>
                     <div className="details-element">
                        <h4>Workforce</h4>
                        <p>2,200+</p>
                     </div>
                   </div>

                   <div className="col-md-4 stats">
                     <div className="icon-element">
                       <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Black-2.svg" />
                     </div>
                     <div className="details-element">
                        
                        <h4>Location</h4>
                        <p>45km from Kigali in the Eastern Province</p>
                     </div>
                   </div>
                </div>

                <div className="project-brief pt-3">
                  {/* <h4>
                    Brief history 
                  </h4> */}
                  <p className="fw-bold heading-20">
                      Trinity Musha Mine is a Tin and Tantalum Mine with Lithium prospects operating
                      on 6,094 ha concession, located in Rwanda’s prolific tin region – Rwamagana
                      District – 45 km from Kigali in the Eastern Province. The mine consists of a
                      number of sub-mines.
                  </p>
                  {/* <h4>
                      Presented on a history timeline
                  </h4> */}
                  <p>
                   Trinity Musha Mines tin deposits were initially exploited from the 1920s to the 1970s.
                    In 1985, the mine was nationalized and operated by SOMIRWA (Société des Mines du
                    Rwanda). However, due to depressed tin prices and the 1994 genocide against the
                    Tutsi, which deterred external investment, the operation remained artisanal and never
                    realized its growth potential. Between 2014 and 2016, Pella Rwanda Ltd was granted
                    a 25-year mining license for the Musha-Ntunga Mines. In 2017, ownership was
                    transferred to Piran Resources. Piran Resources operate the mine until May 2022
                    when it was incorporated into the newly established Trinity Metals Group.
                  </p>
                     
                  <p>
                     The mine is Rwanda’s second largest tin producer after Rutongo Mine.
                  </p>

                  <p>
                    The mine has significant growth potential - future plans consist of increasing mining
                    volumes by opening up new reserves at depth through the development of a decline
                    below level 4, introducing new bulk mining, utilization of larger mining equipment and
                    the design and construction of a number of mineral processing facilities to process run
                    of mine material and legacy stockpiled material. These plans give the mine the
                    opportunity to more than double production over the next 5 years. The Ntunga mining
                    area has significant reserves of tantalum that will be mined as a by-product to the tin.
                  </p>
                </div>
              </div>
            </div>
          </div>

         
           {/* Project site map */}
          <div className="main-map-parent">
               <div className="map-wrapper musha-map">

               </div>
          </div>
          <div className="yellow-bg"></div>
          <SiteFooter />
        </>
    )
}
export default Musha