import "./Contact.css";

function Contact() {
  return (
    <div className="ct-main-container">
      <div className="ct-content-wrapper">
        {/* Hero Section */}
        <div className="ct-hero-section">
          <h1 className="ct-main-title">Get in Touch</h1>
          <p className="ct-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        {/* Contact Grid Container */}
        <div className="ct-grid-container">
          {/* Contact Form Card */}
          <div className="ct-card ct-form-card">
            <form className="ct-contact-form">
              <div className="ct-form-header">
                <h2>Send us a Message</h2>
              </div>
              
              <div className="ct-form-group">
                <input type="text" className="ct-form-input" name="name" placeholder="Your Name" required />
                <i className="fas fa-user input-icon"></i>
              </div>
              
              <div className="ct-form-group">
                <input type="email" className="ct-form-input" name="email" placeholder="Your Email" required />
                <i className="fas fa-envelope input-icon"></i>
              </div>
              
              <div className="ct-form-group">
                <textarea 
                  className="ct-form-textarea" 
                  name="message" 
                  placeholder="Your Message" 
                  required
                ></textarea>
                <i className="fas fa-comment-alt input-icon textarea-icon"></i>
              </div>
              
              <button type="submit" className="ct-submit-btn">
                Send Message
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="ct-card ct-info-card">
            <h2>Contact Information</h2>
            <div className="ct-info-content">
              <div className="ct-info-item">
                <div className="ct-info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="ct-info-text">
                  <h3>Address</h3>
                  <p>R.M.K. Engineering College, Tamil Nadu</p>
                </div>
              </div>

              <div className="ct-info-item">
                <div className="ct-info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="ct-info-text">
                  <h3>Phone</h3>
                  <section>
                  <p>+91 90806 39960</p>
                  <p>+91 99522 76785</p>
                  </section>
                </div>
              </div>

              <div className="ct-info-item">
                <div className="ct-info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="ct-info-text">
                  <h3>Email</h3>
                  <p>cybernautix@rmkec.ac.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="ct-map-section">
          <div className="map-wrapper">
            <a 
              href="https://www.google.co.in/maps/place/R.M.K.+Engineering+College/@13.3566859,80.1413034,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d807de229f987:0x11cc13e2927bfabc!8m2!3d13.3566859!4d80.1413034!16zL20vMGM1dmd4?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-link"
            >
              <iframe
                className="map-container"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.8968250621356!2d80.13872847492559!3d13.356691106318891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d807de229f987%3A0x11cc13e2927bfabc!2sR.M.K.%20Engineering%20College!5e0!3m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 'none', borderRadius: '15px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RMK Engineering College Location"
              ></iframe>
              <div className="map-overlay">
                <span>Click to open in Google Maps</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
          