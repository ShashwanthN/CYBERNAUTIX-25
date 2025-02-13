import React, { useState } from 'react';
import { auth } from '../backend/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../backend/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiLock, FiPhone, FiBook, FiArrowRight } from 'react-icons/fi';

const NeonText = ({ children }) => (
  <motion.h1 
    initial={{ textShadow: '0 0 10px #fff' }}
    animate={{ textShadow: ['0 0 10px #fff', '0 0 20px #4f46e5', '0 0 10px #fff'] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="text-4xl md:text-5xl font-bold text-indigo-400 mb-8 text-center"
  >
    {children}
  </motion.h1>
);

const EventPill = ({ children, checked, onChange, name, value, eventType }) => (
  <label className={`relative cursor-pointer transition-all ${checked ? 'scale-105' : ''}`}>
    <input
      type="checkbox"
      name={name}
      value={value}
      checked={checked}
      onChange={(e) => onChange(e, eventType)}
      className="peer absolute opacity-0"
    />
    <div className={`p-6 ml-1 rounded-none border-2 ${
      checked 
        ? 'border-[#00ff9f] bg-[#00ff9f]/10 shadow-lg shadow-[#00ff9f]/20'
        : 'border-gray-600 hover:border-[#00ff9f]'
    } transition-all`}>
      <span className={`text-md ${checked ? 'text-indigo-300' : 'text-gray-300'}`}>
        {children}
      </span>
    </div>
  </label>
);

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    college: '',
    department: '',
    year: '',
    technicalEvents: [],
    nonTechnicalEvents: [],
    paperDetails: '',  // For Paper Presentation drive link
    teamName: ''      // New field for team name
  });

  const technicalEvents = [
    "Paper Present Research X",
    "Coding InnovateX",
    "UI/UX RepliCraft",
    "Cinequery"
  ];

  const nonTechnicalEvents = [
    "Twist Tales"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEventSelection = (e, eventType) => {
    const { value, checked } = e.target;
    const currentTechnical = eventType === 'technicalEvents' ? [...formData.technicalEvents] : formData.technicalEvents;
    const currentNonTechnical = eventType === 'nonTechnicalEvents' ? [...formData.nonTechnicalEvents] : formData.nonTechnicalEvents;

    if (checked) {
      const totalSelected = currentTechnical.length + currentNonTechnical.length;
      if (totalSelected >= 2) {
        e.preventDefault();
        alert('You can only select a maximum of 2 events in total');
        return;
      }
      
      if (eventType === 'technicalEvents') {
        currentTechnical.push(value);
      } else {
        currentNonTechnical.push(value);
      }
    } else {
      if (eventType === 'technicalEvents') {
        const index = currentTechnical.indexOf(value);
        if (index > -1) currentTechnical.splice(index, 1);
        // Clear the paper details when Paper Presentation is unchecked
        if (value === 'Paper Presentation') {
          setFormData(prevState => ({ ...prevState, paperDetails: '' }));
        }
      } else {
        const index = currentNonTechnical.indexOf(value);
        if (index > -1) currentNonTechnical.splice(index, 1);
      }
    }

    setFormData(prevState => ({
      ...prevState,
      technicalEvents: currentTechnical,
      nonTechnicalEvents: currentNonTechnical
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const totalEvents = formData.technicalEvents.length + formData.nonTechnicalEvents.length;
    
    if (formData.confirmPassword !== formData.password) {
      alert('Passwords do not match');
      return;
    }
  
    // Check: if Paper Presentation or Cinequery is selected, team name must be provided
    if ((formData.technicalEvents.includes("Paper Present Research X") || 
         formData.technicalEvents.includes("Cinequery")) && 
        formData.teamName.trim() === "") {
      alert("Please enter your team name");
      return;
    }
  
    if (formData.technicalEvents.length === 1 && formData.nonTechnicalEvents.length === 1) {
      alert('Please select both events from either Technical or Non-Technical category');
      return;
    }
  
    console.log('Form submitted:', formData);
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
  
      if (user) {
        const userDocRef = doc(db, "Users", user.uid); // Reference to "Users" collection
  
        await setDoc(userDocRef, {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          department: formData.department,
          password: formData.password,
          year: formData.year,
          no_of_events: totalEvents,
          technicalEvents: formData.technicalEvents,
          nonTechnicalEvents: formData.nonTechnicalEvents,
          paperDetails: formData.paperDetails,  // store paper presentation details
          teamName: formData.teamName,  // Add team name to database
          unique_id: user.uid
        });
  
        console.log("User registered and data stored successfully.");
        alert('Registered successfully');
        const userId = userCredential.user.uid;
        navigate(`/user/${userId}`);
      }
    } catch (error) {
      console.error("Error storing data:", error.message);
      alert(error.message);
    }
  };
  
  return (
    <div className="min-h-screen pb-4 py-2 sm:px-6 lg:px-4">
      <div className="max-w-7xl mx-auto h-full">
        {/* <NeonText>Cybernautix '25 Registration</NeonText> */}
        
        <motion.form 
          onSubmit={handleSubmit}
          className="bg-black/30 backdrop-blur-lg rounded-none shadow-xl p-8 space-y-8 border-2 border-[#00ff9f] mb-12"
        >
          {/* Personal Info Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00ff9f] mb-6 border-l-4 border-[#00ff9f] pl-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9f] to-[#00cc7a]">
                Personal Details
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <FiUser className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-[#00ff9f] focus:ring-2 focus:ring-[#00ff9f]/50 text-gray-100 placeholder-gray-400 transition-all"
                  required
                />
              </div>

              <div className="relative">
                <FiMail className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-[#00ff9f] focus:ring-2 focus:ring-[#00ff9f]/50 text-gray-100 placeholder-gray-400 transition-all"
                  required
                />
              </div>

              <div className="relative">
                <FiLock className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-[#00ff9f] focus:ring-2 focus:ring-[#00ff9f]/50 text-gray-100 placeholder-gray-400 transition-all"
                  required
                />
              </div>

              <div className="relative">
                <FiLock className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-[#00ff9f] focus:ring-2 focus:ring-[#00ff9f]/50 text-gray-100 placeholder-gray-400 transition-all"
                  required
                />
              </div>

              <div className="relative">
                <FiPhone className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-[#00ff9f] focus:ring-2 focus:ring-[#00ff9f]/50 text-gray-100 placeholder-gray-400 transition-all"
                  required
                />
              </div>
            </div>
          </div>

          {/* College Info Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00ff9f] mb-6 border-l-4 border-[#00ff9f] pl-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9f] to-[#00cc7a]">
                College Information
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <FiBook className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="text"
                  name="college"
                  placeholder="College Name"
                  value={formData.college}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-[#00ff9f] focus:ring-2 focus:ring-[#00ff9f]/50 text-gray-100 placeholder-gray-400 transition-all"
                  required
                />
              </div>

              <div className="relative">
                <FiBook className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="text"
                  name="department"
                  placeholder="Department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-[#00ff9f] focus:ring-2 focus:ring-[#00ff9f]/50 text-gray-100 placeholder-gray-400 transition-all"
                  required
                />
              </div>

              <div className="relative">
                <FiBook className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="text"
                  name="year"
                  placeholder="Year of study"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-[#00ff9f] focus:ring-2 focus:ring-[#00ff9f]/50 text-gray-100 placeholder-gray-400 transition-all"
                  required
                />
              </div>
            </div>
          </div>

          {/* Event Selection */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00ff9f] mb-6 border-l-4 border-[#00ff9f] pl-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9f] to-[#00cc7a]">
                Event Selection (Max 2)
              </span>
            </h2>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#00ff9f]">Technical Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {technicalEvents.map(event => {
                    if (event === "Paper Present Research X" || event === "Cinequery") {
                      return (
                        <div key={event} className="space-y-2">
                          <EventPill
                            name="technicalEvents"
                            value={event}
                            checked={formData.technicalEvents.includes(event)}
                            onChange={handleEventSelection}
                            eventType="technicalEvents"
                          >
                            {event}
                          </EventPill>
                          {formData.technicalEvents.includes(event) && (
                            <div className="flex flex-col space-y-2">
                              <input 
                                type="text"
                                name="teamName"
                                placeholder="Team Name"
                                value={formData.teamName}
                                onChange={handleChange}
                                className="w-full pt-2 pr-4 pb-2 pl-2 bg-gray-800/50 rounded-none border border-gray-700 focus:border-[#00ff9f] focus:ring-2 focus:ring-[#00ff9f]/50 text-gray-100 placeholder-gray-400 transition-all"
                              />
                              {event === "Paper Present Research X" && (
                                <div className="flex items-center space-x-2">
                                  <input 
                                    type="text"
                                    name="paperDetails"
                                    placeholder="G-drive link"
                                    value={formData.paperDetails}
                                    onChange={handleChange}
                                    className="w-full pt-2 pr-4 pb-2 pl-2 bg-gray-800/50 rounded-none border border-gray-700 focus:border-[#00ff9f] focus:ring-2 focus:ring-[#00ff9f]/50 text-gray-100 placeholder-gray-400 transition-all"
                                  />
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="button"
                                    className="whitespace-nowrap py-2 px-4 bg-gradient-to-r from-[#00ff9f] to-[#00cc7a] font-bold text-md text-white"
                                  >
                                    Submit
                                  </motion.button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    } else {
                      return (
                        <EventPill
                          key={event}
                          name="technicalEvents"
                          value={event}
                          checked={formData.technicalEvents.includes(event)}
                          onChange={handleEventSelection}
                          eventType="technicalEvents"
                        >
                          {event}
                        </EventPill>
                      );
                    }
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#00ff9f]">Suprise Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {nonTechnicalEvents.map(event => (
                    <EventPill
                      key={event}
                      name="nonTechnicalEvents"
                      value={event}
                      checked={formData.nonTechnicalEvents.includes(event)}
                      onChange={handleEventSelection}
                      eventType="nonTechnicalEvents"
                    >
                      {event}
                    </EventPill>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-4 px-8 bg-gradient-to-r from-[#00ff9f] to-[#00cc7a] rounded-xl font-bold text-lg text-white flex items-center justify-center space-x-3 hover:shadow-[#00ff9f]/30 transition-all"
          >
            <span>Complete Registration</span>
            <FiArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}

export default Register;