import React from 'react';
import './About.css'; // Make sure to create and import the CSS file for styling
import WaveEmoji from '../../Assets/waves/WaveEmoji';

function About() {
    return (
        <div className="about-main-container">
            <div className='about-left-grid'>
                <div className='about-me-section'>
                    <h1>Hi, I'm <span className='name-span'>Habeb Nawatha</span>! 👋</h1>
                    <p className='about-me-p'>
                        <span>A dedicated developer with a passion for innovative and impactful software development, </span>
                        <span>Completed a <span className='name-span'>BSc in Information Systems </span>at University of Haifa. </span>
                        <span>Always <span className='name-span'>eager</span> to learn new things.</span>
                    </p>
                </div>
                <div className='tech-stack-section'>
                    <h2>💻 Tech Stack</h2>
                    <div className="tech-stack">
                        <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
                        <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
                        <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />
                        <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                        <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" alt="C" />
                        <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white" alt="C#" />
                        <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                        <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
                        <img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                        <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
                        <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
                        <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                        <img src="https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34" alt="Firebase" />
                        <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />

                    </div>
                </div>

            </div>
            <div className='about-right-grid'></div>
        </div>
    );
}

export default About;
