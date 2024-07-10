import React from 'react';
import './Footer.css'; // Make sure to create and import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>Designed and Developed by Habeb</p>
        </div>
        <div className="footer-section social">
          <a href="https://twitter.com">Twitter</a>
          <a href="https://linkedin.com">LinkedIn</a>
          <a href="https://github.com">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
