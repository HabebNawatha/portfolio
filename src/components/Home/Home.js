import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import WaveAnimation from '../../Assets/waves/WaveAnimation';
import WaveEmoji from '../../Assets/waves/WaveEmoji';
import Type from '../../Assets/typewriter/Type';
import RightImage from '../../Assets/images/pic1.png';
import resume from '../../Assets/files/resume.pdf';
import { AiOutlineDownload } from 'react-icons/ai';

function Home() {
  const handleDownloadResume = () => {
    window.open(resume, "_blank");
  };

  return (
    <div className='home-section'>
      <div className='home-grid'>
        <div className='left-grid'>
          <div>
            <div className='waving-container'>
              <span className='larger-text'>Hi There!</span><WaveEmoji />
            </div>
            <div className='name-div'>
              <span>I'M </span>
              <span className='name-span'>HABEB NAWATHA</span>
            </div>
            <div className='typewriter-div'>
              <Type />
            </div>
          </div>
          <div className='quote-div'>
            <h5>Programmer: A machine that turns coffee into code.</h5>
            <a href={resume} download className='btn'>
              <AiOutlineDownload /> Download CV
            </a>
          </div>
        </div>
        <div className='right-grid'>
          <img src={RightImage} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Home;
