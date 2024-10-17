import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'; // Ensure you have a CSS file for styling

function Projects() {
  return (
    <div className='projects-main-section'>
      <div className='projects-section-intro'>
        <h1>Some of my Work</h1>
      </div>
      <div className='projects-section'>
        <ProjectCard 
          title="Knight's Move Challenge"
          description="Knight's Move Challenge featuring scoring, timing, and enhanced gameplay with the added challenge of avoiding capture by opponent queens and kings."
          link="https://github.com/HabebNawatha/SoftwareEngineeringProjectSloth"
        />
        <ProjectCard 
          title="Github Mining & Analyis"
          description="Research project analyzing GitHub repository structures by comparing diagram sizes across different coding languages. Done in Python, utilizing GitHub API, Selenium, and QuickDatabaseDiagram"
          link="https://github.com/HabebNawatha/AdvancedSoftwareEngineer"
        />
         <ProjectCard 
          title="Domain SSL Manager"
          description="SSL Certificate Management: A web application for managing domain's SSL certificates, allowing users to gather, track, and manage SSL certificate data efficiently."
          link="https://github.com/HabebNawatha/DomainsSSLManager"
        />
         <ProjectCard 
          title="Gathering of Gamers"
          description="Android app designed to enhance the gaming experience by connecting players. Like 'Tinder for gamers,' it matches users with others of similar skill levels and gaming interests."
          link="https://github.com/HabebNawatha/GatheringOfGamers"
        />
          <ProjectCard 
          title="Spring Boot Microservices"
          description="Developed & Deployed Microservices with Java Spring Boot, Spring Cloud, Docker, Kubernetes, Helm, Microservices Security"
          link="https://github.com/HabebNawatha/spring-boot-microservices"
        />
      </div>
    </div>
  );
}

export default Projects;
