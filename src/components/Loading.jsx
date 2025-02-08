'use client';
import React, { useState, useEffect } from 'react';
// import './Loading.css';
import { MorphingText } from './magicui/morphing-text';
import { ParticleText } from './ParticleText';
import { motion, AnimatePresence } from 'framer-motion';

function Loading() {
  const [showMorphing, setShowMorphing] = useState(true);
  const [showParticles, setShowParticles] = useState(false);
  const [isDispercing, setIsDispercing] = useState(false);

  const texts = [
    "CYBERNAUTIX\n'25", // Default
    "🅲🆈🅱🅴🆁🅽🅰🆄🆃🅸🆇\n'25", // Blocky 3D
    // "ＣＹＢＥＲＮＡＵＴＩＸ\n'２５", // Fullwidth
    "𝗖𝗬𝗕𝗘𝗥𝗡𝗔𝗨𝗧𝗜𝗫\n'𝟮𝟱", // Shadow Bold
    "𝒞𝒴𝐵𝐸𝑅𝒩𝒜𝒰𝒯𝐼𝒳\n'𝟤𝟧", // Cursive 3D
    "ⒸⓎⒷⒺⓇⓃⒶⓊⓉⒾⓍ\n'②⑤", // Bubble Text
    "𝕮𝖄𝕭𝕰𝕽𝕹𝕬𝖀𝕿𝕴𝕏\n'𝟚𝟝" // Fraktur
  ];

  useEffect(() => {
    // Start the dispersion effect after morphing animation
    const timer = setTimeout(() => {
      setShowMorphing(false);
      setShowParticles(true);
      
      // Start dispersion after a brief pause
      setTimeout(() => {
        setIsDispercing(true);
      }, 1000);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleDispersionComplete = () => {
    // This will trigger the final removal of the loading screen
    setShowParticles(false);
  };

  return (
    <AnimatePresence>
      {(showMorphing || showParticles) && (
        <motion.div 
          className="fixed inset-0 w-full h-full bg-black flex items-center justify-center z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full px-4">
            {showMorphing && (
              <MorphingText
                texts={texts}
                className="font-poppins items-center justify-center flex font-bold italic text-white/90 hover:text-white transition-colors text-center"
              />
            )}
            {showParticles && (
              <ParticleText 
                text="CYBERNAUTIX'25"
                isDispercing={isDispercing}
                onAnimationComplete={handleDispersionComplete}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loading; 