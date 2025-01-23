import "./header.css";
import ImageGallery from "../ImageGallery";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useState } from "react";
const SiteHeader = () => {
  const [show, setShow] = useState(null)
  const onHoverListener = (dropDown)=>(setShow(dropDown))
  const onRemovePointer = ()=>(setShow(false))

  return (
    <div className="header">
      <div className="top-bar">
        <div className="container basic-info-wrapper">
          <div className="contact-info">
            <a href="#">
              <ImageGallery imageName="phone-icon.svg" />
              <span>+250 791 959 034</span>
            </a>
            <a href="#">
              <ImageGallery imageName="envelope.svg" />
              <span>Email: info.rw@trinity-metals.com</span>
            </a>
          </div>
          <div className="social-links">
            <a href="#" className="careerBtn">
              Careers
            </a>
            <ul className="social-icons">
              <li>
                <a href="">
                  <ImageGallery imageName="X-icon.svg" />
                </a>
              </li>
              <li>
                <a href="">
                  <ImageGallery imageName="IG-icon.svg" />
                </a>
              </li>
              <li>
                <a href="">
                  <ImageGallery imageName="Youtube-icon.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container the_header">
        <div className="site-logo">
          <Link to="/">
            <ImageGallery
              imageName="site-logo1.png"
              customClass="site-image-logo"
            />
          </Link>
        </div>
        <div className="navigation-menu">
          <Navbar expand="lg" className="bg-body-light">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>

                <NavDropdown 
                  title="About Us" 
                  id="basic-nav-dropdown" 
                  show={ show === "AboutUs"} 
                  onMouseEnter={()=> onHoverListener("AboutUs")} 
                  onMouseLeave={onRemovePointer}

                >
                  <NavDropdown.Item href="#action/3.1">
                    Our History
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.1">
                    Our Values
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.1">
                    Our Strategy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Our Products
                  </NavDropdown.Item>
                    
                  <NavDropdown.Item href="#action/3.1">
                    Our Leadership
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown 
                  title="Our Projects" 
                  id="basic-nav-dropdown"
                  show={ show === "OurProjects"} 
                  onMouseEnter={()=> onHoverListener("OurProjects")} 
                  onMouseLeave={onRemovePointer}
                >
                  <NavDropdown.Item href="#action/3.1">
                    Rutongo
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.1">
                    Nyakabingo
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.1">Musha</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="">Sustainability</Nav.Link>

                <NavDropdown
                  title="Investors Relations"
                  id="basic-nav-dropdown"
                  show={ show === "Investors"} 
                  onMouseEnter={()=> onHoverListener("Investors")} 
                  onMouseLeave={onRemovePointer}
                >
                  <NavDropdown.Item href="#action/3.1">
                    Reports
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.1">
                    Latest News
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.1">
                    Photos and Videos
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="contact-btn">
          <a href="#">
            <span>Contact Us</span>
            <ImageGallery imageName="contact-us-icon.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SiteHeader;
