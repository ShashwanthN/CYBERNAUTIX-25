import React from 'react'
import './NonTechnical.css'
import {useNavigate} from 'react-router-dom';
import tt from'../assets/twistTales.jpg'
import TiltedCard from '../blocks/Components/TiltedCard/TiltedCard'


const NonTecnical = ({ onNavigate }) => {
  const handleRegisterClick = () => {
    onNavigate('/register');
  };

  return (
    
        <div className="technical-container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className='heading'>SURPRISE EVENTS</h1>
          <section className="technical-section" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            padding: '2rem',
            position: 'relative',
            zIndex: 2
          }}>
            <div style={{ flex: '1' }}>
              <TiltedCard imageSrc={tt}/>
            </div>
            <div className="content" style={{ flex: '1' }}>
              <h2>TWIST TALES</h2>
              <p className='des'>Unleash your creativity and storytelling skills! Participants craft a 
                short story with an unexpected twist based on a given prompt.
              </p>
              <h2>Rules & Regulations:</h2>
              <p>Original content only. Plagiarism is not allowed.</p>
              <p>Word limit: 500-700 words.</p>
              <p>Teams of 2 members.</p>
              <p>Time limit: 1 hour.</p>
              <button 
            type="button" 
            className="btn btn-outline-info"
            onClick={handleRegisterClick}
          >
            Register now
          </button>
            </div>
          </section>
        </div>
   
  )
}

export default NonTecnical