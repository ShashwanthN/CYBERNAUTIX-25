import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar({ onNavigate }) {
  const location = useLocation();

  const navItems = [
    { to: "/", icon: "fas fa-home", label: "Home" },
    { to: "/events", icon: "fas fa-calendar-alt", label: "Events" },
    { to: "/register", icon: "fas fa-user-plus", label: "Register" },
    { to: "/contact", icon: "fas fa-envelope", label: "Contact" },
    { to: "/bus", icon: "fas fa-bus", label: "Bus" },
    { to: "/login", icon: "fas fa-user", label: "Login" },
  ];

  return (
    <nav className="mobile-nav">
      <div className="nav-items">
        {navItems.map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`nav-item ${location.pathname === to ? "active" : ""}`}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate(to);
              }
            }}
          >
            <i className={icon}></i>
            <span className="nav-label">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
