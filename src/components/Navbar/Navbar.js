import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import WaveAnimation from '../../Assets/waves/WaveAnimation';
import { CiUser, CiHome, CiFileOn } from "react-icons/ci";
import { BiMessageRoundedDetail } from "react-icons/bi";
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
        <div className="hamburger-menu" onClick={toggleNavbar}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`navbar-nav ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleNavbar}><CiHome /> Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/project" className="nav-link" onClick={toggleNavbar}><PiProjectorScreenChartThin /> Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleNavbar}><CiUser /> About</Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-link" onClick={toggleNavbar}><CiFileOn /> Resume</Link>
          </li> 
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleNavbar}><BiMessageRoundedDetail /> Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
