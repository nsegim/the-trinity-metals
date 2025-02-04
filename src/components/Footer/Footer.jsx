import { Form, Button } from "react-bootstrap";

import "./footer.css";
import { Link } from "react-router-dom";
import ImageGallery from "../ImageGallery";
const SiteFooter = () => {
  return (
    <>
      <div className="footer row gap-0">
        <div className="map-section col-md-6">
           <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1ffI0qI2TP6XhTJ3XH-uY88v6aA-v0YE&ehbc=2E312F&noprof=1" width="100%" height="100%" className="footerMap"></iframe>   
        </div>
        <div className="footer-content-wrapper col-md-6">
          <div className="inner-content-wrapper d-flex flex-column">
              <div className="the-newsLetter">
                <h1 className="footer-heading">Subscribe To Our Newsletter</h1>

                <div className="formWrapper">
                  <Form className="newsletter-form">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        type="email"
                        placeholder="Your Email Address"
                        className="email-field"
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className="newsletterSubmitBtn"
                    >
                      Subscribe
                    </Button>
                  </Form>
                </div>
              </div>

              <div className="quickLinksWrapper">
                <h1 className="footer-heading">Quick Links</h1>

                    <div className="the-links">
                      <div className="links001">
                        <ul className="quick-links">
                          <li>
                            <Link className="footer-links">Home</Link>
                          </li>
                          <li>
                            <Link className="footer-links">About Us</Link>
                          </li>
                          <li>
                            <Link className="footer-links">Investors Relations</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="links002">
                        <ul className="quick-links">
                          <li>
                            <Link className="footer-links">Mining Projects</Link>
                          </li>
                          <li>
                            <Link className="footer-links">Sustainability</Link>
                          </li>
                          <li>
                            <Link className="footer-links">Careers</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
            
                  <div className="contact-info-section">
                    <div className="icon-box">
                      <span>
                        <ImageGallery imageName="Yellow-Phone.svg" />
                      </span>
                      <div className="text-element">
                        <p className="header-element">Call us</p>

                        <Link className="reach-contact">+250 919 59034</Link>
                      </div>
                      
                    </div>
                    <div className="icon-box">
                      <span>
                        <Link>
                          <ImageGallery imageName="Yellow-envelope.svg" />
                        </Link>
                      </span>
                      <div className="text-element">
                        <p className="header-element">Write to us</p>

                        <Link className="reach-contact">
                          info.rw@trinity-metals.com
                        </Link>
                      </div>
                    </div>
                  </div>

          </div>
          

         
         
        </div>
      </div>
      <div className="bottom-section">
        <div className="container copyright">
          <p>Copyright © TRINITY METALS 2025  All Right Reserved </p>
        </div>
      </div>
    </>
  );
};

export default SiteFooter;
