// import React, { useEffect } from 'react';
// import moment from 'moment/min/moment-with-locales';

// import DOMPurify from 'dompurify';
// import ImageGallery from "../components/ImageGallery";
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';


// const ReUsablePost = ({ item, categories, postImages }) => {
//   // Sanitize and render HTML content
//   const reRenderContent = (content) => {
//     const safeContent = DOMPurify.sanitize(content);
//     return <div className="article-content" dangerouslySetInnerHTML={{ __html: safeContent }} />;
//   };
  
//   const { t, i18n } = useTranslation()
  

//   return (
//     <div className="grid-item">
//       <img
//         src={postImages[item.id] ? `${postImages[item.id]}.webp` : 'https://contents.trinity-metals.com/wp-content/uploads/2025/02/animated_loader_gif_n6b5x0.gif'}
//         alt=""
//         className="featured-image"
//       />
//       {/* <p className="article_date">{moment(item?.date).format(t("home.date_format"))}</p> */}
//       <p className="article_date">
//        {moment(item?.date).locale(moment.locale()).format(t("home.date_format"))}
//      </p>

//       <div className="rt-holder">
//         <h2 className="article-title">
//           {reRenderContent(item?.title?.rendered)}
//         </h2>
//         <div className="card-bottom-elements">
//           <div className="category-holder">
//             <ImageGallery
//               imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Category-Icon.svg"
//               customClass="category-icon"
//             />
//             <span className="category">
//               {categories[item.id] ? categories[item.id] : 'Loading...'}
//             </span>
//           </div>
//           <div className="read-more-btn-wrapper">
//             {
//               item?.content?.rendered !== "" ? <Link to={`/single-post/${item.id}`}>
//                  <span>{t("home.read-more-button")}</span>
//               </Link> : <a
//               href={item?.meta?._links_to}
//               target={item?.content?.rendered !== "" ? "" : '_blank'}
//               className="read-more-btn"
//             >
//               <span>{t("home.read-more-button")}</span>
//             </a>
//             }
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReUsablePost;



import { useState, useMemo } from 'react';
import DOMPurify from 'dompurify';
import ImageGallery from "../components/ImageGallery";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Simple date formatter to replace moment.js
const formatDate = (dateString, locale) => {
  const date = new Date(dateString);
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };
  return date.toLocaleDateString(locale, options);
};

// Base64 placeholder image (tiny transparent PNG)
const PLACEHOLDER_IMAGE = 'https://contents.trinity-metals.com/wp-content/uploads/2025/02/animated_loader_gif_n6b5x0.gif';

const ReUsablePost = ({ item, categories, postImages }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { t, i18n } = useTranslation();

  // Memoized sanitized content
  const sanitizedTitle = useMemo(() => {
    if (!item?.title?.rendered) return '';
    const safeContent = DOMPurify.sanitize(item.title.rendered);
    return safeContent;
  }, [item?.title?.rendered]);

  // Memoized image URL
  const imageUrl = useMemo(() => {
    if (!postImages[item.id] || imageError) {
      return PLACEHOLDER_IMAGE;
    }
    return postImages[item.id];
  }, [postImages, item.id, imageError]);

  // Memoized category
  const categoryName = useMemo(() => {
    return categories[item.id] || t("common.loading", "Loading...");
  }, [categories, item.id, t]);

  // Memoized date
  const formattedDate = useMemo(() => {
    return item?.date ? formatDate(item.date, i18n.language) : '';
  }, [item?.date, i18n.language]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const renderContent = (content) => {
    return <div className="article-content" dangerouslySetInnerHTML={{ __html: content }} />;
  };

  const isExternalLink = item?.content?.rendered === "" && item?.meta?._links_to;

  return (
    <div className="grid-item">
      <div className="image-container">
        <img
          src={imageUrl}
          alt={item?.title?.rendered || ''}
          className={`featured-image ${imageLoaded ? 'loaded' : 'loading'}`}
          loading="lazy"
          decoding="async"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {!imageLoaded && !imageError && (
          <div className="image-skeleton"></div>
        )}
      </div>
      
      <p className="article_date">{formattedDate}</p>

      <div className="rt-holder">
        <h2 className="article-title">
          {renderContent(sanitizedTitle)}
        </h2>
        <div className="card-bottom-elements">
          <div className="category-holder">
            <ImageGallery
              imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Category-Icon.svg"
              customClass="category-icon"
            />
            <span className="category">
              {categoryName}
            </span>
          </div>
          <div className="read-more-btn-wrapper">
            {!isExternalLink ? (
              <Link to={`/single-post/${item.id}`}>
                <span>{t("home.read-more-button")}</span>
              </Link>
            ) : (
              <a
                href={item?.meta?._links_to}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more-btn"
              >
                <span>{t("home.read-more-button")}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReUsablePost;