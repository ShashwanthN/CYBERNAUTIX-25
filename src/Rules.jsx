import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Rules() {
  const rules = [
    { text: "Students must bring their respective college ID card.", icon: "fas fa-id-card" },
    { text: "Mobile phones are not allowed inside the campus.", icon: "fas fa-mobile-alt" },
    { text: "Confirmation mail for selection will be sent to your registered mail id.", icon: "fas fa-envelope" },
    { text: "Participants must only use the college bus which will be available on March 17th.", icon: "fas fa-bus" },
    { text: "Boys must come in formal with clean shave.", icon: "fas fa-user-tie" },
    { text: "Girls should wear formal dress.", icon: "fas fa-female" },
    { text: "No on spot Registration Allowed.", icon: "fas fa-ban" }
  ];

  const timeline = [
    { time: "8:30 - 9:00", event: "Registration starts at RM Block entrance" },
    { time: "9:00 - 10:00", event: "Inauguration ceremony at Seminar Hall - New block" },
    { time: "10:00 - 12:00", event: "Events (Time and venue will be informed shortly)" },
    { time: "1:30 - 2:00", event: "Valedictory ceremony" }
  ];

  return (
    <div className="h-screen min-h-scree text-white p-8 md:p-16 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-emerald-400 mb-4 drop-shadow-[0_0_15px_rgba(74,222,128,0.4)]">
            General Rules
          </h1>
          <p className="text-lg text-emerald-200/90 max-w-2xl mx-auto">
            Please read all rules carefully before proceeding
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-emerald-500/30 animate-[fadeIn_0.6s_ease-out_forwards] mb-12">
          <div className="flex flex-col gap-8">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-center gap-6 p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 transition-all duration-300 hover:translate-x-3 hover:bg-emerald-500/20 hover:border-emerald-500/40">
                <div className="w-12 h-12 md:w-[50px] md:h-[50px] flex items-center justify-center bg-emerald-400/10 rounded-full flex-shrink-0">
                  <i className={`${rule.icon} text-2xl text-emerald-400`}></i>
                </div>
                <p className="text-lg text-gray-200 leading-relaxed">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-400 mb-4">Timeline</h2>
        </div>

        <div className="border-l-2 border-emerald-500 pl-4 relative">
          {timeline.map((item, index) => (
            <div key={index} className="mb-8 relative">
              <div className="flex items-center mb-1">
                <div className="bg-emerald-500 w-4 h-4 rounded-full absolute -left-2"></div>
                <h3 className="text-xl font-semibold ml-8">{item.time}</h3>
              </div>
              <p className="text-lg text-gray-200 ml-8 pl-4 border-l-2 border-emerald-500/50">{item.event}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rules;