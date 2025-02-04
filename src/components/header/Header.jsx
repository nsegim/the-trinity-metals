import "./header.css";
import ImageGallery from "../ImageGallery";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menus from "../menu/Menu";
import OffcanvasMenu from "../Offcanvas/OffcanvasMenu";


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
        
        <div className="site-menu-container">
          <Menus />
        </div>
        
        <OffcanvasMenu />

        <div className="contact-btn">
          <a href="/the-trinity-metals/contact-us" className="hover-green">
            <span>Contact Us</span>
            <ImageGallery imageName="contact-us-icon.svg" />
          </a>
        </div>

        
        
      </div>
      
    </div>
  );
};

export default SiteHeader;
