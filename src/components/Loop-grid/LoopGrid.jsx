import React, { useState } from "react";
import './styles.css'
import ImageGallery from "../ImageGallery";


const LoopGrid = ({ items, itemsPerPage = 3 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  // Handlers
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      {/* Loop Grid */}
      <div className="grid article">
        {currentItems.map((item, index) => (
          <div className="grid-item" key={index}>
            <img src={item.featuredImage} alt={item.title} className="featured-image"/>

            
            <p className="article_date">{item.dateDisplay}</p>

            <div className="rt-holder">
              <h2 className="article-title">{item.title}</h2>
              <div className="card-bottom-elements">
                <div className="category-holder">
                  <ImageGallery imageName="Category-Icon.svg" customClass="category-icon"/>
                    <span className="category">{item.category}</span>
                </div>
                <div className="read-more-btn-wrapper">
                  <a href="#" className="read-more-btn">
                    <span>Read more</span>
                  </a>
                </div>
              </div>
            </div>
            
           
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="prev-btn" onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button className="next-btn" onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LoopGrid  