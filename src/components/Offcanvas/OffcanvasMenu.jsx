import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Offcanvas.css'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menus from '../menu/Menu';
import ImageGallery from '../ImageGallery';
import { Link } from 'react-router-dom';

const OffcanvasMenu = () => {
  const [show, setShow] = useState(false);
  const [alignment, setAlignment] = useState('right'); // Default alignment
   
  const isMediumScreen = useMediaQuery('(max-width:1024px)');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };


  return (
    <>
      <div className="offCanvas-wrapper">
          <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          className='ToggleButton'
          style={{ display: `${isMediumScreen ? 'block' : 'none'}` }}
        >
          
          <ToggleButton  value="right" aria-label="right aligned" onClick={handleShow}>
            <FormatAlignRightIcon />
          </ToggleButton>
          
        </ToggleButtonGroup>
        


          <Offcanvas variant="primary" show={show} onHide={handleClose} placement='end' >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Menus />
              <div className="basic-info001">
                <div className="site-logo">
                  <Link to="/">
                    <ImageGallery
                      imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/site-logo1.png"
                      customClass="site-image-logo"
                    />
                  </Link>
                </div>
                <div className="contact-info">
                  <a href="#">
                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/phone-icon.svg" />
                    <span>+250 791 959 034</span>
                  </a>
                  <a href="#">
                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/envelope.svg" />
                    <span>Email: info.rw@trinity-metals.com</span>
                  </a>
                </div>

                    <ul className="social-icons">
                               <li>
                                 <a href="">
                                   <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/X-icon.svg" />
                                 </a>
                               </li>
                               <li>
                                 <a href="">
                                   <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/IG-icon.svg" />
                                 </a>
                               </li>
                               <li>
                                 <a href="">
                                   <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Youtube-icon.svg" />
                                 </a>
                               </li>
                     </ul>


                    
                            
              </div>
               
            </Offcanvas.Body>
          </Offcanvas>
      </div>
      
      
     
      
    </>
  );
}

export default OffcanvasMenu;