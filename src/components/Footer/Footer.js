import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>Designed and Developed by Habeb Nawatha</p>
        </div>
        <div className="footer-section-social">
          <a href="https://www.linkedin.com/in/habeb-nawatha/" className='footer-icon'><FaLinkedin/></a>
          <a href="https://github.com/HabebNawatha" className='footer-icon'><FaGithub/></a>
          <a href="mailto:habeb.naw@gmail.com" className='footer-icon'><FaEnvelope/></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
