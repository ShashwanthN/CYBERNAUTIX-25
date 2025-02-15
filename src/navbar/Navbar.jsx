import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar({ onNavigate, isLoggedIn, onLogout }) {
  const location = useLocation();

  // Dynamic nav items based on login status
  const getNavItems = () => {
    const baseItems = [
      { to: "/", icon: "fas fa-home", label: "Home" },
      { to: "/events", icon: "fas fa-calendar-alt", label: "Events" },
      { to: "/generalnorms", icon: "fas fa-scroll", label: "Rules" },
      { to: "/register", icon: "fas fa-user-plus", label: "Register" },
      { to: "/contact", icon: "fas fa-envelope", label: "Contact" },
      { to: "/bus", icon: "fas fa-bus", label: "Bus" },
    ];

    if (isLoggedIn) {
      return [
        ...baseItems,
        { to: "/user/:userId", icon: "fas fa-user", label: "Profile" },
        { to: "/logout", icon: "fas fa-sign-out-alt", label: "Logout" },
      ];
    }

    return [
      ...baseItems,
      { to: "/login", icon: "fas fa-user", label: "Login" },
    ];
  };

  const handleNavClick = (to, e) => {
    e.preventDefault();
    if (to === "/logout") {
      onLogout();
    } else {
      onNavigate(to);
    }
  };

  return (
    <nav className="mobile-nav">
      <div className="nav-items">
        {getNavItems().map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`nav-item ${location.pathname === to ? "active" : ""}`}
            onClick={(e) => handleNavClick(to, e)}
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
