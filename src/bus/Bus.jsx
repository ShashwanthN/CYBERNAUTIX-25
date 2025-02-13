import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiArrowRight, FiMapPin } from 'react-icons/fi';
import './Bus.css'; // Ensure you have the corresponding CSS file

const BusCard = ({ route }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="border-2 border-[#00ff9f]/30 bg-gray-900/20 backdrop-blur-sm rounded-none p-5 m-2 shadow-lg shadow-[#00ff9f]/10"
  >
    <div className="flex items-start mb-4">
      <div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00ff9f] to-[#00cc7a] bg-clip-text text-transparent">
          {route.place}
        </h2>
        <p className="text-[#00ff9f] font-mono mt-1">BUS {route.busNumber}</p>
      </div>
      <FiMapPin className="text-[#00ff9f] ml-auto w-8 h-8" />
    </div>
    
    <div className="space-y-1">
      {route.stops.split('-').map((stop, index) => (
        <div key={index} className="flex items-start">
          <div className="w-2 h-2 bg-[#00ff9f] mt-2 mr-4 flex-shrink-0" />
          <p className="text-xs md:text-sm leading-relaxed">{stop.trim()}</p>
        </div>
      ))}
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
    <div className="min-h-screen p-2 sm:p-6 lg:p-1 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Animated header: BUS ROUTES with each letter appearing sequentially */}
        <motion.h1
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold text-[#00ff9f] mb-6 sm:mb-8 text-center"
        >
          {"BUS ROUTES".split("").map((char, index) => (
            <motion.span key={index} variants={letterVariant}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <div className="relative mb-4 sm:mb-12">
          <FiSearch className="absolute left-4 top-6 text-[#00ff9f] w-6 h-6" />
          <input
            type="text"
            placeholder="Search routes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-gray-800/20 border-2 border-[#00ff9f]/30 text-gray-100 placeholder-gray-400/80 focus:outline-none focus:border-[#00ff9f] focus:ring-2 focus:ring-[#00ff9f]/50"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredRoutes.map((route, index) => (
            <BusCard key={index} route={route} />
          ))}
        </div>

        {filteredRoutes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-[#00ff9f]/80">
              No routes found matching your search
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bus; 