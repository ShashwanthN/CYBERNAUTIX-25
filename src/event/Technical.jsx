import './Technical.css';
import logo from '../assets/coding_img.png';
import pp from '../assets/paper_img.png';
import uiux_img from '../assets/uiux_img.png';
import cq from '../assets/cq.png';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

import TiltedCard from '../blocks/Components/TiltedCard/TiltedCard';

const EventSection = ({ imageSrc, title, description, rules, reverse, whatsappLink, onNavigate }) => (
  <motion.section 
    className="relative w-full px-2 sm:px-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20%" }}
  >
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-4 sm:gap-6`}>
      {/* Image Section */}
      <motion.div 
        className="lg:w-1/2 relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative h-48 sm:h-64 lg:h-96 overflow-hidden rounded-xl">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="lg:w-1/2 space-y-3 sm:space-y-4">
        <div className="bg-black/40 backdrop-blur-sm sm:backdrop-blur-lg rounded-xl p-4 sm:p-6 !border !border-green-500/30">
          <h2 className="text-lg sm:text-xl lg:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2 sm:mb-4">
            {title}
          </h2>
          
          <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 leading-relaxed">
            {description}
          </p>

          <div className="space-y-3 sm:space-y-4">
            <div className="!border-l-4 !border-green-500 pl-3 sm:pl-4">
              <h3 className="text-base sm:text-lg font-semibold text-green-400">Rules</h3>
              <p className="text-[10px] sm:text-xs text-gray-400 mt-1">Important guidelines</p>
            </div>

            <ul className="space-y-1 sm:space-y-2">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 sm:pt-4 flex flex-wrap gap-2 sm:gap-3 !border-t !border-green-500/20">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 min-w-[160px] sm:min-w-0 inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-green-500/10 hover:bg-green-500/20 !border !border-green-500/30 rounded-lg text-green-400 text-xs sm:text-sm transition-all"
              >
                <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="whitespace-nowrap">WhatsApp Group</span>
              </a>

              <button
                onClick={() => onNavigate('/register')}
                className="flex-1 min-w-[160px] sm:min-w-0 inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-green-500/10 hover:bg-green-500/20 !border !border-green-500/30 rounded-lg text-green-400 text-xs sm:text-sm transition-all"
              >
                <span className="whitespace-nowrap">Register Now</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

const Technical = ({ onNavigate }) => (
  <div className="h-screen flex flex-col overflow-hidden relative bg-gradient-to-br from-gray-900 to-black">
    {/* Background Effects - Non-scrolling */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(40deg,rgba(0,255,128,0.05)_0%,rgba(0,0,0,0)_50%,rgba(0,255,128,0.05)_100%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,128,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,128,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    </div>

    {/* Scrollable Content Area */}
    <div className="flex-1 overflow-y-auto relative z-10">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
        >
          Technical Events
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm sm:text-base lg:text-lg text-gray-400 mb-12"
        >
          Compete to earn rewards Rs 1,000 for champion and Rs 500 for runner-up
          <span className="block text-sm text-gray-500 mt-2">Venues to be announced soon</span>
        </motion.p>

        <div className="space-y-16 sm:space-y-24">
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
            onNavigate={onNavigate}
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
              // "Plagiarism: Strictly prohibited.",
              "Every Participants should register individually with same team name if any team members from other college mention it with name Eg : Name ( College )",
              "File Format: Submit in PDF format as per event guidelines.",
              "1 person from a team should bring their Laptop for presentation",
              "Time Adherence: Exceeding the time limit may lead to point deductions."
            ]}
            whatsappLink="https://chat.whatsapp.com/DYjEjRKSOTKIWC0LRrn0tx"
            reverse
            onNavigate={onNavigate}
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
            onNavigate={onNavigate}
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
            onNavigate={onNavigate}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Technical;
