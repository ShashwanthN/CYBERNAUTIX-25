'use client';
import React, { useRef, useEffect, useState } from 'react';

const Event = ({ onNavigate }) => {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const manageMouseMove = (e) => {
    if (isMobile) return;
    
    const { clientX } = e;
    const xPercent = (clientX / window.innerWidth) * 100;
    
    if (firstImage.current && secondImage.current) {
      const firstImagePercent = 66.66 - (xPercent * 0.33);
      const secondImagePercent = 33.33 + (xPercent * 0.33);
      
      firstImage.current.style.width = `${firstImagePercent}%`;
      secondImage.current.style.width = `${secondImagePercent}%`;
    }
  }

  return (
    <div className="h-[100dvh] w-full  pt-16 md:pt-0 overflow-hidden">
      <div 
        className="flex flex-col md:flex-row h-[calc(100%-4rem)] md:h-full w-full relative"
        onMouseMove={manageMouseMove}
      >
        {/* Technical Events Section */}
        <div 
          ref={firstImage}
          onClick={() => onNavigate('/tech')}
          className="w-full md:w-2/3 h-1/2 md:h-full relative group cursor-pointer transition-all duration-300 hover:opacity-90"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"
            alt="Technical Events"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tighter border-4 border-white p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              TECHNICAL
            </h2>
          </div>
        </div>

        {/* Non-Technical Events Section */}
        <div 
          ref={secondImage}
          onClick={() => onNavigate('/nontech')}
          className="w-full md:w-1/3 h-1/2 md:h-full relative group cursor-pointer transition-all duration-300 hover:opacity-90"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070"
            alt="Non-Technical Events"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tighter border-4 border-white p-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              SURPRISE
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
