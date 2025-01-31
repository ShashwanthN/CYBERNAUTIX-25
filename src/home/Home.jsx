import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 3 days from now
    const now = new Date();
    const targetDate = new Date(now.getTime() + (20 * 60 * 60 * 60 * 1000));

    const timer = setInterval(() => {
      const currentTime = new Date();
      const difference = targetDate.getTime() - currentTime.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="home-container">
      <div className='details'>
        <h1 className='clg-details'>R.M.K. ENGINEERING COLLEGE</h1>
        <h2 className='clg-details'>DEPARTMENT OF INFORMATION TECHNOLOGY</h2>
        <h3 className='clg-details'>Presents</h3>
        <h1 className='clg-details sympo'>CYBERNAUTIX'25</h1>
        
        <div className="countdown-container">
          <div className="countdown-box">
            <div className="number">{timeLeft.days}</div>
            <div className="label">Days</div>
          </div>
          <div className="countdown-box">
            <div className="number">{timeLeft.hours}</div>
            <div className="label">Hours</div>
          </div>
          <div className="countdown-box">
            <div className="number">{timeLeft.minutes}</div>
            <div className="label">Minutes</div>
          </div>
          <div className="countdown-box">
            <div className="number">{timeLeft.seconds}</div>
            <div className="label">Seconds</div>
          </div>
        </div>
        
        <h5 className='free-entry'>FREE ENTRY</h5>
      </div>
    </div>
  );
}

export default Home;
