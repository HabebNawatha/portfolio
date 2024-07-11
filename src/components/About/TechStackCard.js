import React from 'react';
import './TechStackCard.css'; // Import the CSS file for styling

function TechStackCard({ Icon, alt }) {
    return (
        <div className="tech-stack-card">
            <Icon className="tech-stack-card-icon" title={alt} alt={alt}/>
        </div>
    );
}

export default TechStackCard;
