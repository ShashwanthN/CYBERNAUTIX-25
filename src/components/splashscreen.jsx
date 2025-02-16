import React from 'react';
import rmkIcon from '../assets/rmk.png';

const SplashScreen = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-[#0a0a0a]">
      {/* Geometric background pattern with green tint */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FF9F12_1px,transparent_1px),linear-gradient(to_bottom,#00FF9F12_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Main content container */}
      <div className="relative flex flex-col items-center p-8 space-y-8 z-10">
        {/* Logo container */}
        <div className="p-4 border-[#00FF9F]/30">
          <img 
            src={rmkIcon} 
            alt="RMK" 
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain filter drop-shadow-[0_0_8px_rgba(0,255,159,0.3)]"
          />
        </div>

        {/* Text content */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#00FF9F] to-[#008F5B]">
            <span className="text-shadow-lg shadow-[#00FF9F]/30">CYBERNAUTIX'25</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#FFFFFF] font-mono tracking-widest">
            A NATIONAL LEVEL SYMPOSIUM
          </p>
        </div>

        {/* Loading indicator */}
        <div className="w-32 sm:w-48 h-1 bg-[#00FF9F]/20 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-[#00FF9F] to-[#006B3C] animate-progress"></div>
        </div>
      </div>

      {/* Edge accents matching home screen */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00FF9F] to-[#006B3C]"></div>
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#00FF9F] to-[#006B3C]"></div>
    </div>
  );
};

export default SplashScreen;
