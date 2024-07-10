import React from 'react';
import './ProjectCard.css'; // Ensure you have a CSS file for styling
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectCard({ title, description, link }) {
  return (
    <div className='project-card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target='_blank' rel='noopener noreferrer'><GitHubIcon/></a>
    </div>
  );
}

export default ProjectCard;
