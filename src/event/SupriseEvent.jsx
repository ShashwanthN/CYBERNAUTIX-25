import React from 'react';
import './SupriseEvent.css';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import confidentialStamp from '../assets/confidential-stamp.png';

const NonTechnical = ({ onNavigate }) => {
  const handleRegisterClick = () => {
    onNavigate('/register');
  };

  const handleWhatsAppClick = () => {
    window.open('https://chat.whatsapp.com/HgdabJPtGxU7lowui2c5Uk', '_blank');
  };

  return (
    <div className="min-h-screen bg-zinc-900 pt-4 px-4 pb-20 md:pt-8 md:px-8 md:pb-32 lg:mt-0 mt-2 relative">
      {/* Caution Tape Decoration */}
      <div className="absolute bottom-10 left-0 w-full h-12 bg-yellow-400 transform -rotate-6 flex items-center justify-center overflow-hidden">
        <div className="text-black font-bold text-xl tracking-wider repeating-pattern whitespace-nowrap overflow-hidden">
          CONFIDENTIAL ⚠️ TOP SECRET ⚠️ CONFIDENTIAL ⚠️ TOP SECRET
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Main Content Container */}
        <div className="bg-zinc-800 rounded-lg p-6 md:p-8 border-2 border-yellow-400 shadow-xl">
          {/* Top Secret Header */}
          <div className="flex flex-col md:flex-row items-center justify-between lg:mb-8">
            <h1 className="text-4xl md:text-6xl font-black text-red-600 lg:mb-4 md:mb-0">
              TOP SECRET
            </h1>
            <div className="flex flex-col md:flex-row items-center lg:gap-4">
              <button 
                onClick={handleRegisterClick}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transform transition-all hover:scale-105 active:scale-95"
              >
                ACCEPT MISSION
              </button>
              <button 
                onClick={handleWhatsAppClick} 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transform transition-all hover:scale-105 active:scale-95"
              >
                <FaWhatsapp className="text-xl" />
                Join with us
              </button>
              <img 
                src={confidentialStamp} 
                alt="Confidential"
                className="w-32 h-32 object-contain opacity-80"
              />
            </div>
          </div>

          {/* Mystery Content */}
          <div className="bg-zinc-700 p-6 rounded-lg mb-8 border border-yellow-400">
            <p className="text-yellow-400 text-lg md:text-xl font-mono mb-4">
              [REDACTED CONTENT]
            </p>
            <p className="text-gray-300 font-mono">
              This is a classified event. Details will be revealed only to registered participants.
              Prepare for an unexpected challenge that will test your creativity and wit.
            </p>
          </div>

          {/* Rules Section */}
          <div className="bg-zinc-700 p-6 rounded-lg border border-yellow-400">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              CLASSIFIED INFORMATION
            </h2>
            <div className="space-y-3 text-gray-300 font-mono">
              <p>• Teams of 2 members only</p>
              <p>• Time limit: 1 hour</p>
              <p>• Original content only - Plagiarism will result in immediate disqualification</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Caution Tape */}
      <div className="absolute top-0 left-0 w-full h-12 bg-yellow-400 transform rotate-6 flex items-center justify-center overflow-hidden">
        <div className="text-black font-bold text-xl tracking-wider repeating-pattern whitespace-nowrap overflow-hidden">
          CONFIDENTIAL ⚠️ TOP SECRET ⚠️ CONFIDENTIAL ⚠️ TOP SECRET
        </div>
      </div>
    </div>
  );
};

export default NonTechnical;
