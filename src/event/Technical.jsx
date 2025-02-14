import './Technical.css';
import logo from '../assets/coding_img.png';
import pp from '../assets/paper_img.png';
import uiux_img from '../assets/uiux_img.png';
import cq from '../assets/cq.png';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

import TiltedCard from '../blocks/Components/TiltedCard/TiltedCard';

const Technical = ({ onNavigate }) => {
  const handleRegisterClick = () => {
    onNavigate('/register');
  };

  const EventSection = ({ imageSrc, title, description, rules, contactName, contactNumber, reverse }) => (
    <motion.section 
      className={`group relative flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} 
      gap-4 p-4 md:p-6 overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
    >
      <div className={`md:w-1/2 relative ${reverse ? 'md:-rotate-1' : 'md:rotate-1'} 
        transition-transform duration-300 hover:rotate-0`}>
        <TiltedCard imageSrc={imageSrc} className="rounded-xl shadow-xl" />
      </div>

      <div className="md:w-1/2 space-y-3 p-4 bg-gradient-to-br from-emerald-900/30 to-transparent 
        backdrop-blur-lg rounded-2xl border border-emerald-400/20 shadow-[0_8px_32px_rgba(0,255,159,0.05)]">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 
          bg-clip-text text-transparent tracking-tight">{title}</h2>
        
        <p className="text-gray-300 text-xs md:text-sm leading-relaxed opacity-90">{description}</p>

        <div className="space-y-2">
          <h3 className="text-emerald-400/80 text-sm font-semibold tracking-wide">RULES & REGULATIONS</h3>
          <ul className="grid gap-2 text-xs md:text-sm text-gray-300">
            {rules.map((rule, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="shrink-0 text-emerald-400 mt-0.5">•</span>
                <span className="opacity-90">{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-emerald-400/10">
          <div className="flex items-center justify-between gap-4 text-xs md:text-sm p-2">
            <div className="space-y-1.5">
              <p className="text-emerald-400/80 font-medium">{contactName}</p>
              <div className="flex items-center gap-2 text-emerald-300/90">
                <Phone className="w-3.5 h-3.5 text-emerald-400/80" />
                <span>{contactNumber}</span>
              </div>
            </div>
            <button
              onClick={handleRegisterClick}
              className="px-5 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 
              text-emerald-300 hover:bg-emerald-400/15 transition-all flex items-center gap-2 
              text-xs md:text-sm whitespace-nowrap"
            >
              Register
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );

  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 ">
      <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 md:mb-8 
        bg-gradient-to-r from-[#00FF9F] to-[#00FF9F] bg-clip-text text-transparent">
        Technical Events
      </h1>
      <div className="text-lg md:text-2xl font-light text-center mb-14 md:mb-22 
        bg-gradient-to-r from-[#00FF9F] to-[#00FF9F] bg-clip-text text-transparent">
        Technical Events
      </div>

      <div className="space-y-20 md:space-y-32">
        <EventSection
          imageSrc={logo}
          title="InnovateX"
          description="Put your programming skills to the test! Solve algorithmic problems and coding challenges in a race against the clock."
          rules={[
            "Languages: C, C++, Java, Python",
            "AI usage strictly prohibited",
            "2 hour time limit"
          ]}
          contactName="Chokkalingam"
          contactNumber="9894703845"
        />

        <EventSection
          imageSrc={pp}
          title="Research X"
          description="Showcase your research and paper presentation skills by discussing innovative ideas on trending topics."
          rules={[
            "Participants must submit their PPT before March 5",
            "Selected students will receive mail",
            "Students must bring laptop and pendrive (internet will be provided)",
            "PPT can be done by your own formatting",
            "10 minute presentation limit",
            "Teams of 2 allowed"
          ]}
          contactName="Shai Kumar"
          contactNumber="9941746227"
          reverse
        />

        <EventSection
          imageSrc={uiux_img}
          title="RepliCraft"
          description="Dive into the world of design and create intuitive, user-friendly interfaces."
          rules={[
            "Figma/Adobe XD/Sketch",
            "3 hour duration",
            "Theme-based design"
          ]}
          contactName="Rohit Vijayan"
          contactNumber="9986913189"
        />

        <EventSection
          imageSrc={cq}
          title="CineQuery"
          description="A thrilling DBMS-based competition crafting SQL stories with movie themes."
          rules={[
            "Essential SQL elements required",
            "Pre-provided schemas only",
            "2 member teams"
          ]}
          contactName="Sudhir Raja"
          contactNumber="9042162169"
          reverse
        />
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>
    </div>
  );
};

export default Technical;
