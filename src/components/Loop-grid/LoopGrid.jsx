import React, { useState } from "react";
import './styles.css'


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
      <div className="grid">
        {currentItems.map((item, index) => (
          <div className="grid-item" key={index}>
            <img src={item.featuredImage} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.dateDisplay}</p>
            <span className="category">{item.category}</span>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LoopGrid  