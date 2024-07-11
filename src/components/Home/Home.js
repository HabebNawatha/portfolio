import React from 'react';
import './Home.css';
import WaveEmoji from '../../Assets/waves/WaveEmoji';
import Type from '../../Assets/typewriter/Type';
import RightImage from '../../Assets/images/pic1.png';
import ResumeBtn from "../../Assets/ResumeBtn/ResumeBtn.js";

function Home() {

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
            <ResumeBtn/>
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
