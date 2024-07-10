import React from 'react';
import './Footer.css'; // Make sure to create and import the CSS file for styling
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>Designed and Developed by Habeb</p>
        </div>
        <div className="footer-section-social">
          <span>
          <a href="https://www.linkedin.com/in/habeb-nawatha/" className='footer-icon'><LinkedInIcon/></a>
          </span>
          <span>
          <a href="https://github.com/HabebNawatha" className='footer-icon'><GitHubIcon/></a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
