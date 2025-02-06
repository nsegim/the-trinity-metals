import SiteFooter from "../../components/Footer/Footer"
import SiteHeader from "../../components/header/Header"
import ImageGallery from "../../components/ImageGallery"
import './About.css'

const AboutPage = () => {
    return(
        <>
            <SiteHeader />
            {/* Hero section */}
            <div className="about-hero-section">
                <div className="inner-wrapper">
                    <h1 className="heading">About Us</h1>
                </div>
            </div>

            {/* Our History Section */}
            <div className="container history-section-wrapper">
                <div className="row justify-content-between">
                    <div className="col-md-6 image-holder">
                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Histrory-Image.webp" customClass={'history-image'}/>
                        {/* <ImageGallery imageUrl="History-playButton.svg" customClass={'history-play-button'}/> */}
                    </div>
                    <div className="col-md-6 histort-content-holder">
                        <div className="content-holder">
                            <h1 className="section-heading">
                              Our History
                            </h1>
                            <div className="text-content">
                                <p className="fw-bold">
                                Trinity Musha Mines Limited [formerly Piran Rwanda Ltd], Trinity Nyakabingo Mine Limited [formerly Eurotrade
                                 International Ltd], and Rutongo Mines Limited are established as three separate, privately held companies.
                                  They all have a strong track record of mining and exploration of tin, tungsten and/or tantalum in Rwanda 
                                  and are committed to incorporating responsible mining practices into assets previously acquired from the 
                                  Rwandan government.
                                </p>
                                <p>
                                In May 2022, the three companies’ shareholders joined forces to form Trinity Metals Limited (“The Group”) 
                                under equity backing from Techmet, a UK-based private industrial company working to secure the technology
                                 metal supply chain in a world with rapidly increasing demand.  Techmet, Trinity Metals’ majority shareholder, 
                                 works with a number of investment partners including the US Development Finance Corporation (DFC) to fund its 
                                 portfolio. Additional shareholders include Piran Resources, the parent company of Piran Rwanda Limited and the
                                  Rwandan Government, represented by Ngali Holdings Limited. 
                                </p>

                                <p>
                                The consolidation of the three companies led Trinity Metals to its position as a leading mining company and
                                 private sector employer. The board of directors was appointed in May 2022 with representation from the major 
                                 shareholders to oversee the company’s strategy and governance in Rwanda.
                                </p>

                                <p>
                                The three-way alliance, by design, builds upon the strengths of each of the three companies to achieve operational 
                                synergies such as increased production capacity, greater supply chain leverage, improved career growth opportunities 
                                for employees and stronger community and government relations.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Mission and Values */}
            <div className="container our-values-wrapper">
                <div className="row justify-content-between">
                    <div className="col-md-6 our-mission d-flex justify-content-center align-items-center flex-column">
                        <div className="icon-box">
                            <div className="icon d-flex justify-content-center">
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Our_mission-icon.svg" />
                            </div>
                            <div className="icon-box-header">
                                <p className="text-001">Our Mission</p>
                               
                            </div>
                            
                        </div>
                        <div className="icon-box-description d-flex justify-content-center">
                                <p className="text-description text-center">
                                    We are on a mission to produce high-quality metals 
                                    through responsible, eco-conscious operations and business practices
                                </p>
                               
                            </div>
                    </div>
                    <div className="col-md-6 our-vision d-flex justify-content-center align-items-center flex-column">
                        <div className="icon-box">
                            <div className="icon d-flex justify-content-center">
                            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Our_vision-icon.svg" />
                            </div>
                            <div className="icon-box-text">
                                <p className="text-001">Our Vision</p>
                               
                            </div>
                            
                            
                        </div>
                        <div className="icon-box-description  d-flex justify-content-center">
                                <p className="text-description text-center">
                                    We are on a mission to produce high-quality metals 
                                    through responsible, eco-conscious operations and business practices
                                </p>
                               
                        </div>

                    </div>
                </div>

            </div>
            {/* Our Values */}
            <div className="values-section">
                <div className="container our-values-holder">
                    
                    <div className="inner-contentWrapper">
                        <div className="trinity-heading">
                            <h1 className="section-heading0002">
                              Our Values
                            </h1>
                        </div>
                        <div className="grid-wrapper">
                            <div className="the-grid-item">
                                <div className="the-icon-box">
                                    <div className="the-iconbox-icon">
                                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/LightBulb.svg" />
                                    </div>
                                    <div className="iconbox-content-wrapper">
                                        <div className="icon-box-header">
                                            <p>We empower & impact</p>   
                                        </div>
                                        <div className="icon-box-description">
                                            <p>We empower communities by investing 
                                                in programs that develop talent and 
                                                drive local economic growth.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="the-grid-item">
                                <div className="the-icon-box">
                                    <div className="the-iconbox-icon">
                                        <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Watch-icon.svg" />
                                    </div>
                                    <div className="iconbox-content-wrapper">
                                        <div className="icon-box-header">
                                            <p>We do no harm</p>   
                                        </div>
                                        <div className="icon-box-description">
                                            <p>We are committed to safe, ethical,
                                                 and eco-friendly mining, ensuring
                                                  our work benefits communities 
                                                  and the planet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="the-grid-item">
                            <div className="the-icon-box">
                                <div className="the-iconbox-icon">
                                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/User-icon.svg" />
                                </div>
                                <div className="iconbox-content-wrapper">
                                    <div className="icon-box-header">
                                        <p>We set the standard</p>   
                                    </div>
                                    <div className="icon-box-description">
                                        <p>As a leading mining organization, 
                                            we follow international standards
                                             and continuously improve our 
                                             operations.</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="the-grid-item">
                            <div className="the-icon-box">
                                <div className="the-iconbox-icon">
                                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/trophy-icon.svg" />
                                </div>
                                <div className="iconbox-content-wrapper">
                                    <div className="icon-box-header">
                                        <p>We hold ourselves accountable</p>   
                                    </div>
                                    <div className="icon-box-description">
                                        <p>We each uphold our mission, 
                                            follow legislation, self-assess, 
                                            and address issues to stay on track.</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        

                    </div>
               </div>
            </div>
            {/* Our Strategies */}
            <div className="strategies-section d-flex justify-content-center flex-column">
                <div className="inner-container container">
                    <div className="top-content d-flex justify-content-center align-items-center flex-column">
                        <div className="text-heading">
                            <h1>
                            Our Strategies
                            </h1>
                        </div>
                        <div className="text-content-inner">
                            <p>
                            To grow sustainably, we have defined four key pillars with clear
                             outcomes and targets, which we are pursuing equally over the next
                              three years.
                            </p>
                        </div>

                    </div>
                    <div className="grid-container">
                        <div className="the-grid-item">
                            <div className="the-icon-box">
                                <div className="the-iconbox-icon">
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Hammer-icon.svg" customClass={'strategy-icon'}/>
                                </div>
                                <div className="iconbox-content-wrapper">
                                    <div className="icon-box-header">
                                        <p className="text-center">Our Business</p>   
                                    </div>
                                    <div className="icon-box-description">
                                        <p className="text-center">Optimized Business Planning for safe , ethical
                                             , profitable and efficient mining across our business process </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="the-grid-item">
                            <div className="the-icon-box">
                                <div className="the-iconbox-icon">
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/group-icon.svg" customClass={'strategy-icon'}/>
                                </div>
                                <div className="iconbox-content-wrapper">
                                    <div className="icon-box-header">
                                        <p className="text-center">Our People</p>   
                                    </div>
                                    <div className="icon-box-description">
                                        <p className="text-center">Motivated people 
                                            delivering 
                                            results and performing 
                                            to their full potential</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="the-grid-item">
                            <div className="the-icon-box">
                                <div className="the-iconbox-icon">
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/intersection-cion.svg" customClass={'strategy-icon'}/>
                                </div>
                                <div className="iconbox-content-wrapper">
                                    <div className="icon-box-header">
                                        <p className="text-center">Our Relationships</p>   
                                    </div>
                                    <div className="icon-box-description">
                                        <p className="text-center">Relationship management with external 
                                            stakeholders prioritized as an integral part of how we do our business</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="the-grid-item">
                            <div className="the-icon-box">
                                <div className="the-iconbox-icon">
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/qlementine-icons_build-16.svg" customClass={'strategy-icon'}/>
                                </div>
                                <div className="iconbox-content-wrapper">
                                    <div className="icon-box-header">
                                        <p className="text-center">Our Future</p>   
                                    </div>
                                    <div className="icon-box-description">
                                        <p className="text-center">
                                            Pursue Organic and Greenfield Growth 
                                            opportunities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Executive management team */}
            <div className="executive-management-wrapper">
                <div className="container">
                    <div className="header-part">
                        <h1 className="section-heading text-center">
                          Executive Management Team
                        </h1>
                    </div>  
                    <div className="team-members">
                         <div className="team-member-wrapper">
                            <div className="single-team-member">
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Trinity-boss.jpeg" customClass={'team-member-photo'}/>
                                <div className="team-member-details">
                                    <h2 className="member-name">
                                       Peter Geleta
                                    </h2>
                                    <p className="member-post">
                                      Chief Executive Officer
                                    </p>
                                </div>
                            </div>
                         </div>
                         
                       
                        
                    </div> 
                    <div class="more-member-button">
                            <a href="#" class="hover-green">
                                <span>View All Team</span>
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Arrow2.svg"/>
                            </a>
                    </div>
                </div>
            </div>
            {/* Our Products */}
            <div className="container our-products-section">
                <div className="first-container">
                  <div className="header-part">
                     <h1 className="section-heading">
                       Our Products
                     </h1>
                  </div>
                  <div className="description-part">
                      <p className="description-text">
                      The "3Ts"—Tantalum, Tungsten, and Tin—are critical minerals essential most known 
                      for being in electronics, chances are, we are using more products made with these 
                      minerals on a daily basis than we realize. As demand for advanced technologies and
                       renewable energy grows, their strategic importance increases. This makes them vital 
                       for economic and technological development.
                      </p>
                  </div>
                </div>
                <div className="second-container d-flex">
                   <div className="single-product">
                      <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Tin.svg" customClass={'product-image'}/>
                      <div className="product-desc">
                        <div className="product-name">
                            <p>
                              TIN
                            </p>
                        </div>
                        <hr class="custom-divider" />
                        <div className="product-description">
                            <p className="description-text">
                            Primarily used in solder. Demand set to increase with electronics 
                            a main downstream market and developing
                            application in Li-ion batteries
                            </p>
                        </div>
                      </div>
                   </div>
                   <div className="single-product">
                      <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Tantalum.svg" customClass={'product-image'}/>
                      <div className="product-desc">
                        <div className="product-name">
                            <p>
                              TANTALUM
                            </p>
                        </div>
                        <hr class="custom-divider" />

                        
                        <div className="product-description">
                            <p className="description-text">
                            50-70% of tantalum supply is used in the
                            electronics industry (mainly capacitators
                            and semiconductors); other uses in medical
                            industry
                            </p>
                        </div>
                      </div>
                   </div>
                   <div className="single-product">
                      <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Tangusten.svg" customClass={'product-image'}/>
                      <div className="product-desc">
                        <div className="product-name">
                            <p>
                              TUNGSTEN
                            </p>
                        </div>
                        <hr class="custom-divider" />
                        <div className="product-description">
                            <p className="description-text">
                             Used mostly for cemented carbide (industrial cutting material), high-speed
                             steels and super alloys and mill products (e.g.light bulb filaments). Demand reached 10-year high in 2022; most at risk of depletion.

                            </p>
                        </div>
                      </div>
                   </div>

                </div>
            </div>

            <SiteFooter />
        
        </>
    )
}
export default AboutPage