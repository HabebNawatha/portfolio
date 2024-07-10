import React from 'react';
import './TechStackCard.css'; // Create and import the CSS file for styling

function TechStackCard({ Icon, alt }) {
    return (
        <div className="tech-stack-card">
            <Icon className="tech-stack-card-icon" alt={alt} />
        </div>
    );
}

export default TechStackCard;
