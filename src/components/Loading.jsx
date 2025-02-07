'use client';
import React from 'react';
// import './Loading.css';
import { MorphingText } from './magicui/morphing-text';

function Loading() {
  const texts = [
    "CYBERNAUTIX\n'25", // Default
    "🅲🆈🅱🅴🆁🅽🅰🆄🆃🅸🆇\n'25", // Blocky 3D
    // "ＣＹＢＥＲＮＡＵＴＩＸ\n'２５", // Fullwidth
    "𝗖𝗬𝗕𝗘𝗥𝗡𝗔𝗨𝗧𝗜𝗫\n'𝟮𝟱", // Shadow Bold
    "𝒞𝒴𝐵𝐸𝑅𝒩𝒜𝒰𝒯𝐼𝒳\n'𝟤𝟧", // Cursive 3D
    "ⒸⓎⒷⒺⓇⓃⒶⓊⓉⒾⓍ\n'②⑤", // Bubble Text
    "𝕮𝖄𝕭𝕰𝕽𝕹𝕬𝖀𝕿𝕴𝕏\n'𝟚𝟝" // Fraktur
  ];

  return (
    <div className="fixed inset-0 w-full h-full bg-black flex items-center justify-center z-50">
      <div className="w-full px-4">
        <MorphingText
          texts={texts}
          className="font-poppins items-center justify-center flex font-bold italic text-white/90 hover:text-white transition-colors text-center"
        />
      </div>
    </div>
  );
}

export default Loading; 