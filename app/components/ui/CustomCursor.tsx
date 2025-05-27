'use client';

import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const outerCursorRef = useRef<HTMLDivElement>(null);
  const innerCursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (outerCursorRef.current && innerCursorRef.current) {
        const target = e.target as HTMLElement;
        if (target.closest('a, button, input[type="button"], input[type="submit"], [role="button"]')) {
          outerCursorRef.current.classList.add('custom-cursor__outer--interactive');
          innerCursorRef.current.classList.add('custom-cursor__inner--interactive');
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (outerCursorRef.current && innerCursorRef.current) {
        const target = e.target as HTMLElement;
        if (target.closest('a, button, input[type="button"], input[type="submit"], [role="button"]')) {
          outerCursorRef.current.classList.remove('custom-cursor__outer--interactive');
          innerCursorRef.current.classList.remove('custom-cursor__inner--interactive');
        }
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor">
      <div ref={outerCursorRef} className="custom-cursor__outer" />
      <div ref={innerCursorRef} className="custom-cursor__inner" />
    </div>
  );
};

export default CustomCursor;