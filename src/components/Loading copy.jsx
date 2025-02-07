'use client';
import React, { useRef, useEffect } from 'react';
import './Loading.css';
import rmkIcon from '../assets/rmk.png';

function Loading() {
  const loader = useRef(null);
  const path = useRef(null);
  const initialCurve = 200;
  const duration = 5000;
  let start;

  useEffect(() => {
    // Reset scroll position to top
    window.scrollTo(0, 0);
    
    setPath(initialCurve);
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);
  }, []);

  const animate = (timestamp) => {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;

    if (loader.current) {
      loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";
      const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);
      setPath(newCurve);
    }

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    }
  };

  const easeOutQuad = (time, start, end, duration) => {
    return -end * (time /= duration) * (time - 2) + start;
  };

  const loaderHeight = () => {
    if (loader.current) {
      const loaderBounds = loader.current.getBoundingClientRect();
      return loaderBounds.height;
    }
    return 0;
  };

  const setPath = (curve) => {
    if (path.current) {
      const width = window.innerWidth;
      const height = loaderHeight();
      path.current.setAttributeNS(null, "d",
        `M0 0
        L${width} 0
        L${width} ${height}
        Q${width/2} ${height - curve} 0 ${height}
        L0 0`
      );
    }
  };

  return (
    <div ref={loader} className="loading-screen">
      <svg>
        <path ref={path}></path>
      </svg>
      <div className="loading-content">
        <img src={rmkIcon} alt="RMK Loading icon" />
      </div>
    </div>
  );
}

export default Loading; 