import "./LightBox.css"
import React, { useEffect } from 'react';


const LightBox = React.forwardRef((props, ref) => {
  const { clickedPlayButtonLink, handleClosePopup } = props;


 
    return(
        <div className="lightbox" ref={ref}>
                  <span className="close-btn" onClick={handleClosePopup}>×</span>
                  <div className="lightbox-content">
                      <div className="video-container">
                          <iframe id="lightbox-video" src={clickedPlayButtonLink} frameborder="0" allowfullscreen></iframe>
                      </div>
                  </div>
        </div>  
    )
})


export default LightBox

