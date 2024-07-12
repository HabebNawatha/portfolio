import React from 'react';
import './CertificateCard.css';

const CertificateCard = ({ title, link }) => {
    return (
        <div className="certificate-card">
            <a href={link} target="_blank" rel="noopener noreferrer" className="certificate-card-link">
                {title}
            </a>
        </div>
    );
};

export default CertificateCard;
