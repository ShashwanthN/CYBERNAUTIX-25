import React, { useState } from 'react';
import './Register.css'; // Ensure you have the corresponding CSS file

function Register() {
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
    setFormData(prevState => ({
      ...prevState,
      [name]: value
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const totalEvents = formData.technicalEvents.length + formData.nonTechnicalEvents.length;
    if (totalEvents !== 2) {
      alert('Please select exactly 2 events to register');
      return;
    }

    if (formData.technicalEvents.length === 1 && formData.nonTechnicalEvents.length === 1) {
      alert('Please select both events from either Technical or Non-Technical category');
      return;
    }

    console.log('Form submitted:', formData);
  };

  return (
    <div className="page-content register-page">
      <div className="register-container">
        <div className="register-card">
          <div className="register-header">
            <i className="fas fa-user-plus"></i>
            <h1>Event Registration</h1>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h2>Personal Information</h2>
              <div className="form-group">
                <div className="input-group">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
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
                <div className="input-group">
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
                <div className="input-group">
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
                <div className="input-group">
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
                <div className="input-group">
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
                <div className="input-group">
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
                <div className="input-group">
                  <i className="fas fa-calendar-alt"></i>
                  <select 
                    name="year" 
                    value={formData.year} 
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
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