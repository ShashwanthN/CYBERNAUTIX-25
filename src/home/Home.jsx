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

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <Meteors number={20} />
              </div>
      <div className="bg-black">
        <RetroGrid className="absolute top-0 left-0 w-full h-full opacity-20" />
      </div>
      {/* <SpinningText 
        reverse 
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 z-0"
        duration={20}
        radius={40}
        fontSize={2.5}
      >
        learn more • earn more • grow more •
      </SpinningText> */}
      
      <div className="home-container relative z-10 flex flex-col justify-center items-center h-screen">
        <div className="details w-full max-w-[1440px] h-full min-h-0">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 h-full min-h-0">
            <motion.div
              className="flex-1 w-full lg:w-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col">
                <motion.div
                  className="lg:text-left space-y-1 sm:space-y-2 mb-4 sm:mb-8 px-4 lg:ml-2 sm:text-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light tracking-wider">
                    R.M.K. ENGINEERING COLLEGE
                  </h1>
                  <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 font-light tracking-wider">
                    DEPARTMENT OF INFORMATION TECHNOLOGY
                  </h2>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg text-white/60 italic">Presents</h3>
                </motion.div>

                <div className="flex flex-col w-full mt-20 lg:mt-0 md:mt-0 relative">
                  <Vortex
                    baseHue={120}
                    rangeHue={40}
                    rangeSpeed={0.7}
                    baseRadius={1}
                    particleCount={500}
                    backgroundColor="transparent"
                    className="w-full h-full"
                  >
                    <div className="text-6xl sm:text-5xl md:text-6xl lg:text-8xl lg:px-4 font-bold lg:tracking-widest font-mono text-[#00FF9F] inline-block relative text-center lg:text-left">
                      {/* Mobile View */}
                      <div className="block lg:hidden">
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
                      
                      {/* Desktop View */}
                      <div className="hidden lg:block">
                        <MorphingText 
                          texts={texts}
                          className="!text-[#00FF9F] !font-mono !text-6xl sm:!text-5xl md:!text-6xl lg:!text-8xl"
                        />
                      </div>
                      <div className="text-5xl lg:mt-4 sm:text-5xl md:text-6xl lg:text-8xl font-extralight italic text-[#00FF9F] w-full sm:text-center lg:text-right">
                        2025
                      </div>
                    </div>
                  </Vortex>
                </div>
                
                <motion.div
                  className="px-4 mt-12 sm:mt-16 md:mt-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <button 
                    className="relative group bg-transparent border-2 border-[#00FF9F] hover:bg-[#00FF9F]/10 text-[#00FF9F] px-8 py-3 transition-all duration-300"
                    onClick={handleRegisterClick}
                  >
                    {/* Corner accents */}
                    <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00FF9F]"></span>
                    <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00FF9F]"></span>
                    <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#00FF9F]"></span>
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00FF9F]"></span>
                    
                    {/* Glitch effect spans */}
                    <span className="absolute inset-0 block opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-[#00FF9F] blur-[2px]"></span>
                    <span className="absolute inset-0 block opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-[#00FF9F] blur-[4px]"></span>
                    
                    {/* Button text */}
                    <span className="relative font-mono text-lg  tracking-wider">REGISTER NOW</span>
                  </button>
                  <div className=" flex flex-col mt-4 text-[#00ff9f] w-full">
                    <div className="flex justify-between pr-20 w-full">
                      <motion.div
                        className="pt-20 text-xl sm:text-2xl text-[#00ff9f] text-center lg:text-left"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                      >
                        {Array.from("Free Entry").map((char, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.1,
                              delay: 1 + index * 0.1,
                              ease: "easeOut"
                            }}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </motion.div>
                      <motion.div
                        className="pt-20 text-xl sm:text-2xl text-center lg:text-right"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2 }}
                      >
                        {Array.from("March 17 2025").map((char, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.1,
                              delay: 2 + index * 0.1,
                              ease: "easeOut"
                            }}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                
              </div>
              
            </motion.div>

            <div className="flex items-center justify-center sm:w-3/4 lg:w-auto lg:px-4 h-full">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 w-full items-center justify-center">
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
        
        {/* <VelocityScroll className="fixed bottom-0 left-0 right-0 pb-2 z-20">
          <span className="text-white text-lg md:text-2xl">March 17 2025 - </span>
          <span className="text-white text-lg md:text-2xl">Free Entry</span>
        </VelocityScroll> */}
      </div>
    </div>
  );
}

export default Home;
