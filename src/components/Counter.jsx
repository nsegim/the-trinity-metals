import { useState, useEffect, useRef } from "react";

const IncrementCounter = function ({ start, end, speed }) {
  const [count, setCount] = useState(start);
  
  const [isInView, setIsInView] = useState(false);

  const counterRef = useRef(null);
  

  // Use IntersectionObserver to detect when the counter is in view
  useEffect(() => {
    const observer = new IntersectionObserver(([entry])=>{
       // Check if the element is in view
       if(entry.isIntersecting){
          setIsInView(true)
       }else{
        setIsInView(false)
       }

    }, {threhold: 0.5})
    
    if(counterRef.current){
        observer.observe(counterRef.current)
    } 

    return () => {
        if(counterRef.current){observer.unobserve(counterRef.current)}
        
    }

  }, [])

  useEffect(() => {
    if (isInView && start < end) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < end) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, speed);

      return () => clearInterval(interval); // Cleanup on unmount or dependency change
    }
  }, [isInView, start, end, speed]); // Re-run when start, end, or speed changes

  return <span ref={counterRef}>{count}</span>;
};

export default IncrementCounter;
