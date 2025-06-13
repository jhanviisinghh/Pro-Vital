import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">ProVital</div>

        {/* Hamburger icon (mobile only) */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#">List your practice</a></li>
          <li><a href="#">For Employers</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Books</a></li>
          <li><a href="#">Speakers</a></li>
          <li><a href="#">Doctors</a></li>

          {/* Dropdown for Login/Signup */}
          <li className="dropdown">
            <span className="dropdown-title">Login / Signup</span>
            <div className="dropdown-content">
              <div>
                <strong>Doctor</strong>
                <a href="#">Login</a>
                <a href="#">Signup</a>
              </div>
              <div>
                <strong>Patient</strong>
                <a href="#">Login</a>
                <a href="#">Signup</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
