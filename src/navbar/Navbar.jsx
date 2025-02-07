import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo2 from "../assets/logo2.png";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { to: "/", icon: "fas fa-home", label: "Home" },
    { to: "/events", icon: "fas fa-calendar-alt", label: "Events" },
    { to: "/register", icon: "fas fa-user-plus", label: "Register" },
    { to: "/contact", icon: "fas fa-envelope", label: "Contact" },
    { to: "/bus", icon: "fas fa-bus", label: "Bus" },
    { to: "/login", icon: "fas fa-user", label: "Login" },
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <img className="logo" src={logo2} alt="logo" />
          <div className="nav-links d-none d-lg-flex">
            {navItems.map(({ to, icon, label }) => (
              <Link
                className={`nav-link ${location.pathname === to ? "active" : ""}`}
                to={to}
                key={to}
              >
                <i className={`${icon} me-2`}></i> {label}
              </Link>
            ))}
          </div>
          <button className="navbar-toggler d-lg-none" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={toggleSidebar}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul className="sidebar-nav">
          {navItems.map(({ to, icon, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`sidebar-link ${location.pathname === to ? "active" : ""}`}
                onClick={toggleSidebar}
              >
                <i className={`${icon} me-2`}></i> {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={`sidebar-overlay ${isSidebarOpen ? "show" : ""}`} onClick={toggleSidebar}></div>
    </div>
  );
}

export default Navbar;
