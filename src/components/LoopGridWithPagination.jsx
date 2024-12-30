// // LoopGridWithPagination.js
// import React, { useState } from "react";

// const LoopGridWithPagination = ({ data, TemplateComponent, itemsPerPage = 6 }) => {
//   // State to track the current page
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   // Get data for the current page
//   const currentPageData = data.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   // Change the page
//   const changePage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div>
//       {/* Render the templates for the current page */}
//       <div className="grid">
//         {currentPageData.map((item, index) => (
//           <TemplateComponent key={index} {...item} />
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="pagination">
//         <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
//           Previous
//         </button>

//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             className={currentPage === index + 1 ? "active" : ""}
//             onClick={() => changePage(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}

//         <button
//           onClick={() => changePage(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoopGridWithPagination;
