import './Technical.css';
import logo from '../assets/coding_img.jpg';
import pp from '../assets/paper_img.jpg';
import uiux_img from '../assets/uiux_img.jpg';
import cq from '../assets/cq.jpg';

import TiltedCard from '../blocks/Components/TiltedCard/TiltedCard';

const Technical = ({ onNavigate }) => {
  const handleRegisterClick = () => {
    onNavigate('/register');
  };

  return (
    <div className="technical-container">
      <h1 className='heading venus-font'>TECHNICAL EVENTS</h1>
      {/* First section - Image on left, text on right */}
      <section className="technical-section">
        <div className="image-container">
          <TiltedCard imageSrc={logo}/>
        </div>
        <div className="content">
          <h2>CODING</h2>
          <p className='des'>Put your programming skills to the test! Solve algorithmic problems and coding challenges in a race against the clock.
            Sharpen your logic and compete to be the best coder.
          </p>
          <h2>Rules & Regulations:</h2>
          <p>Participants can code in C, C++, Java, or Python.</p>
          <p>AI usage is strictly prohibited.</p>
          <p>Time duration: 2 hours.</p>
          <button 
            type="button" 
            className="btn btn-outline-info"
            onClick={handleRegisterClick}
          >
            Register now
          </button>
        </div>
      </section>

      {/* Second section - Text on left, image on right */}
      <section className="technical-section stacked">
        <div className="content">
          <h2>PAPER PRESENTATION</h2>
          <p>Showcase your research and presentation skills by discussing innovative ideas on trending topics. Impress the judges with originality and clarity.</p>
          <h2>Rules & Regulations:</h2>
          <p>Papers must be submitted 2 days prior to the event.</p>
          <p>Presentations should not exceed 10 minutes.</p>
          <p>Q&A session: 2 minutes.</p>
          <p>Teams of up to 2 members allowed.</p>
          <button 
            type="button" 
            className="btn btn-outline-info"
            onClick={handleRegisterClick}
          >
            Register now
          </button>
        </div>
        <div className="image-container">
          <TiltedCard imageSrc={pp}/>
        </div>
      </section>
      {/* Third section - Different layout with image centered */}
      <section className="technical-section">
        <div className="image-container">
          <TiltedCard imageSrc={uiux_img}/>
        </div>
        <div className="content">
          <h2>UI/UX DESIGNING</h2>
          <p className='des'>Dive into the world of design and create intuitive, user-friendly interfaces. Compete to make the most innovative and aesthetic designs.
          </p>
          <h2>Rules & Regulations:</h2>
          <p>Software: Figma, Adobe XD, or Sketch.</p>
          <p>Time duration: 3 hours.</p>
          <p>Participants must follow the given theme.</p>
          <p>Solo or team (up to 2 members) participation allowed.</p>
          <button 
            type="button" 
            className="btn btn-outline-info"
            onClick={handleRegisterClick}
          >
            Register now
          </button>
        </div>
      </section>
      {/* Fourth section - Another unique layout */}
      <section className="technical-section stacked">
        <div className="content">
          <h2>CINEQUERY</h2>
          <p>A thrilling DBMS-based competition where participants craft a SQL story using provided schemas based on a movie theme.</p>
          <h2>Rules & Regulations:</h2>
          <p>The solution must include essential SQL elements like joins, subqueries, and functions.</p>
          <p>Only pre-provided schemas are allowed.</p>
          <p>Teams of 2 members.</p>
          <p>Time duration: 2 hours.</p>
          <button 
            type="button" 
            className="btn btn-outline-info"
            onClick={handleRegisterClick}
          >
            Register now
          </button>
        </div>
        <div className="image-container">
          <TiltedCard imageSrc={cq}/>
        </div>
      </section>
    </div>
  );
};

export default Technical;
