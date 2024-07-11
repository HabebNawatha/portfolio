import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
    return (
        <div className="contact-container">
            <h2>Socials</h2>
            <div className="contact-info">
            <a href="https://github.com/HabebNawatha" className="contact-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="contact-icon" />
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/habeb-nawatha/" className="contact-link" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="contact-icon" />
                    LinkedIn
                </a>
                <h2>Contact Me</h2>
                <a href="mailto:habeb.naw@gmail.com" className="contact-link">
                    <FaEnvelope className="contact-icon" />
                    habeb.naw@gmail.com
                </a>

                <a href="tel:+972528222682" className="contact-link">
                    <FaPhone className="contact-icon" />
                    +972 528222682
                </a>
            </div>
        </div>
    );
}

export default Contact;
