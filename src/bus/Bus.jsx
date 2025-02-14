import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiArrowRight, FiMapPin } from 'react-icons/fi';
import './Bus.css'; // Ensure you have the corresponding CSS file

const BusCard = ({ route }) => (
  <motion.div 
    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0,255,159,0.2)" }}
    className="relative border-2 border-[#00ff9f]/20 bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-4 transition-all"
  >
    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#00ff9f]/10 rounded-lg flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-bold text-[#00ff9f]">#{route.busNumber}</span>
        </div>
      </div>
      <div className="flex-grow">
        <h2 className="text-lg sm:text-xl font-semibold text-white">{route.place}</h2>
        <div className="flex items-center gap-2 mt-1">
          <FiMapPin className="text-[#00ff9f] w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm text-[#00ff9f]/80">Route Details</span>
        </div>
      </div>
      <FiArrowRight className="text-[#00ff9f] w-5 h-5 sm:w-6 sm:h-6 ml-2" />
    </div>

    <div className="space-y-3 relative pl-3 sm:pl-4 border-l-2 border-[#00ff9f]/20">
      {route.stops.split('-').map((stop, index) => {
        const [timeMatch] = stop.match(/\(([^)]+)\)/g) || [];
        const stopText = stop.replace(/\(([^)]+)\)/g, '').trim();
        
        return (
          <div key={index} className="relative flex items-start group">
            <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-[#00ff9f] rounded-full -left-[7px] sm:-left-[9px] top-2 border-2 border-[#00ff9f]/30" />
            <div className="flex-1 ml-3 sm:ml-4">
              <div className="flex flex-wrap sm:flex-nowrap justify-between items-start gap-1">
                <span className="text-xs sm:text-sm font-medium text-white break-words">
                  {stopText}
                </span>
                {timeMatch && (
                  <span className="text-[10px] sm:text-xs text-[#00ff9f]/70 bg-[#00ff9f]/10 px-2 py-1 rounded-md flex-shrink-0">
                    {timeMatch.replace(/[()]/g, '')}
                  </span>
                )}
              </div>
              {index < route.stops.split('-').length - 1 && (
                <div className="h-[1px] bg-[#00ff9f]/10 w-full my-2" />
              )}
            </div>
          </div>
        )
      })}
    </div>
  </motion.div>
);

function Bus() {
  const [searchTerm, setSearchTerm] = useState('');

  const busRoutes = [
    {
      place: "Thiruvanmiyur",
      busNumber: "111",
      stops: "Porur Signal(6:35 AM), Valasarawakkam (6:50 AM), Alwar thiruNagar, Virukambakkam, Avichi school(7:00 AM), Chinmayanagar, Koyambedu Roundana, Thirumangalam (7:15 AM), Rettery(7:20 AM), Vinayagapuram, College (8:00 AM)"
    },
    {
      place: "Tambaram",
      busNumber: "112",
      stops: "Tambaram BT (6.20 am), Chrompet (6.25), Pallavaram (6.28), Meenambakkam (6.35), Alandur (6.40), Mount Station (6.45), Guindy Kathipara (6.50), Ambal Nagar- K.K.Nagar (6.55), Vadapalani Signal (7.00), Chimaya Nagar (7.07), Koyambedu Roundtana (7.10)- College (8.10)"
    },
    {
      place: "Mylapore",
      busNumber: "162",
      stops: "Mandaveli post office(6.15) - Kaliappa (6.25) – Mylapore (6.30) – Luz – Royapettah Hospital (6.35) – Triplicane Post Office (6.40) – Tarapore Towers – Pudupet – Egmore Commissioner Office – Dasaprakash (7.00) – ESI – Ayanavaram (7.10) – ICF – Villivakkam (7.20) – College (8.00)"
    },
    {
      place: "Kasimedu",
      busNumber: "173",
      stops: "Kasimedu R2 PS (6.50 am) – Kalmandapam – Royapuram Market (6.55) – Stanley Hospital – Mint (7.05)– Basin Bridge – M.K.B Nagar – M.R. Nagar – Erukencherry - Moolakadai (7.15) – Madhavaram Roundana – 100 ft Road (7.20) – College (8.00)."
    },
    {
      place: "Manali Market",
      busNumber: "175",
      stops: "Manali Market (7.00 am) - Mathur (7.05) – Milk Colony FG – SG (7.10) – Arul Nagar (7.15) - Moolakadai (7.25) – College (8.00)."
    },
    {
      place: "Thiruvottiyur",
      busNumber: " 181",
      stops: "Rajakadai (6.35 am) – Kaladipet – Thiruvottiyur Police Station – Ellaiamman Koil (6.40) – Theradi – Vellanchetti School – Ajax (6.50) – Periyar Nagar – Wimco – Ennore Lift Gate (6.55) – Jothi Nagar (6.57) – Sathyamoorthy Nagar - MFL Corner – College (8.00)."
    }
  ];

  const filteredRoutes = busRoutes.filter(route => {
    const searchText = `${route.place} ${route.busNumber} ${route.stops}`.toLowerCase();
    return searchText.includes(searchTerm.toLowerCase());
  });

  // Animation variants for staggered text effect
  const headerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Adjust the time between letter animations as needed
      }
    }
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="h-screen p-4 sm:p-8 bg-gradient-to-br from-gray-900/50 to-gray-900 overflow-y-auto">
      <div className="max-w-4xl mx-auto min-h-full">
        <motion.h1
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold text-[#00ff9f] mb-8 text-center drop-shadow-lg"
        >
          {"BUS ROUTES".split("").map((char, index) => (
            <motion.span key={index} variants={letterVariant}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <div className="mb-8 relative group">
          <div className="flex items-center gap-2 mb-4">
            <FiSearch className="text-[#00ff9f] w-5 h-5" />
            <span className="text-sm text-[#00ff9f]/80">Search by location, bus number, or stop</span>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Try 'Koyambedu' or '175'..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-gray-800/40 backdrop-blur-lg rounded-xl border-2 border-[#00ff9f]/20 text-gray-100 placeholder-gray-400/80 focus:outline-none focus:border-[#00ff9f] focus:ring-4 focus:ring-[#00ff9f]/20 transition-all"
            />
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00ff9f] w-5 h-5" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#00ff9f]/50 hover:text-[#00ff9f] transition-colors"
              >
                ×
              </button>
            )}
          </div>
          <div className="mt-2 text-sm text-[#00ff9f]/50">
            Showing {filteredRoutes.length} route{filteredRoutes.length !== 1 && 's'}
          </div>
        </div>

        <motion.div 
          layout
          className="space-y-6"
        >
          <AnimatePresence>
            {filteredRoutes.map((route, index) => (
              <motion.div
                key={route.busNumber}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <BusCard route={route} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredRoutes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="mb-4 text-[#00ff9f]/30">
              <FiSearch className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl text-[#00ff9f]/80 mb-2">No routes found</h3>
            <p className="text-[#00ff9f]/50">Try searching for a different location or bus number</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Bus; 