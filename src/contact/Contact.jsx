import React from "react";
import "./Contact.css";
 // ✅ Import the 3D-Pin Component
import TiltedCard from "../blocks/Components/TiltedCard/TiltedCard";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const message = e.target.message.value;
    const formattedBody = `Hi! I'm ${name}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    window.location.href = `mailto:rmkcybernautix@gmail.com?body=${formattedBody}`;
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-10 gap-12 mx-auto pt-36 relative z-10 max-w-6xl">
      <div className="flex-1 max-w-lg animate-fade-in-up bg-gray-900/80 backdrop-blur-sm p-5 rounded-xl relative z-20">
        <h1 className="text-emerald-400 text-4xl mb-8 text-center font-['Outfit'] tracking-wide uppercase">
          Contact Us
        </h1>
        
        <form onSubmit={handleSubmit} className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-cyan-500/20 animate-fade-in-up">
          <div className="mb-5">
            <label className="block text-white mb-2 font-['Outfit']">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white font-['Outfit'] transition-all focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
              placeholder="Enter your name"
            />
          </div>
          
          <div className="mb-5">
            <label className="block text-white mb-2 font-['Outfit']">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white font-['Outfit'] transition-all focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="mb-5">
            <label className="block text-white mb-2 font-['Outfit']">Message</label>
            <textarea
              name="message"
              required
              className="w-full p-3 h-32 bg-white/10 border border-cyan-500/30 rounded-lg text-white font-['Outfit'] transition-all resize-y focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="bg-transparent border border-emerald-400 text-emerald-400 px-8 py-3 rounded-full cursor-pointer transition-all flex items-center gap-3 mx-auto hover:bg-cyan-600 hover:text-white hover:-translate-y-1"
          >
            Send Message
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>

        <div className="mt-8 text-white text-center">
          <div className="flex items-center gap-3 mb-4">
            <i className="fas fa-map-marker-alt text-emerald-400"></i>
            <span>R.M.K. Engineering College, Tamil Nadu</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <i className="fas fa-phone text-emerald-400"></i>
            <span>+91 9876543210</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="fas fa-envelope text-emerald-400"></i>
            <span>info@rmkec.ac.in</span>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-lg h-[500px] relative z-20 animate-slide-in-right bg-gray-900/80 rounded-xl overflow-hidden border border-cyan-500/20">
        <div className="w-full h-full relative">
          <iframe
            className="w-full h-full absolute top-0 left-0 z-20 rounded-lg border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.8968250621356!2d80.13872847492559!3d13.356691106318891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d807de229f987%3A0x11cc13e2927bfabc!2sR.M.K.%20Engineering%20College!5e0!3m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;