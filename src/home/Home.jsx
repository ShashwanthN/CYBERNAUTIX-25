import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Event from '../event/Event';
import Contact from '../contact/Contact';
import SplitText from '../components/SplitText';
import Technical from '../event/Technical';


function Home() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [displayText, setDisplayText] = useState("CYBERNAUTIX'25");

  const texts = [
    "CYBERNAUTIX'25",
    "சைபர்நாட்டிக்ஸ்'25", // Tamil
    "సైబర్నాటిక్స్'25"  // Telugu
  ];

  useEffect(() => {
    // Set target date to March 11, 2025 at 00:00:00 IST
    const targetDate = new Date('2025-03-17T00:00:00+05:30');

    const timer = setInterval(() => {
      const currentTime = new Date();
      const difference = targetDate.getTime() - currentTime.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        // Set all values to 0 when the target date has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    const interval = setInterval(() => {
      setDisplayText(prevText => {
        const currentIndex = texts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 3000); // Change text every 3 seconds

    // Cleanup interval on component unmount
    return () => {
      clearInterval(timer);
      clearInterval(interval);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div>
    <div className="home-container">
      <div className='details'>
        <h1 className='clg-details'>R.M.K. ENGINEERING COLLEGE</h1>
        <h2 className='clg-details'>DEPARTMENT OF INFORMATION TECHNOLOGY</h2>
        <h3 className='clg-details'>Presents</h3>
        <SplitText text={displayText} className='sympo' />
        
        <div className="countdown-container smaller-countdown">
          <div className="countdown-box smaller-box">
            <div className="number smaller-number">{timeLeft.days}</div>
            <div className="label smaller-label">Days</div>
          </div>
          <div className="countdown-box smaller-box">
            <div className="number smaller-number">{timeLeft.hours}</div>
            <div className="label smaller-label">Hours</div>
          </div>
          <div className="countdown-box smaller-box">
            <div className="number smaller-number">{timeLeft.minutes}</div>
            <div className="label smaller-label">Minutes</div>
          </div>
          <div className="countdown-box smaller-box">
            <div className="number smaller-number">{timeLeft.seconds}</div>
            <div className="label smaller-label">Seconds</div>
          </div>
        </div>
        <h3 className='ends'>Registration Ends in </h3>
      </div>
    </div>
    </div>
    
  );
}

export default Home;
