


import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = {
    en: { label: "Eng", flag: "https://trinity-metals.com/wp-content/uploads/2025/07/usa-flag-round-circle-icon.svg" },
    kiny: { label: "Kiny", flag: "https://trinity-metals.com/wp-content/uploads/2025/03/rwanda-flag-round-circle-icon.svg" },
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Close dropdown after selection
  };

  const dropdownRef = useRef(null);
  
  useEffect(()=>{
   
    const handleClickOutSide = (event) => {
        if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
            setIsOpen(false)
        }
      

       
    }

            document.addEventListener('mousedown', handleClickOutSide)

            return () =>{
                document.removeEventListener('mousedown', handleClickOutSide)
    }
  }, [])


  return (
    <div className="language-switcher" ref={dropdownRef}>
      {/* Selected Language Button */}
      <div className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
      <img
          src={languages[i18n.language.split("-")[0]]?.flag || languages.en.flag}
          alt={i18n.language}
          className="flag-icon"
        />
        <span>{languages[i18n.language.split("-")[0]]?.label || languages.en.label}</span>

      </div>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="dropdown-switcher" >
          {Object.keys(languages).map((lng) => (
            <li key={lng} onClick={() => changeLanguage(lng)}>
              <img src={languages[lng].flag} alt={lng} className="flag-icon" />
              <span>{languages[lng].label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
