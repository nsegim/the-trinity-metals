import { Form, Button } from "react-bootstrap";
import "./footer.css";
import { Link } from "react-router-dom";
import ImageGallery from "../ImageGallery";
const SiteFooter = () => {
  return (
    <>
      <div className="footer">
        <div className="map-section">
           <iframe width="100%" height="500.88" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500.88&amp;hl=en&amp;q=+(Trinity%20Metals)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
        </div>
        <div className="footer-content-wrapper">
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
                  Submit
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
    </>
  );
};

export default SiteFooter;
