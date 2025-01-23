import React, { useState } from "react";
import './styles.css'
import ImageGallery from "../ImageGallery";
import Carousel from 'react-bootstrap/Carousel';



const LoopGrid = ({ items, itemsPerPage = 3 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [animationDirection, setAnimationDirection] = useState('');
  const [activeIndex, setActiveIndex] = useState(0)

  // Pagination logic
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

 

  const handleSelected = (selectedIndex) => {
      setActiveIndex(selectedIndex)
     
      for(let i=0; i < totalPages; i++){
        
        if(i == selectedIndex){
          setCurrentPage(i+1);
          

        }
      }  
          
  }

  return (
    <div>
      {/* Bootstrap Carousel */}
      {/* Loop Grid */}
      <Carousel className="article-carousel"
         activeIndex={activeIndex} 
         onSelect={handleSelected} 
         interval={5000} 
         style={{minHeight: "300px", 
                 
                 
                paddingBottom: "60px"}}
        controls={false}        
      >
        
        {[...Array(totalPages)].map((_, index) =>(
             <Carousel.Item style={{minHeight: "300px"}}>
            
             
             <div className= {`grid article`}>
              
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

               
           </Carousel.Item>
        )

        )}
          
         
          
      </Carousel>
 


         


    
    

      
    </div>
  );
};

export default LoopGrid  