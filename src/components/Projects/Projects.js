import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'; // Ensure you have a CSS file for styling

function Projects() {
  return (
    <div className='projects-main-section'>
      <div className='projects-section-intro'>
        <h1>Some of my Work</h1>
        <p>Here are a few projects I've worked on recently. Want to see more? Check out my GitHub profile.</p>
      </div>
      <div className='projects-section'>
        <ProjectCard 
          title="Knight's Move Challenge"
          description="Engineered Knight's Move game using Java."
          link="https://github.com/HabebNawatha/SoftwareEngineeringProjectSloth"
        />
        <ProjectCard 
          title="Github Mining & Analyis"
          description="Perfomed a research regarding github projects using Python."
          link="https://github.com/HabebNawatha/AdvancedSoftwareEngineer"
        />
         <ProjectCard 
          title="Domain SSL Manager"
          description="Build a web platform for managing Domain's SSL certificates."
          link="https://github.com/HabebNawatha/DomainsSSLManager"
        />
         <ProjectCard 
          title="Gathering of Gamers"
          description="Annovative anroid application for connecting gamers together using real-time chat & recommendation system."
          link="https://github.com/HabebNawatha/GatheringOfGamers"
        />
      </div>
    </div>
  );
}

export default Projects;
