import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Offcanvas.css'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menus from '../menu/Menu';


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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasMenu;