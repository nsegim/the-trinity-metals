import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({top:0, left: 0, behavior: 'auto'}); // Scroll to the top of the page
  }, [location]); // Run whenever the route changes
  



  return null;
};

export default ScrollToTop;
 