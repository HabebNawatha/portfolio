import React from 'react';
import './About.css'; // Make sure to create and import the CSS file for styling
import WaveEmoji from '../../Assets/waves/WaveEmoji';
import TechStackCard from './TechStackCard';
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiHtml5,
    DiCss3,
    DiMysql,
    DiDocker,
} from "react-icons/di";
import {
    SiTypescript,
    SiC,
    SiCsharp,
    SiFirebase
} from "react-icons/si";


function About() {
    const techStack = [
        { Icon: DiJava, alt: "Java" },
        { Icon: DiJavascript1, alt: "JavaScript" },
        { Icon: DiPython, alt: "Python" },
        { Icon: SiTypescript, alt: "TypeScript" },
        { Icon: SiC, alt: "C" },
        { Icon: SiCsharp, alt: "C#" },
        { Icon: DiHtml5, alt: "HTML5" },
        { Icon: DiCss3, alt: "CSS3" },
        { Icon: DiMysql, alt: "MySQL" },
        { Icon: DiReact, alt: "React" },
        { Icon: DiNodejs, alt: "Node.js" },
        { Icon: DiMongodb, alt: "MongoDB" },
        { Icon: SiFirebase, alt: "Firebase" },
        { Icon: DiDocker, alt: "Docker" },
        { Icon: DiGit, alt: "Git" },
    ];
    return (
        <div className="about-main-container">
            <div className='about-left-grid'>
                <div className='about-me-section'>
                    <h3>Hi, I'm <span className='name-span'>Habeb Nawatha</span>!</h3>
                    <p>
                        <span>I'm a passionate developer dedicated to creating innovative and impactful software solutions.</span>
                        <span>Holding a <span className='name-span'>BSc in Information Systems </span>from the University of Haifa,</span>
                        <span>I'm always <span className='name-span'>eager</span> to explore and master new technologies.</span>
                    </p>
                </div>

            </div>
            <div className='tech-stack-section'>
                <h3>💻 <span className='name-span'>Tech Stack</span></h3>
                <div className="tech-stack">
                    {techStack.map((tech, index) => (
                        <TechStackCard key={index} Icon={tech.Icon} alt={tech.alt} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
