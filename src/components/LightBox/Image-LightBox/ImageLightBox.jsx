
import React, { useState } from "react";
import TheModal from './Modal'
const imageArray = [
  {
    'link': './images/Excavator.jpeg',
    'text': 'Excavator as one of triniy tools'
  },
  {
    'link': './images/trinity-employees.jpeg',
    'text': 'Employees of triniy'
  },
  {
    'link': './images/trinity-employes2.jpeg',
    'text': 'Employees of triniy'
  }
]


const ImageLightBox = (()=>{

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  
  
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  
  };


  const handelRotationRight = () => {
    const totalLength = imageArray.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = imageArray[0].link;
      setClickedImg(newUrl);
      return;
    }

    const newIndex = currentIndex + 1;
    const newUrl = imageArray.filter((item) => {
      return imageArray.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  

  const handelRotationLeft = () => {
    const totalLength = imageArray.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = imageArray[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }

    const newIndex = currentIndex - 1;
    const newUrl = imageArray.filter((item) => {
      return imageArray.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

    return(
          
        <div className="image-grid-wrapper">
            <div className="the-image-grid">
                {imageArray.map((item, index)=> (
                    
                        <div key={index} className={`grid-item${index + 1}`}>
                          <img src={item.link} alt={item.text} className='gallery-image' onClick={() => { handleClick(item, index) }} />
                        </div>
                        
                           
                ))}
            </div>
            <div>
              {clickedImg && (
                 <TheModal 
                 clickedImg = {clickedImg}
                 handelRotationLeft = {handelRotationLeft}
                 handelRotationRight = {handelRotationRight}
                 setClickedImg = {setClickedImg}
               />
              )}
            </div>
            
           

            
        </div>
        


    )
})

export default ImageLightBox