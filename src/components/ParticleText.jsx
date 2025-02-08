import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ParticleText = ({ text, onAnimationComplete, isDispercing }) => {
  const chars = text.split('');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
    disperse: {
      opacity: 0,
      transition: {
        staggerChildren: 0.02,
        when: "afterChildren",
      },
    },
  };

  const charVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    disperse: (i) => ({
      opacity: 0,
      x: Math.random() * 500 * (Math.random() > 0.5 ? 1 : -1),
      y: Math.random() * 500 * (Math.random() > 0.5 ? 1 : -1),
      rotate: Math.random() * 360,
      transition: {
        duration: 1,
        ease: [0.23, 1, 0.32, 1],
      },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isDispercing ? "disperse" : "visible"}
      onAnimationComplete={onAnimationComplete}
      className="flex flex-wrap justify-center items-center text-6xl font-bold text-cyan-400"
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          custom={i}
          className="inline-block"
          style={{ 
            textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
            margin: '0 2px'
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}; 