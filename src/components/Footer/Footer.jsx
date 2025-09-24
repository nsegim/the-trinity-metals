import { Form, Button } from "react-bootstrap";

import "./footer.css";
import { Link, useLocation } from "react-router-dom";
import ImageGallery from "../ImageGallery";
import { useTranslation } from "react-i18next";

const SiteFooter = () => {
  const { t } = useTranslation()
  const location = useLocation()
  return (
    <>
      <div className="footer row gap-0">
        <div className="map-section col-md-6">
           <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1ffI0qI2TP6XhTJ3XH-uY88v6aA-v0YE&ehbc=2E312F&noprof=1" width="100%" height="100%" className="footerMap"></iframe>   
        </div>
        <div className="footer-content-wrapper col-md-6">
          <div className="inner-content-wrapper d-flex flex-column">
              <div className="the-newsLetter">
                <h1 className="footer-heading">{t("footer.subscribe-newsletter")}</h1>

                <div className="formWrapper">
                  <Form className="newsletter-form">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        type="email"
                        placeholder={t("footer.your-email")}
                        className="email-field"
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className="newsletterSubmitBtn"
                    >
                      {t("footer.subscribe")}
                    </Button>
                  </Form>
                </div>
              </div>
              <div className="include-location d-flex">
                <div className="quickLinksWrapper">
                  <h1 className="footer-heading">{t("footer.quick-links")}</h1>

                      <div className="the-links">
                        <div className="links001">
                          <ul className="quick-links">
                            <li>
                              <Link to="/" className="footer-links">{t("header.home")}</Link>
                            </li>
                            <li>
                              <Link to="/about" className="footer-links">{t("header.about-us")}</Link>
                            </li>
                            <li>
                              <Link to="/investor-relations/latest-news" className="footer-links">{t("header.investor.latest-news")}</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="links002">
                          <ul className="quick-links">
                            <li>
                              <Link to="/our-projects" className="footer-links">{t("footer.mining-projects")}</Link>
                            </li>
                            <li>
                              <Link to="/sustainability" className="footer-links">{t("header.sustainability")}</Link>
                            </li>
                            <li>
                              <Link to="/Careers" className="footer-links">{t("header.careers")}</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                </div>
                
                  {  location.pathname === "/our-projects/musha" ? (
                          
                        <div className="mine-site-location">  
                          <h4>{t("home.trinity-musha-mine")}</h4>
                          <ul>
                              <li>
                                {t("footer.mine-projects.Eastern-province")}
                              </li>
                              <li>
                                Musha, Rwamagana
                              </li>
                              <li>
                                P.O Box: 3824, Kigali-Rwanda
                              </li>
                              <li>
                                Musha@trinity-metals.com
                              </li>
                              <li>
                                +250 789 312 308
                              </li>
                         </ul>
                        </div> 
                      ) : location.pathname === "/our-projects/nyakabingo" ?(
                        <div className="mine-site-location">  
                          <h4>{t("home.trinity-Nyakabingo-mine")}</h4>
                          <ul>
                              <li>
                              {t("footer.mine-projects.Northern-province")}
                              </li>
                              <li>
                                Shyorongi, Rulindo
                              </li>
                              <li>
                                P.O Box: 749, Kigali-Rwanda
                              </li>
                              <li>
                                Nyakabingo@trinity-metals.com
                              </li>
                              <li>
                                +250 791 345 409
                              </li>
                         </ul>
                        </div>
                      ): location.pathname === "/our-projects/rutongo" ?(
                        <div className="mine-site-location">  
                          
                          <h4>{t("home.rutongo-mine")}</h4>
                          <ul>
                              <li>
                              {t("footer.mine-projects.Northern-province")}
                              </li>
                              <li>
                                Masoro, Rulindo
                              </li>
                              <li>
                                P.O Box: 6132 Kigali-Rwanda
                              </li>
                              <li>
                                rutongo@trinity-metals.com
                              </li>
                              <li>
                                +250 791 701 498
                              </li>
                         </ul>
                        </div>
                      ): (
                         <div></div>
                      ) 
                    
                  }
                  
                
              </div>
             
            
                  <div className="contact-info-section">
                    <div className="icon-box">
                      <a href="tel:+25091959034">
                         <span>
                           <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Yellow-Phone.svg" />
                         </span>
                      </a>
                     
                      <div className="text-element">
                        <p className="header-element">{t("footer.call-us")}</p>

                        <a href="tel:+250791959034" className="reach-contact">+250 791 959 034</a>
                      </div>
                      
                    </div>
                    <div className="icon-box">
                      <span>
                        <a href="mailto:info.rw@trinity-metals.com">
                          <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Yellow-envelope.svg" />
                        </a>
                      </span>
                      <div className="text-element">
                        <p className="header-element">{t("footer.write-to-us")}</p>

                        <a href="mailto:info.rw@trinity-metals.com" className="reach-contact">
                          info.rw@trinity-metals.com
                        </a>
                      </div>
                    </div>
                  </div>

          </div>
          

         
         
        </div>
      </div>
      <div className="bottom-section">
        <div className="container copyright">
          <p>Copyright © TRINITY METALS 2025  All Right Reserved </p>
           <Link to="/disclaimer" className="footer-links">Disclaimer</Link>
          
        </div>
      </div>
    </>
  );
};

export default SiteFooter;
