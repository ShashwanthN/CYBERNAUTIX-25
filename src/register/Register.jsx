import React, { useState } from 'react';
import './Register.css'; // Ensure you have the corresponding CSS file
import { auth } from '../backend/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../backend/firebase';
import { setDoc,doc,collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function SplitText({ text }) {
  return (
    <h1 className="split-text">
      {text.split('').map((char, index) => (
        <span key={index} className="split-text-char">
          {char}
        </span>
      ))}
    </h1>
  );
}

function Register() {

  const nav = useNavigate();


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
    nonTechnicalEvents: []
  });

  const technicalEvents = [
    "Paper Presentation",
    "Coding",
    "UI/UX Designing",
    "Cinequery"
  ];

  const nonTechnicalEvents = [
    "Twist Tales"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
          password:formData.password,
          year: formData.year,
          no_of_events: totalEvents,
          technicalEvents: formData.technicalEvents,
          nonTechnicalEvents: formData.nonTechnicalEvents,
          unique_id: user.uid
        });
  
        console.log("User registered and data stored successfully.");
        alert('Registered successfully');
        const userId = userCredential.user.uid;
        nav(`/user/${userId}`);
        
      }
    } catch (error) {
      console.error("Error storing data:", error.message);
      alert(error.message);
    }
  };
  
  return (
    <div className="page-content register-page">
      <div className="register-container">
        <div className="register-card">
          <div className="register-header">
            <i className="fas fa-user-plus"></i>
            <SplitText text="Cybernautix'25" />
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h2>Personal Information</h2>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <div className="input-icon">
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                  <i className="fas fa-user"></i>
                </div>
              </div>

              <div className="form-group">
                <div className="input-icon">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-icon">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-icon">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-icon">
                  <i className="fas fa-phone"></i>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>College Information</h2>
              <div className="form-group">
                <div className="input-icon">
                  <i className="fas fa-university"></i>
                  <input
                    type="text"
                    name="college"
                    placeholder="College Name"
                    value={formData.college}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-icon">
                  <i className="fas fa-graduation-cap"></i>
                  <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-icon">
                  <i className="fas fa-graduation-cap"></i>
                  <input
                    type="text"
                    name="year"
                    placeholder="Year of study"
                    value={formData.year}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Event Selection</h2>
              <div className="events-container">
                <div className="event-group">
                  <h3>Technical Events</h3>
                  {technicalEvents.map(event => (
                    <div className="event-checkbox" key={event}>
                      <input
                        type="checkbox"
                        id={event}
                        name="technicalEvents"
                        value={event}
                        checked={formData.technicalEvents.includes(event)}
                        onChange={(e) => handleEventSelection(e, 'technicalEvents')}
                      />
                      <label htmlFor={event}>{event}</label>
                    </div>
                  ))}
                </div>

                <div className="event-group">
                  <h3>Non-Technical Events</h3>
                  {nonTechnicalEvents.map(event => (
                    <div className="event-checkbox" key={event}>
                      <input
                        type="checkbox"
                        id={event}
                        name="nonTechnicalEvents"
                        value={event}
                        checked={formData.nonTechnicalEvents.includes(event)}
                        onChange={(e) => handleEventSelection(e, 'nonTechnicalEvents')}
                      />
                      <label htmlFor={event}>{event}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button type="submit" className="register-btn">
              Register Now
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;