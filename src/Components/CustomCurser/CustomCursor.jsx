import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const outlinePos = { x: mouse.x, y: mouse.y };
    let rafId;

    const moveCursor = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const render = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      }

      // Ease the outline toward the pointer for a smooth trailing effect
      outlinePos.x += (mouse.x - outlinePos.x) * 0.2;
      outlinePos.y += (mouse.y - outlinePos.y) * 0.2;
      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${outlinePos.x}px, ${outlinePos.y}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    rafId = requestAnimationFrame(render);

    // Event delegation so dynamically added elements (modals, cards) work
    // too, without attaching a listener to every interactive node.
    const HOVER_SELECTOR = 'a, button, [tabindex]:not([tabindex="-1"])';
    const TEXT_SELECTOR = 'input, textarea';

    const setState = (className, on) => {
      outlineRef.current?.classList.toggle(className, on);
      dotRef.current?.classList.toggle(className, on);
    };

    const handleOver = (e) => {
      if (e.target.closest(TEXT_SELECTOR)) {
        setState('text', true);
      } else if (e.target.closest(HOVER_SELECTOR)) {
        setState('hover', true);
      }
    };

    const handleOut = (e) => {
      if (e.target.closest(TEXT_SELECTOR)) {
        setState('text', false);
      } else if (e.target.closest(HOVER_SELECTOR)) {
        setState('hover', false);
      }
    };

    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      cancelAnimationFrame(rafId);
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
