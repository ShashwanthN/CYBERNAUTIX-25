import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SplashCursor from '../blocks/Animations/SplashCursor/SplashCursor';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">MyApp</Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fas fa-home icon" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">
                  <i className="fas fa-calendar-alt icon" /> Event
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  <i className="fas fa-user-plus icon" /> Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <i className="fas fa-envelope icon" /> Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bus">
                  <i className="fas fa-bus icon" /> Bus
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <i className="fas fa-user icon" /> Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={toggleSidebar}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul className="sidebar-nav">
          <li>
            <Link to="/" className="sidebar-link home" onClick={toggleSidebar}>
              <i className="fas fa-home me-2"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/events" className="sidebar-link event" onClick={toggleSidebar}>
              <i className="fas fa-calendar-alt me-2"></i> Event
            </Link>
          </li>
          <li>
            <Link to="/register" className="sidebar-link register" onClick={toggleSidebar}>
              <i className="fas fa-user-plus me-2"></i> Register
            </Link>
          </li>
          <li>
            <Link to="/contact" className="sidebar-link contact" onClick={toggleSidebar}>
              <i className="fas fa-envelope me-2"></i> Contact
            </Link>
          </li>
          <li>
            <Link to="/bus" className="sidebar-link bus" onClick={toggleSidebar}>
              <i className="fas fa-bus me-2"></i> Bus
            </Link>
          </li>
          <li>
            <Link to="/login" className="sidebar-link login" onClick={toggleSidebar}>
              <i className="fas fa-user me-2"></i> Login
            </Link>
          </li>
        </ul>
      </div>
      
      <div 
        className={`sidebar-overlay ${isSidebarOpen ? 'show' : ''}`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
}

export default Navbar;