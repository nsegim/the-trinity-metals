import SiteFooter from "../../components/Footer/Footer"
import React, { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';

import SiteHeader from "../../components/header/Header"
import ImageGallery from "../../components/ImageGallery"

import './Contact.css'
import { useTranslation } from "react-i18next";
const ContactUs = ()=>{



  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    
    selectInquiry: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data", formData);
  };
  

  const [isVisible, setIsVisible] = useState(false); // Controls visibility

  // Toggle function
  const handleToggle = () => {
    setIsVisible((prev) => !prev);
    console.log(isVisible);
  };

  const dropdownRef = useRef(null);

  
  // Close the dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsVisible(false); // Hide the section if clicked outside
    }
  };

  // Attach event listener for outside clicks
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    const { t } = useTranslation()



    
    return(
        <>
          <SiteHeader />
          
          {/* Hero section */}
         <div className="map-section-on">
           <iframe src="https://www.google.com/maps/d/u/0/embed?mid=100vTr8CO2dKGx-fwP17brI9aZTt8ah4&ehbc=2E312F" width="100%" height="500"></iframe>
         </div>

         {/* Get in touch section */}
         <div className="get-in-touchSection">
           <div className="container">
              <div className="row">
                <div className="col-md-6 left">
                    <div className="get-in-touch">
                        
                    </div>
                    <div className="contact-details">
                        <p>
                        {t("Contact.contact-details")}
                        </p>
                        <p>
                            <ImageGallery imageUrl='https://trinity-metals.com/wp-content/uploads/2025/02/Cell-phone-icon-4.svg' />
                            <span> {t("Contact.contact-tel")}</span>
                        </p>
                    </div> 
                </div>
                <div className="col-md-6 right">
                    <div className="right-header">
                      <h1>{t("Contact.get-in-touch")}</h1>
                    </div>
                    {/* <div className="right-text-element">
                      <p>Complete control over products allows us to ensure our customers receive the best quality prices and service.</p>
                    </div> */}
                    <div className="form-wrapper">
                       {/* The form  */}
                       <form  onSubmit={handleSubmit} className="max-w-md mx-auto p-2 bg-white rounded-lg shadow-md">
                          <div className="field-wrapper">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder="Name"
                                onChange={handleChange}
                                className="w-full p-2 border rounded-md"
                                required
                              />

                              
                
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="Email"
                                onChange={handleChange}
                                className="w-full p-2 border rounded-md"
                                required
                              />
                          </div>
                           
                          <div className="field-wrapper contain-select">
                            <input
                                type="number"
                                name="phone"
                                value={formData.phone}
                                placeholder="Phone"
                                onChange={handleChange}
                                className="w-full p-2 border rounded-md"
                                required
                              />
                            

                            <input
                                type="text"
                                name="selectInquiry"
                                value= ""
                                
                                className="w-full p-2 border rounded-md select-inquiry"
                                
                                placeholder={ formData.selectInquiry || "YOUR INQUIRY ABOUT"}

                                onClick={handleToggle}

                              />

                              { isVisible && (<div  ref={dropdownRef} className={`display-options ${isVisible ? 'visible': ""}`}>
                                <label className="field-title">
                                  YOUR INQUIRY ABOUT
                                  <span>
                                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Icon-1.svg" />
                                  </span>
                                </label>
                              

                                {["General Inquiry", "Media & Partnership Inquiry"].map((type, index) => (
                                    <div key={index} className="mb-3">
                                      <Form.Check
                                        inline
                                        label={type}
                                        name="selectInquiry"
                                        type="radio"
                                        id={`inline-radio-${index + 1}`}
                                        value={type}
                                        checked={formData.selectInquiry === type}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  ))}
                              </div>)}
                              
                            </div>
                          <div className="field-wrapper">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="3"
                                className="w-full p-2 border rounded-md"
                                placeholder={t('Contact.field-wrapper-message-placeholder')}
                              ></textarea>
                          </div>
                           
                          <div className="button-wrapper">
                            <button type="submit" className="w-full text-white p-2 rounded-md form-submit-button">
                              <span className="button-text">{t("Contact.field-wrapper-sendbtn")}</span>
                              <span className="button-icon">
                                <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/contact-us-icon.svg" />

                              </span>
                            </button>
                          </div>
                          
                        </form>
                    </div>
                </div>
              </div>
           </div>
         </div>

         {/* Locations */}
         <div className="container location-wrapper">
          <div className="row">
            <div className="col-md-4">
              <div className="location-name">
                <h4>
                 {t("Contact.location-rutongo-name")}
                </h4>
              </div>
              <div className="location-details">
                <ul>
                  <li>{t("Contact.location-rutongo-details-email")}</li>
                  <li>{t("Contact.location-rutongo-detaisl-address")}</li>
                  <li>{t("Contact.location-rutongo-detaisl-phone")}</li>
                </ul>
          
              </div>
            </div>
            <div className="col-md-4">
            <div className="location-name">
                <h4>
                 {t("Contact.location-nyakabingo-name")}
                </h4>
              </div>
              <div className="location-details">
                <ul>
                  <li>{t("Contact.location-nyakabingo-details-email")}</li>
                  <li>{t("Contact.location-nyakabingo-detaisl-address")}</li>
                  <li>{t("Contact.location-nyakabingo-detaisl-phone")}</li>
                </ul>
          
              </div>
            </div>
            <div className="col-md-4">
            <div className="location-name">
                <h4>
                 {t("Contact.location-musha-name")}
                </h4>
              </div>
              <div className="location-details">
                <ul>
                  <li>{t("Contact.location-musha-details-email")}</li>
                  <li>{t("Contact.location-musha-detaisl-address")}</li>
                  <li>{t("Contact.location-musha-detaisl-phone")}</li>
                </ul>
          
              </div>
            </div>
          </div>
         </div>
          <SiteFooter />
        </>
    )
}

export default ContactUs
