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


function Home() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [displayText, setDisplayText] = useState("CYBERNAUTIX'25");

  const texts = ["CYBERNAUTIX'25"];

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
    navigate("/register"); // Navigate to register page
  };

  return (
    <div className="relative w-full h-full">
      <div className="bg-black">
        <RetroGrid className="absolute  top-0 left-0 w-full h-full opacity-20" />
      </div>
      
      <div className="home-container relative z-10 min-h-screen flex flex-col justify-center">
        <div className="details">
          <div className="flex justify-between items-center w-full gap-8">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col">
                <div className="flex flex-col w-fit relative">
                  <Vortex
                    baseHue={120}
                    rangeHue={40}
                    baseSpeed={0.1}
                    rangeSpeed={2}
                    backgroundColor="transparent"
                    className="w-full h-full"
                  >
                    <div className="text-9xl pl-20 font-['Arial'] text-[#00FF9F] w-full relative ">
                      CYBERNAUTIX
                      <div className="absolute inset-0 w-full h-full">
                        {/* <SparklesCore
                          background="transparent"
                          minSize={0.4}
                          maxSize={1}
                          particleDensity={600}
                          className="w-full h-full"
                          particleColor="rgba(0, 255, 159, 0.5)"
                        /> */}
                      </div>
                    </div>
                  </Vortex>
                  <div className="text-9xl text-[#00FF9F] text-right w-[100%] relative">
                    2025
                    <div className="absolute inset-0 w-full h-full">
                      {/* <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={300}
                        className="w-full h-full"
                        particleColor="rgba(0, 255, 159, 0.5)"
                      /> */}
                    </div>
                  </div>
                </div>
                <motion.div
                  className="text-left space-y-2 mt-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h1 className="text-sm text-white/80 font-light">
                    R.M.K. ENGINEERING COLLEGE
                  </h1>
                  <h2 className="text-xs text-white/70 font-light">
                    DEPARTMENT OF INFORMATION TECHNOLOGY
                  </h2>
                  <h3 className="text-xs text-white/60 italic">Presents</h3>
                </motion.div>
              </div>
            </motion.div>
            <div className="flex items-start pr-4">
              <div className="flex flex-col gap-4 items-start">
                <div className="countdown-item">
                  <span className="countdown font-mono text-[12rem] text-white/60">
                    <span style={{ "--value": timeLeft.days }}></span>
                  </span>
                  <span className="text-2xl text-white">DAYS</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown font-mono text-[12rem] text-white/40">
                    <span style={{ "--value": timeLeft.hours }}></span>
                  </span>
                  <span className="text-2xl text-white/80">HOURS</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown font-mono text-[12rem] text-white/20">
                    <span style={{ "--value": timeLeft.minutes }}></span>
                  </span>
                  <span className="text-2xl text-white/60">MINUTES</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown font-mono text-[12rem] text-white/10">
                    <span style={{ "--value": timeLeft.seconds }}></span>
                  </span>
                  <span className="text-2xl text-white/40">SECONDS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div className="event-info mt-8">
          <div className="info-item">
            <BsCalendarEventFill className="info-icon glow-effect" />
            <h3>17 March 2025</h3>
          </div>
          <div className="info-item">
            <FaPiggyBank className="info-icon glow-effect" />
            <h3>Free Entry</h3>
          </div>
        </div>

        <div className="register-button-container">
          <button className="register-button" onClick={handleRegisterClick}>
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
