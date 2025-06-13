import React, { useState } from "react";
import "./Navbar.css";
import stethoscope from "../assets/images/stethoscope.png";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* ✅ Logo with image */}
        <div className="logo">
        <img src={stethoscope} alt="stethoscope" className="stethoscope-icon" />

          <span className="logo-text">ProVital</span>
        </div>

        {/* Hamburger icon (mobile only) */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="/" onClick={(e) => e.preventDefault()}>List your practice</a></li>
          <li><a href="/" onClick={(e) => e.preventDefault()}>For Employers</a></li>
          <li><a href="/" onClick={(e) => e.preventDefault()}>Courses</a></li>
          <li><a href="/" onClick={(e) => e.preventDefault()}>Books</a></li>
          <li><a href="/" onClick={(e) => e.preventDefault()}>Speakers</a></li>
          <li><a href="/" onClick={(e) => e.preventDefault()}>Doctors</a></li>

          {/* Dropdown for Login/Signup */}
          <li className="dropdown">
            <span className="dropdown-title">Login / Signup</span>
            <div className="dropdown-content">
              <div className="dropdown-row">
                <strong>Doctor</strong>
                <a href="/" onClick={(e) => e.preventDefault()}>Login</a>
                <a href="/" onClick={(e) => e.preventDefault()}>Signup</a>
              </div>
              <div className="dropdown-row">
                <strong>Patient</strong>
                <a href="/" onClick={(e) => e.preventDefault()}>Login</a>
                <a href="/" onClick={(e) => e.preventDefault()}>Signup</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
