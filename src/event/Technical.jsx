import './Technical.css';
import logo from '../assets/coding_img.png';
import pp from '../assets/paper_img.png';
import uiux_img from '../assets/uiux_img.png';
import cq from '../assets/cq.png';
import { motion } from 'framer-motion';

import TiltedCard from '../blocks/Components/TiltedCard/TiltedCard';

const Technical = ({ onNavigate }) => {
  const handleRegisterClick = () => {
    onNavigate('/register');
  };

  const EventSection = ({ imageSrc, title, description, rules, reverse }) => (
    <motion.section 
      className={`group relative flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} 
      gap-6 p-4 md:p-8 overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-25%" }}
    >
      <div className={`md:w-1/2 relative ${reverse ? 'md:-rotate-1' : 'md:rotate-1'} 
        transition-transform duration-300 hover:rotate-0`}>
        <TiltedCard imageSrc={imageSrc} className="rounded-2xl shadow-2xl" />
      </div>

      <div className="md:w-1/2 space-y-4 p-4 bg-black/30 backdrop-blur-sm rounded-3xl
        border-2 border-emerald-400/20">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 
          bg-clip-text text-transparent">{title}</h2>
        
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">{description}</p>

        <div className="space-y-2">
          <h3 className="text-emerald-400/80 text-lg font-semibold">Rules & Regulations:</h3>
          <ul className="space-y-1.5 text-sm text-gray-400">
            {rules.map((rule, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-400">▹</span>
                {rule}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={handleRegisterClick}
          className="mt-4 px-6 py-2.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 
          text-emerald-300 hover:bg-emerald-400/20 transition-all flex items-center gap-2 
          text-sm md:text-base"
        >
          <span>Register Now</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </motion.section>
  );

  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <h1 className="text-5xl md:text-7xl font-bold text-center mb-16 md:mb-24 
        bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
        Technical Events
      </h1>

      <div className="space-y-20 md:space-y-32">
        <EventSection
          imageSrc={logo}
          title="Coding Challenge"
          description="Put your programming skills to the test! Solve algorithmic problems and coding challenges in a race against the clock."
          rules={[
            "Languages: C, C++, Java, Python",
            "AI usage strictly prohibited",
            "2 hour time limit"
          ]}
        />

        <EventSection
          imageSrc={pp}
          title="Paper Presentation"
          description="Showcase your research and presentation skills by discussing innovative ideas on trending topics."
          rules={[
            "Submission 2 days prior",
            "10 minute presentation limit",
            "Teams of 2 allowed"
          ]}
          reverse
        />

        <EventSection
          imageSrc={uiux_img}
          title="UI/UX Design"
          description="Dive into the world of design and create intuitive, user-friendly interfaces."
          rules={[
            "Figma/Adobe XD/Sketch",
            "3 hour duration",
            "Theme-based design"
          ]}
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
