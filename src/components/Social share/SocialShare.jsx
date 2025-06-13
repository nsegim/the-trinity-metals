import React, { useState, useRef, useEffect } from "react";
import "./SocialShare.css";
import ImageGallery from "../ImageGallery";
ImageGallery

// Main social media platforms (always visible)
const socialMediaLinks = [
  { name: "Facebook", url: "https://www.facebook.com/sharer/sharer.php?u=", img: "Background.svg" },
  { name: "Twitter", url: "https://twitter.com/intent/tweet?url=", img: "Background-1.svg" },
  { name: "Pinterest", url: "https://pinterest.com/pin/create/button/?url=", img: "Background-2.svg" },
  { name: "Email", url: "mailto:?subject=Check this out!&body=", img: "Background-3.svg" },
];

// Additional platforms (inside popup)
const morePlatforms = [
  { name: "Reddit", url: "https://www.reddit.com/submit?url=", img: "reddit-icon.svg" },
  { name: "Tumblr", url: "https://www.tumblr.com/widgets/share/tool?canonicalUrl=", img: "tumblr-round-icon.svg" },
  { name: "Messenger", url: "https://www.messenger.com/share?link=", img: "facebook-messenger-icon.svg" },
  { name: "Telegram", url: "https://t.me/share/url?url=", img: "telegram-icon.svg" }
];

const SocialShare = ({ postUrl, postTitle }) => {
    const popupRef = useRef(null)
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          setShowPopup(false);
        }
      };
   

      if (showPopup) {
        document.addEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };

  }, [showPopup]);

  return (
    <div className="social-share-container">
      {/* Main Social Media Icons */}
      <ul className="social-icons">
        {socialMediaLinks.map((platform, index) => (
          <li key={index}>
            <a href={`${platform.url}${encodeURIComponent(postUrl)}`} target="_blank" rel="noopener noreferrer">
              <ImageGallery imageUrl={`https://trinity-metals.com/wp-content/uploads/2025/02/${platform.img}`} />
            </a>
          </li>
        ))}

        {/* Universal Share Button - Opens Popup */}
        <li>
          <button onClick={() => setShowPopup(!showPopup)} className="share-share-button">
            <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Background-4.svg" />
          </button>
        </li>
      </ul>

      {/* Share Popup with More Social Media Options */}
      {showPopup && (
        <div className="share-popup" ref={ popupRef}>
          {morePlatforms.map((platform, index) => (
            <a key={index}
              href={`${platform.url}${encodeURIComponent(postUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageGallery imageUrl={`https://trinity-metals.com/wp-content/uploads/2025/02/${platform.img}`} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialShare;
