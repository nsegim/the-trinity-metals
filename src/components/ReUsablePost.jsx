import React from 'react';
import moment from 'moment';
import DOMPurify from 'dompurify';
import ImageGallery from "../components/ImageGallery";

const ReUsablePost = ({ item, categories, postImages }) => {
  // Sanitize and render HTML content
  const reRenderContent = (content) => {
    const safeContent = DOMPurify.sanitize(content);
    return <div className="article-content" dangerouslySetInnerHTML={{ __html: safeContent }} />;
  };

  return (
    <div className="grid-item">
      <img
        src={postImages[item.id] ? postImages[item.id] : 'https://trinity-metals.com/wp-content/uploads/2025/02/animated_loader_gif_n6b5x0.gif'}
        alt=""
        className="featured-image"
      />
      <p className="article_date">{moment(item?.date).format('DD MMMM, YYYY')}</p>
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
            <a
              href={item?.content?.rendered !== "" ? "#" : item?.meta?._links_to}
              target={item?.content?.rendered !== "" ? "" : '_blank'}
              className="read-more-btn"
            >
              <span>Read more</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReUsablePost;