import './Technical.css';
import logo from '../assets/coding_img.png';
import pp from '../assets/paper_img.png';
import uiux_img from '../assets/uiux_img.png';
import cq from '../assets/cq.png';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

import TiltedCard from '../blocks/Components/TiltedCard/TiltedCard';

const Technical = ({ onNavigate }) => {
  const handleRegisterClick = () => {
    onNavigate('/register');
  };

  const EventSection = ({ imageSrc, title, description, rules, reverse, whatsappLink }) => (
    <motion.section 
      className={`group relative flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} 
        gap-2 sm:gap-4 p-2 sm:p-4 md:p-6 w-full`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
    >
      <div className={`md:w-1/2 relative ${reverse ? 'md:-rotate-1' : 'md:rotate-1'} 
        transition-transform duration-300 hover:rotate-0 w-full p-2 sm:p-0`}>
        <TiltedCard imageSrc={imageSrc} className="rounded-xl shadow-xl w-full" />
      </div>

      <div className="md:w-1/2 space-y-3 p-2 sm:p-3 md:p-4 bg-gradient-to-br from-emerald-900/30 to-transparent 
        backdrop-blur-lg rounded-2xl border border-emerald-400/20 shadow-[0_8px_32px_rgba(0,255,159,0.05)] w-full">
        <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 
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

        <div className="pt-4 border-t border-emerald-400/10 flex flex-wrap gap-2 md:justify-between">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="no-underline">
            <button
              className="px-3 sm:px-5 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 
              text-emerald-300 hover:bg-emerald-400/15 transition-all flex items-center gap-2 
              text-xs md:text-sm whitespace-nowrap no-underline" >
              <FaWhatsapp className="w-4 h-4 text-emerald-400" />
              <span className="no-underline">Join with us</span>
            </button>
          </a>

          <button
            onClick={handleRegisterClick}
            className="px-3 sm:px-5 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 
            text-emerald-300 hover:bg-emerald-400/15 transition-all flex items-center gap-2 
            text-xs md:text-sm whitespace-nowrap ml-auto sm:ml-0"
          >
            Register
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>
      </div>
    </motion.section>
  );

  return (
    <div className="relative max-w-7xl mx-auto px-3 md:px-8 py-8 md:py-12 ">
      <h1 className="text-4xl md:text-7xl font-bold text-center mb-4 md:mb-8 
        bg-gradient-to-r from-[#00FF9F] to-[#00FF9F] bg-clip-text text-transparent">
        Technical Events
      </h1>
      <div className="text-sm md:text-xl font-light text-center mb-14 md:mb-22 
        bg-gradient-to-r from-[#00FF9F] to-[#72d0ff] bg-clip-text text-transparent">
        Compete to earn rewards Rs 1,000 for champion and Rs 500 for runner-up.<br />
        <span className='text-white'>Venues to be announced soon.</span>
      </div>

      <div className="space-y-20 md:space-y-32">
        <EventSection
          imageSrc={logo}
          title="InnovateX"
          description="InnovateX is an on-the-spot problem-solving event where participants will be challenged to create innovative and feasible solutions. Participants will draft and present their solutions in a PPT format to a panel of juries. They can utilize tools like Canva or Microsoft PowerPoint, and systems with internet access will be provided.
"
          rules={[
            "Participants can compete individually or in teams of up to 3 members.",
            "A total of 1.5 hours will be given to draft the solution and prepare the presentation.",
            "Present solutions using Canva, PowerPoint, or similar tools within 4-5 minutes, including Q&A.",
            "Sticking to the allocated time is important for a smooth flow of the event.",
            "Judging criteria will be based on innovation, originality, feasibility, attractiveness, usefulness, and presentation quality."
          ]}
          whatsappLink="https://chat.whatsapp.com/B5Pd3uRtq5zFbzG0o4whfb"
        />

        <EventSection
          imageSrc={pp}
          title="Research X"
          description="Research X is a platform for thinkers, researchers, and innovators to showcase their ideas and research. Participants will present their papers on cutting-edge topics, competing for recognition and prizes. This event fosters intellectual exchange, innovation, and technical expertise."
          rules={[
            "Eligibility: Open to students pursuing UG and PG",
            "Team Size: Individual or a team of max 3 members.",
            "Topic Selection: Papers must be original and related to science, technology, engineering, or management.",
            "Abstract Submission: Required before the deadline. Only selected participants can present.",
            "Presentation Time: 5-8 minutes per team, followed by a Q&A session.",
            "Plagiarism: Strictly prohibited.",
            "File Format: Submit in PDF or PPT format as per event guidelines.",
            "Time Adherence: Exceeding the time limit may lead to point deductions."
          ]}
          whatsappLink="https://chat.whatsapp.com/DYjEjRKSOTKIWC0LRrn0tx"
          reverse
        />

        <EventSection
          imageSrc={uiux_img}
          title="RepliCraft"
          description="Think you've got what it takes to pixel-perfectly recreate a design under pressure?.Welcome to RepliCraft—the ultimate UI/UX showdown where speed meets precision! You'll get a UI design and just 1 hour to bring it to life using any tech stack you prefer. No teams, no shortcuts — just you, your skills, and the countdown ticking away.Ready to flex your skills? Build fast, pixel-perfect, and beat the clock."
          rules={[
            "All work must be done individually (no teams).",
            "Participants may use available resources and tools, but the final submission must be their own work.",
            "Submissions must be made within the time limit.",
            "Plagiarism or direct copying from external sources will result in disqualification."
          ]}
          whatsappLink="https://chat.whatsapp.com/JtYhBuwbCHo0ceqeU3Fe7j"
        />

        <EventSection
          imageSrc={cq}
          title="CineQuery"
          description="A thrilling DBMS-based competition crafting SQL stories with movie themes."
          rules={[
            "Essential SQL elements required",
            "Pre-provided schemas only",
            "2 members per team"
          ]}
          whatsappLink="https://chat.whatsapp.com/DU3oIZneaJhCpLLPg6w6bE"
          reverse
        />
      </div>
    </div>
  );
};

export default Technical;
