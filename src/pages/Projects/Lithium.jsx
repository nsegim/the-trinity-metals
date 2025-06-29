import SiteFooter from "../../components/Footer/Footer"
import SiteHeader from "../../components/header/Header"
const Lithium = () => {
    return(
        <>
            <SiteHeader />
          {/* Hero section */}
          <div className="the-project-hero-section-wrapper lithium">
            {/* <video autoPlay muted loop>
              <source src="https://trinity-metals.com/wp-content/uploads/2025/03/TRINITY-DOC-WEB_1.mp4" type="video/mp4" />
            </video> */}
          </div>
          {/* Projects description */}
          <div className="project-content-wrapper pb-5">
            <div className="container d-flex justify-content-center">
              <div className="information-project">
                <div className="project-title-element">
                  <h1>Lithium Exploration</h1>
                </div>
                

                <div className="project-brief pt-3">
                  <p className="fw-bold">
                    The Ntunga pegmatite offers robust development opportunities for Trinity Metals. 
                  </p>
                  <p>
                   In 2018, exploration efforts within the Trinity Ntunga licence successfully defined 
                  an initial 9Mt Sn-Ta (Tin-Tantalum) resource hosted in a large LCT pegmatite system. 
                  In addition, the team discovered consistent high grades of 1.5% Li₂O (Lithium Oxide) 
                  dominantly within spodumene mineralisation in several holes with intersections over 80m 
                  true width and open to depth. 
                  </p>

                  <p>
                    The team’s further analysis of drill core has revealed a second potential host of significant 
                    volumes of lithium mineralisation of up to 1% Li₂O. 
                  </p>
                  <p>
                    As a result of this exciting discovery, the group performed an additional study and test work, 
                    which prompted the next phase of modeling and metallurgical testing. 
                  </p>
                  
                  <p>
                    The potential exists to define a globally significant Li-Sn-Ta resource in a secure and rapidly 
                    developing country. Trinity is focused on advancing this deposit and anticipates an updated resource
                    statement in the near term. We are confident that we will soon move into a full feasibility phase.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="yellow-bg"></div>
          <SiteFooter />
          
        </>
    )
}

export default Lithium