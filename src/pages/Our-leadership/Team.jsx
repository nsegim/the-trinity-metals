import SiteFooter from "../../components/Footer/Footer"
import SiteHeader from "../../components/header/Header"
import ImageGallery from "../../components/ImageGallery"
import './Team.css'

const Team = () => {
   return(
    <>
      <SiteHeader />
      {/* Hero section */}
      <div className="about-hero-section">
         <div className="inner-wrapper">
            <h1 className="heading">Our Leadership</h1>
         </div>
      </div>

      {/* Team members section */}
      <div className="Team-container-wrapper ">
         <div className="container d-flex flex-column">
            <div className="header-element">
               <h1 className="text-center">Executive Management Team</h1>
            </div>


            <div className="team-members">
               <div className="team-member-wrapper">
                  <div className="single-team-member">
                     <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Trinity-boss.jpeg" customClass={'team-member-photo'}/>
                     <div className="team-member-details">
                        <div className="team-member-info">
                              <h2 className="member-name">
                              Peter Geleta
                           </h2>
                              <p className="member-post">
                              Chief Executive Officer
                              </p>
                        </div>
                        <div className="view-member-desc">
                              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Vector-1.svg"/>
                        </div>
                     </div>
                  </div>
               </div>
                               
                             
                              
            </div>



            <div className="header-element pt-5">
               <h1 className="text-center">Executive Management Team</h1>
            </div>

            <div className="team-members">
               <div className="team-member-wrapper">
                  <div className="single-team-member">
                     <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Trinity-boss.jpeg" customClass={'team-member-photo'}/>
                     <div className="team-member-details">
                        <div className="team-member-info">
                              <h2 className="member-name">
                              Peter Geleta
                           </h2>
                              <p className="member-post">
                              Chief Executive Officer
                              </p>
                        </div>
                        <div className="view-member-desc">
                              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Vector-1.svg"/>
                        </div>
                     </div>
                  </div>
               </div>
                               
                             
                              
            </div>

         </div>
      </div>


      
      
        
      <SiteFooter />
    </>
   )
}

export default Team



