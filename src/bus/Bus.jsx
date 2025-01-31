import React, { useState } from 'react';
import './Bus.css'; // Ensure you have the corresponding CSS file

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

  const filteredRoutes = busRoutes.filter(route => 
    route.place.toLowerCase().includes(searchTerm.toLowerCase()) ||
    route.busNumber.includes(searchTerm)
  );

  return (
    <div className="page-container fade-in">
      <div className="page-content bus-page">
        <div className="bus-container">
          <h1 className="bus-title">Bus Routes</h1>
          
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by place or bus number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <i className="fas fa-search search-icon"></i>
          </div>

          <div className="bus-routes">
            {filteredRoutes.map((route, index) => (
              <div key={index} className="route-card">
                <div className="route-header">
                  <div className="place-info">
                    <h2>{route.place}</h2>
                    <span className="bus-number">Bus No: {route.busNumber}</span>
                  </div>
                  <i className="fas fa-bus"></i>
                </div>
                <div className="route-details">
                  <p>{route.stops}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bus; 