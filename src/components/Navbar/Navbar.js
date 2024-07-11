import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for styling
import WaveAnimation from '../../Assets/waves/WaveAnimation';
import { CiUser,CiHome } from "react-icons/ci";
import { PiProjectorScreenChartThin } from "react-icons/pi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className='navbar-logo-link'><WaveAnimation/></Link>
      </div>
      <div className="navbar-links">
        <ul className={`navbar-nav ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleNavbar}><CiHome/>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/project" className="nav-link" onClick={toggleNavbar}><PiProjectorScreenChartThin/>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleNavbar}><CiUser/>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-link" onClick={toggleNavbar}><CiUser/>Resume</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleNavbar}>Contact</Link>
          </li>
        </ul>
        <div className="hamburger-menu" onClick={toggleNavbar}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
