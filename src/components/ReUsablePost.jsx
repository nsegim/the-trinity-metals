import React, { useEffect } from 'react';
import moment from 'moment/min/moment-with-locales';

import DOMPurify from 'dompurify';
import ImageGallery from "../components/ImageGallery";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const ReUsablePost = ({ item, categories, postImages }) => {
  // Sanitize and render HTML content
  const reRenderContent = (content) => {
    const safeContent = DOMPurify.sanitize(content);
    return <div className="article-content" dangerouslySetInnerHTML={{ __html: safeContent }} />;
  };
  
  const { t, i18n } = useTranslation()
  
//   useEffect(() => {
//     let lang = i18n.language.split('-')[0];

//     // Map "kiny" to "rw" for Moment.js
//     if (lang === "kiny") {
//         lang = "ur";
//         moment.locale(lang); 
//     }else{
//        lang = "en";
//        return moment.locale(lang); 
//     }

//     // Set Moment.js locale
//     console.log("Moment.js Locale Set To:", moment.locale()); // Debugging log
//     console.log("Moment.js Locale Set To:", moment.locales()); // Debugging log
// }, [i18n.language]);

  
//   useEffect(() => {
//     // const availableLocales = moment.locales(); // Get all available locales
//     // const kinyarwandaLocale = availableLocales.includes("rw") ? "rw is available" : "rw is NOT available";

//     // console.log("Available Moment.js locales:", availableLocales);
//     // console.log("Kinyarwanda locale check:", kinyarwandaLocale);
//     console.log(i18n.languages)
// }, []);

   
  
  return (
    <div className="grid-item">
      <img
        src={postImages[item.id] ? postImages[item.id] : 'https://trinity-metals.com/wp-content/uploads/2025/02/animated_loader_gif_n6b5x0.gif'}
        alt=""
        className="featured-image"
      />
      {/* <p className="article_date">{moment(item?.date).format(t("home.date_format"))}</p> */}
      <p className="article_date">
       {moment(item?.date).locale(moment.locale()).format(t("home.date_format"))}
     </p>

      <div className="rt-holder">
        <h2 className="article-title">
          {reRenderContent(item?.title?.rendered)}
        </h2>
        <div className="card-bottom-elements">
          <div className="category-holder">
            <ImageGallery
              imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Category-Icon.svg"
              customClass="category-icon"
            />
            <span className="category">
              {categories[item.id] ? categories[item.id] : 'Loading...'}
            </span>
          </div>
          <div className="read-more-btn-wrapper">
            {
              item?.content?.rendered !== "" ? <Link to={`/single-post/${item.id}`}>
                 <span>{t("home.read-more-button")}</span>
              </Link> : <a
              href={item?.meta?._links_to}
              target={item?.content?.rendered !== "" ? "" : '_blank'}
              className="read-more-btn"
            >
              <span>{t("home.read-more-button")}</span>
            </a>
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReUsablePost;