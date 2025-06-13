import "./header.css";
import ImageGallery from "../ImageGallery";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menus from "../menu/Menu";
import OffcanvasMenu from "../Offcanvas/OffcanvasMenu";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";


const SiteHeader = () => {
  const [show, setShow] = useState(null)
  const onHoverListener = (dropDown)=>(setShow(dropDown))
  const onRemovePointer = ()=>(setShow(false))

  const { t } = useTranslation()


  return (
    <div className="header">
      <div className="top-bar">
        <div className="container basic-info-wrapper">
          <div className="contact-info">
            <a href="#">
              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/phone-icon.svg" />
              <span>+250 791 959 034</span>
            </a>
            <a href="#">
              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/envelope.svg" />
              <span><span>{t("header.email")}</span>: info.rw@trinity-metals.com</span>
            </a>
          </div>
          
          <div className="right-tools">
             <LanguageSwitcher />
            <div className="social-links">
                <Link to="/Careers" className="careerBtn">
                  {t("header.careers")}
                </Link>
                <ul className="social-icon">
                  <li>
                    <a href="https://x.com/Trinity_Metals">
                      <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/X-icon.svg" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/IG-icon.svg" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Youtube-icon.svg" />
                    </a>
                  </li>
            </ul>
          </div>
          </div>
          
        </div>
      </div>
      <div className="container the_header">
        <div className="site-logo">
          <Link to="/">
            <ImageGallery
              imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/site-logo1.png"
              customClass="site-image-logo"
            />
          </Link>
        </div>
        
        <div className="site-menu-container">
          <Menus />
        </div>
        
        <OffcanvasMenu />

        <div className="contact-btn">
          <Link to="/contact-us" className="hover-green">
            <span>{t("header.contact-us")}</span>
            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/contact-us-icon.svg" />
          </Link>
        </div>

        
        
      </div>
      
    </div>
  );
};

export default SiteHeader;
