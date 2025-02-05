import React from "react";
import "./Contact.css";
 // ✅ Import the 3D-Pin Component
import TiltedCard from "../blocks/Components/TiltedCard/TiltedCard";

function Contact() {
  return (
    <div className="page-container fade-in">
      <div className="page-content contact-page">
        <div className="contact-container">
          <div className="contact-form-section">
            <h1 className="contact-title">Contact Us</h1>
            <form className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Type your message here..." required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>R.M.K. Engineering College, Tamil Nadu</span>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-phone"></i>
                <span>+91 9876543210</span>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-envelope"></i>
                <span>info@rmkec.ac.in</span>
              </div>
            </div>
          </div>

      
          <div className="map-section">
           
              <div className="map-wrapper" style={{ width: '100%', height: '500px' }}>
                <iframe
                  className="map-container"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.8968250621356!2d80.13872847492559!3d13.356691106318891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d807de229f987%3A0x11cc13e2927bfabc!2sR.M.K.%20Engineering%20College!5e0!3m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ 
                    border: 'none',
                    borderRadius: '10px'
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
