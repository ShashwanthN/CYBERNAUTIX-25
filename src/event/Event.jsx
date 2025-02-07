'use client';
import React, { useRef } from 'react';
import './Event.css';

const Event = ({ onNavigate }) => {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let requestAnimationFrameId = null;
  let xPercent = 0;
  let currentXPercent = 0;
  const speed = 0.15;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;
    
    if(!requestAnimationFrameId){
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  }

  const animate = () => {
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + (xPercentDelta * speed);

    const firstImagePercent = 66.66 - (currentXPercent * 0.33);
    const secondImagePercent = 33.33 + (currentXPercent * 0.33);

    if(firstImage.current && secondImage.current) {
      firstImage.current.style.width = `${firstImagePercent}%`;
      secondImage.current.style.width = `${secondImagePercent}%`;
    }

    if(Math.round(xPercent) === Math.round(currentXPercent)){
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  }

  const handleTechnicalClick = () => {
    onNavigate('/tech');
  }

  const handleNonTechnicalClick = () => {
    onNavigate('/nontech');
  }

  return (
    <div className="ev-main-container">
      <div className="ev-main-wrapper" onMouseMove={manageMouseMove}>
        <div 
          ref={firstImage} 
          className="event-main-section"
          onClick={handleTechnicalClick}
          style={{ cursor: 'pointer' }}
        >
          <h2 className="ev-main-title">Technical Events</h2>
          <div className="stretchy-wrapper">
            <img 
              src="https://thumbs.dreamstime.com/b/anatomy-human-body-robot-digital-circuit-technology-ai-generated-anatomy-human-body-robot-digital-circuit-technology-ai-generated-293132183.jpg"
              alt="Technical Events"
              className="event-banner"
            />
          </div>
        </div>

        <div 
          ref={secondImage} 
          className="event-main-section"
          onClick={handleNonTechnicalClick}
          style={{ cursor: 'pointer' }}
        >
          <h2 className="ev-main-title">Surprise Events</h2>
          <div className="stretchy-wrapper">
            <img 
              src="https://img.freepik.com/premium-photo/abstract-technological-background-web-events_943281-123058.jpg"
              alt="Non-Technical Events"
              className="event-banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
