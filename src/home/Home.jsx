import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Event from "../event/Event";
import Contact from "../contact/Contact";
import SplitText from "../components/SplitText";
import Technical from "../event/Technical";
import { BsCalendarEventFill } from "react-icons/bs"; // Better calendar icon
import { FaPiggyBank } from "react-icons/fa";
import { RetroGrid } from "../components/magicui/retro-grid";
import { motion, AnimatePresence } from "framer-motion";
import { MorphingTextDemo } from "./morph";
import { SparklesCore } from "../components/ui/sparkles";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Vortex } from "../components/ui/vortex";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { HyperText } from "@/components/magicui/hyper-text";
import { SpinningText } from "@/components/magicui/spinning-text";
import { MorphingText } from "@/components/magicui/morphing-text";
import { Meteors } from "@/components/magicui/meteors";
import CYLogo from '../assets/CY.png'; // Adjust path as needed


function Home({ onNavigate }) {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [displayText, setDisplayText] = useState("CYBERNAUTIX'25");

  const texts = [
    "CYBERNAUTIX",
    "சைபர்நாட்டிக்ஸ்",  // Tamil
    "సైబర్నాటిక్స్",   // Telugu
    "ಸೈಬರ್ನಾಟಿಕ್ಸ್"    // Kannada
  ];

  useEffect(() => {
    // Set target date to March 11, 2025 at 00:00:00 IST
    const targetDate = new Date("2025-03-17T00:00:00+05:30");

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
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    const interval = setInterval(() => {
      setDisplayText((prevText) => {
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
    // Use the custom navigation handler if available, else fallback
    if (onNavigate) {
      onNavigate("/register");
    } else {
      navigate("/register");
    }
  };
  const handleRulesClick = () => {
    // Use the custom navigation handler if available, else fallback
    if (onNavigate) {
      onNavigate("/generalnorms");
    } else {
      navigate("/generalnorms");
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img 
        src={CYLogo}
        alt="CY Logo"
        className="absolute left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 top-1/2 -translate-y-1/2 
               h-[80vh] lg:h-[120vh] w-auto max-w-[90vw] lg:max-w-none opacity-20 grayscale z-0 pointer-events-none 
               transition-all duration-300"
        style={{
          maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 90%)',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 90%)'
        }}
      />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <Meteors number={20} />
      </div>
      <div className="bg-black">
        <RetroGrid className="absolute top-0 left-0 w-full h-full opacity-20" />
      </div>
      
      <div className="home-container relative z-10 min-h-screen pb-24 md:pb-0">
        <div className="details w-full max-w-[1440px] mx-auto px-4 md:px-0">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 pt-20 md:pt-0">
            <motion.div className="flex-1 w-full lg:w-auto">
              {/* College Info Section */}
              <motion.div className="text-center lg:text-left space-y-2 mb-8">
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light tracking-wider">
                  R.M.K. ENGINEERING COLLEGE
                </h1>
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 font-light tracking-wider">
                  DEPARTMENT OF INFORMATION TECHNOLOGY
                </h2>
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg text-white/60 italic">
                  Presents
                </h3>
              </motion.div>

              {/* Title Section */}
              <div className="flex flex-col w-full mt-8 lg:mt-0 relative">
                <Vortex
                  baseHue={120}
                  rangeHue={40}
                  rangeSpeed={0.7}
                  baseRadius={1}
                  particleCount={500}
                  backgroundColor="transparent"
                  className="w-full h-full"
                >
                  <div className="text-6xl sm:text-5xl md:text-6xl lg:text-8xl lg:px-4 font-bold lg:tracking-widest font-mono text-[#00FF9F] inline-block relative text-center">
                    {/* Mobile View */}
                    <div className="block lg:hidden text-4xl w-full">
                      <div className="flex flex-col items-center w-full">
                        <div className="flex justify-center w-full">
                          {/* Wrap the text in a container with fixed width */}
                          <div className="inline-flex justify-center space-x-1">
                            {"CYBERNAUTIX".split("").map((char, index) => (
                              <span 
                                key={index}
                                className="inline-block"
                                style={{ 
                                  transform: `translateY(${
                                    Math.sin((index / 5) * Math.PI / 1.5) * 4
                                  }px)`
                                }}
                              >
                                {char}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-3xl mt-2 font-extralight italic">
                          2025
                        </div>
                      </div>
                    </div>
                    
                    {/* Desktop View */}
                    <div className="hidden lg:block">
                      <MorphingText 
                        texts={texts}
                        className="!text-[#00FF9F] !font-mono !text-6xl sm:!text-5xl md:!text-6xl lg:!text-8xl"
                      />
                      <div className="text-5xl lg:mt-4 sm:text-5xl md:text-6xl lg:text-8xl font-extralight italic text-[#00FF9F] w-full sm:text-center lg:text-right">
                        2025
                      </div>
                    </div>
                  </div>
                </Vortex>
              </div>

              {/* Buttons Section */}
              <motion.div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8 lg:mt-12">
                <button 
                  className="w-full sm:w-auto relative group bg-transparent !border-2 !border-[#00FF9F] hover:bg-[#00FF9F]/10 text-[#00FF9F] px-8 py-3 transition-all duration-300"
                  onClick={handleRegisterClick}
                >
                  {/* Corner accents */}
                  <span className="absolute top-0 left-0 w-2 h-2 !border-t-2 !border-l-2 !border-[#00FF9F]"></span>
                  <span className="absolute top-0 right-0 w-2 h-2 !border-t-2 !border-r-2 !border-[#00FF9F]"></span>
                  <span className="absolute bottom-0 left-0 w-2 h-2 !border-b-2 !border-l-2 !border-[#00FF9F]"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 !border-b-2 !border-r-2 !border-[#00FF9F]"></span>
                  
                  {/* Glitch effect spans */}
                  <span className="absolute inset-0 block opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-[#00FF9F] blur-[2px]"></span>
                  <span className="absolute inset-0 block opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-[#00FF9F] blur-[4px]"></span>
                  
                  {/* Button text */}
                  <span className="relative font-mono text-lg  tracking-wider">REGISTER NOW</span>
                </button>
                <button 
                  className="w-full sm:w-auto relative group bg-transparent !border-2 !border-[#00FF9F] hover:bg-[#00FF9F]/10 text-[#00FF9F] px-8 py-3 transition-all duration-300"
                  onClick={handleRulesClick}
                >
                  {/* Corner accents */}
                  <span className="absolute top-0 left-0 w-2 h-2 !border-t-2 !border-l-2 !border-[#00FF9F]"></span>
                  <span className="absolute top-0 right-0 w-2 h-2 !border-t-2 !border-r-2 !border-[#00FF9F]"></span>
                  <span className="absolute bottom-0 left-0 w-2 h-2 !border-b-2 !border-l-2 !border-[#00FF9F]"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 !border-b-2 !border-r-2 !border-[#00FF9F]"></span>
                  
                  {/* Glitch effect spans */}
                  <span className="absolute inset-0 block opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-[#00FF9F] blur-[2px]"></span>
                  <span className="absolute inset-0 block opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-[#00FF9F] blur-[4px]"></span>
                  
                  {/* Button text */}
                  <span className="relative font-mono text-lg  tracking-wider">GENERAL NORMS</span>
                </button>
              </motion.div>

              {/* Info Section */}
              <div className="flex flex-col mt-8 text-[#00ff9f] w-full">
                <div className="info-grid">
                  <motion.div
                    className="info-item"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    Win up to ₹2,000
                  </motion.div>
                  <motion.div
                    className="info-item"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    Free Entry
                  </motion.div>
                  <motion.div
                    className="info-item"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    March 17 2025
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Countdown Section */}
            <div className="flex items-center justify-center w-full lg:w-auto pb-20 md:pb-0">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 w-full max-w-md items-center justify-center">
                <div className="countdown-item">
                  <span className="countdown font-mono text-7xl sm:text-6xl md:text-7xl lg:text-8xl text-white/60">
                    <span style={{ "--value": timeLeft.days }}></span>
                  </span>
                  <span className="text-xs sm:text-sm lg:text-md text-white">DAYS</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown font-mono text-7xl sm:text-6xl md:text-7xl lg:text-8xl text-white/40">
                    <span style={{ "--value": timeLeft.hours }}></span>
                  </span>
                  <span className="text-xs sm:text-sm lg:text-md text-white/80">HOURS</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown font-mono text-7xl sm:text-6xl md:text-7xl lg:text-8xl text-white/20">
                    <span style={{ "--value": timeLeft.minutes }}></span>
                  </span>
                  <span className="text-xs sm:text-sm lg:text-md text-white/60">MINUTES</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown font-mono text-7xl sm:text-6xl md:text-7xl lg:text-8xl text-white/10">
                    <span style={{ "--value": timeLeft.seconds }}></span>
                  </span>
                  <span className="text-xs sm:text-sm lg:text-md text-white/40">SECONDS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
