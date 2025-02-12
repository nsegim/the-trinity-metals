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
                        <p>30 tonnes</p>
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
                        <p>Musha Mines sit 45km from Kigali in the Eastern Province</p>
                     </div>
                   </div>
                </div>

                <div className="project-brief pt-3">
                  <h4>
                    Brief history 
                  </h4>
                  <p>
                    Trinity Musha Mines is a Tin and Tantalum Mine with a mining concession of 3,894ha which is estimated 
                    to contain approximately 12,870tonnes of recoverable Tin with potential to grow the resource substantially 
                    at depth. Currently produces 30tonnes of Tin per month, containing 68-70% Sn, under a 25-year license that 
                    began in 2014. The Mine also produces a small amount of Coltan from Duha and Ntunga sub-site.
                  </p>
                  <h4>
                      Presented on a history timeline
                  </h4>
                  <p>
                    The Musha-Ntunga tin deposits were initially exploited from the 1920s to the 1970s. In 1985, the mine was 
                    nationalized and operated by SOMIRWA (Société des Mines du Rwanda). However, due to depressed tin prices and 
                    the 1994 genocide against the Tutsi, which deterred external investment, the operation remained artisanal. 
                    Between 2014 and 2016, Pella Rwanda Ltd was granted a 25-year mining license for the Musha-Ntunga Mines. 
                    Pella reprocessed tailings and conducted a geochemical testing program, yielding encouraging results and
                    prompting further work. In 2017, ownership was transferred to Piran Resources.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project site map */}
          <div className="map-wrapper">

             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8742.139325141357!2d30.33924524974359!3d-1.9275878443746952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19db5b76d3094de9%3A0xb6792ab5ff299494!2sTrinity%20Musha%20Mines%20Ltd!5e1!3m2!1sen!2srw!4v1738927967346!5m2!1sen!2srw"  width="100%" height="634"></iframe>
          </div> 
          <div className="yellow-bg"></div>
          <SiteFooter />
        </>
    )
}
export default Musha