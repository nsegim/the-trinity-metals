import SiteFooter from "../../components/Footer/Footer"
import SiteHeader from "../../components/header/Header"
import ImageGallery from "../../components/ImageGallery"
import './Sastainability.css'
const SustainabilityPage = () => {
    return(
        <>
          <SiteHeader />
          {/* Hero Section */}
          <div className="about-hero-section">
                <div className="inner-wrapper">
                    <h1 className="heading">Sustainability</h1>
                </div>
           </div>
           {/* Envirnoment section */}
           <div className="environment-section">
             <div className="row">
              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Environment-bulk.svg" customClass={'sustainabilty-icon'}/>
              <div className="col-md-6 bg-section">
                
              </div>
              <div className="col-md-6 content-section">
                <div className="content-wrapper">
                  <h2 className="section-header008">
                    Environment
                  </h2>
                  <h5 className="min-header">
                    We are a part of the energy revolution
                  </h5>
                  <p>
                     We take our values seriously and hold ourselves 
                     accountable to the communities where we operate 
                     and the greater good of the planet. We support the
                     UN’s mission to ensure that by 2030 all people enjoy
                      peace and prosperity and do our part to contribute to the
                       Global Sustainability Development Goals.
                  </p>
                  <p>
                  We have taken steps to track, actively reduce and 
                  offset our carbon emissions and utilise eco-conscious 
                  mining methods and technology. We employ a replacement 
                  strategy for trees affected by our mining operations and 
                  have planted in excess of  657,000 trees across the three 
                  mine sites. We work collaboratively with the local environment, 
                  forestry and water management authorities to ensure that our 
                  efforts add net value to the environment. 
                  </p>
                   
                  <p>
                    <b>We promote biodiversity</b>
                  </p> 
                  <p>

                       Bees play a critical role in ecological balance and restoration. 
                       At Nyakabingo mine, we have launched a community beekeeping project 
                       in our rehabilitated forests, a sustainable project that provides 
                       livelihood opportunities for local community members. This project 
                       has been and will continue to be a significant income generation mechanism 
                       for the community. 
                  </p>
                </div>
              </div>

             </div>
           </div>

           {/* Community Section */}
           <div className="community-section">
              <div className="row">
              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Community-icon.svg" customClass={'sustainabilty-icon'}/>

                <div className="col-md-6 community-content">
                <div className="content-wrapper">
                    <h2 className="section-header009">
                     Community
                    </h2>
                    <h5 className="min-header">We are a part of the energy revolution</h5>
                    <p>
                      We take our values seriously and hold ourselves accountable to the 
                      communities where we operate and the greater good of the planet. 
                      We support the UN’s mission to ensure that by 2030 all people enjoy 
                      peace and prosperity and do our part to contribute to the Global 
                      Sustainability Development Goals.
                    </p>
                    <p>Through our ongoing commitment, we have helped to uplift communities by</p>

                    <ul className="content-achievement">
                      <li>Providing medical insurance for more than 3,000 residents annually</li>
                      <li>Rehabilitating more than 30km of community roads</li>
                      <li>Helping the communities’ most vulnerable families in personalised ways,
                         including construction and renovation of dilapidated homes, distributing 
                         fruit tree seeds and creating community vegetable gardens to address childhood
                          malnutrition and growth stunting, and sponsoring school fees and supplies for
                           students.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 community-bg-section">
                 
                </div>
              </div>
           </div>
            





           <SiteFooter />
        </>
    )
}

export default SustainabilityPage