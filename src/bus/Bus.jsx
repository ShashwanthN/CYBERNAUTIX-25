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