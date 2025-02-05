import './Technical.css';

const Technical = () => {
    return (
      <div className="technical-container">
        {/* First section - Image on left, text on right */}
        <section className="technical-section">
          <img 
            src={logo} 
            alt="Technical event" 
            className="technical-image"
          />
          <div className="content">
            <h2>Technical Events</h2>
            <p>Join us for an exciting series of technical events that showcase innovation and expertise in technology. Our events include coding competitions, hackathons, and technical workshops designed to challenge and inspire.</p>
          </div>
        </section>
  
        {/* Second section - Text on left, image on right */}
        <section className="technical-section reverse">
          <img 
            src={logo} 
            alt="Technical workshops" 
            className="technical-image"
          />
          <div className="content">
            <h2>Workshops & Competitions</h2>
            <p>Participate in hands-on workshops led by industry experts and compete in challenges that test your technical skills. Network with fellow tech enthusiasts and learn about the latest developments in technology.</p>
          </div>
        </section>
      </div>
    );
};

export default Technical;