import './Technical.css';
import logo from '../assets/coding_img.jpg';
import pp from '../assets/paper_img.jpg';
import uiux from '../assets/uiux_img.jpg';
import TiltedCard from '../blocks/Components/TiltedCard/TiltedCard';
import { useNavigate } from 'react-router-dom';

const Technical = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="technical-container">
      <h1 className='heading'>TECHNICAL EVENTS</h1>
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
          <TiltedCard imageSrc={pp}/>
        </div>
      </section>
      {/* Third section - Different layout with image centered */}
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
          <TiltedCard imageSrc={pp}/>
        </div>
      </section>
    </div>
  );
};

export default Technical;