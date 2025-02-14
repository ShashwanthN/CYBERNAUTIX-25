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
      place: "Porur",
      busNumber: "121",
      stops: "Porur Signal (6.40 am), Valasarawakkam (6.50), Saligramam (6.55) Avichi, Vadapalani Bus Terminus, Ambika Empire (7.05), MMDA, Koyambedu (7.10), Ambedkar Nagar (Temple School) (7.25), College (8.10)."
    },
    {
      place: "Tiruvallur",
      busNumber: "131",
      stops: "Tiruvallur Bus Terminal (6.20 am), Thiruninravur (6.40), Pattabiram (6.55), Avadi Bus Terminus (7.00), Thirumulaivoyal (7.05), Ambattur Rakki (7.10), Pudur, Puzhal Camp (7.35), College (8.10)."
    },
    {
      place: "Ambattur",
      busNumber: "132",
      stops: "Ambathur Rakki (7.10 am), Oragadam (7.15), Pudur (7.20), Kallikuppam (7.23), Puzhal Camp (7.35) College (8.10)."
    },
    {
      place: "Avadi Bus Terminus",
      busNumber: "136",
      stops: "Avadi Bus Terminus (7.00), Thirumulaivoyal (7.05), Ambattur Rakki (7.10), Pudur, Puzhal Camp (7.35), College (8.10)."
    },
    {
      place: "T.Nagar",
      busNumber: "141",
      stops: "T.Nagar Panagal Park (6.45 am) , Pondy Bazaar (6.50) , Vani Mahal (6.52) , Vidhyodaya School , Valluvarkottam (6.57) ,Nungabakkam PoliceStation, Sterling Road ,Choolaimedu (7.00) , Arun Hotel (7.05), Anna Arch, Roundtana (7.10), K4, Nathamuni (7.20), Senthil Nagar(7.25), College (8.00)"
    },
    {
      place: "Kodambakkam",
      busNumber: "145",
      stops: "Ram Theatre (6.40), Kodambakkam, Meenakshi College (6.50), Mahalingapuram, Chetpet Signal (6.55) , Ega (6.58) , Aminjikarai Market , Shenoy Nagar (7.05), Chinthamani (7.10), Lotus Colony, K4, Nathamuni (7.15), Vinayagapuram(7.20) , College (8.00)"
    },
    {
      place: "Mogappair West",
      busNumber: "153",
      stops: "Mogappair West Depot (7.00AM), Golden Flats (7.05), Collector Nagar Bus Stop (7.05), Padikuppam Road (7.07)- Thirumangalam, (7.10) Anna Nagar West Depot (7.20), College (8.10)."
    },
    {
      place: "Mogappair East",
      busNumber: "156",
      stops: "Mogappair East (7.00) – Collector Nagar Bus Stop (7.05) – Padikuppam Road (7.07)- Anna Nagar West Depot (7.15) – College (8.10)."
    },
    {
      place: "Thiruverkadu Arch",
      busNumber: "157",
      stops: "Thiruverkadu Arch (6.50AM) – Maduravoyal (7.05) - Anna Nagar 13th Main Road (7.10) – 11th Main Road (7.13) – 9th Main Road (7.15) - Anna Nagar West Depot (7.20) – College (8.10)."
    },
    {
      place: "Kellys",
      busNumber: "163",
      stops: "Kellys (6.45) - Abirami theatre - Purasawalkam Tank (6.50) – Perambur Bus Depot (7.00) – Perambur Church (7.15) –Ajantha Bakery - Venus – Agaram (7.15) – Kolathur – Rettary – College (8.00)."
    },

    {
      place: "Thiru Vi Ka Nagar",
      busNumber: "166",
      stops: "Thiru Vi Ka Nagar (7.00 am) - S.R.P Colony (7.05) – Periyar Nagar (7.10) - Kolathur Anna Statue (7.15) – Moogambikai – Rettary (7.20) – College (8.00)."
    },
    {
      place: "Tollgate",
      busNumber: "172",
      stops: "Tollgate – I (6.45 am) – New Washermenpet – MM Theatre – Washermen Postoffice – Maharani (6.55) – Mint (7.05) - Basin Bridge – Vyasarpadi (7.10) – Sharma Nagar – College (8.00)."
    },
    {
      place: "Manali New Town",
      busNumber: "182",
      stops: "Manali New Town (6.55 am) – MMDA – Nappalayam (7.10) – Athipattu (7.15) – Minjur Railway Station (7.28) – Kesavapuram – Nallur - Venbakkam (7.40) – Ponneri Police Station (7.42) – Anna Statue (7.45) – Krishnapuram - Andarkuppam – Thatchur – Peruvoyal – College (8.00)."
    },
    {
      place: "Ponneri Bus Terminals",
      busNumber: "183",
      stops: "Ponneri Bus Terminals (7.35 am) - Anna Statue (7.45) – Krishnapuram (7.50) – Andarkuppam (7.52) – Thatchur (7.55) – Peruvoyal (8.00) – College (8.05)."
    },
    {
      place: "Sunnambukulam",
      busNumber: "191",
      stops: "Sunnambukulam (7.15am) - Elavur (7.30) – Pethikkuppam (7.35) Gummidipoondi (7.40) – College (8.10)."
    },
    {
      place: "Uthukottai",
      busNumber: "192",
      stops: "Uthukottai (7.10 am) – Palavakkam (7.25) – Periyapalayam (7.40) – Arani (7.50) – College (8.10)."
    },
    {
      place: "Manavalan Nagar",
      busNumber: "194",
      stops: "Manavalan Nagar (6.35 am) – Tiruvallur Raiway Station (6.40)- Tiruvallur GH (6.45) - Theradi (6.50) – Ekadu (6.55) - Thamaraipakkam kootroad (7.15) Kanniputhur (7.40) – Janapanchathiram (7.50) – College (8.10)"
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