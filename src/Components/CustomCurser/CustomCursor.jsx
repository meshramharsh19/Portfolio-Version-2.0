import React, { useState, useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Ensure refs are current
      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
        
        // Use requestAnimationFrame for the outline to smooth out the lag
        requestAnimationFrame(() => {
          outlineRef.current.style.left = `${clientX}px`;
          outlineRef.current.style.top = `${clientY}px`;
        });
      }
    };

    const addHoverEffect = () => {
      if (outlineRef.current && dotRef.current) {
        outlineRef.current.classList.add('hover');
        dotRef.current.classList.add('hover');
      }
    };

    const removeHoverEffect = () => {
       if (outlineRef.current && dotRef.current) {
        outlineRef.current.classList.remove('hover');
        dotRef.current.classList.remove('hover');
      }
    };
    
    window.addEventListener('mousemove', moveCursor);
    
    // Add hover listeners to all interactive elements
    document.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])')
      .forEach(el => {
        el.addEventListener('mouseover', addHoverEffect);
        el.addEventListener('mouseleave', removeHoverEffect);
      });

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', moveCursor);
       document.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])')
      .forEach(el => {
        el.removeEventListener('mouseover', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={outlineRef} className="cursor-outline"></div>
    </>
  );
};

export default CustomCursor;