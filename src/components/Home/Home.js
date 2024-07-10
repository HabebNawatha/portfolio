import React from 'react';
import './Home.css';
import WaveAnimation from '../../Assets/waves/WaveAnimation';
import WaveEmoji from '../../Assets/waves/WaveEmoji';
import Type from '../../Assets/typewriter/Type';
import RightImage from '../../Assets/images/pic1.png';


function Home() {
  return (
    <div className='home-section'>
      <div className='home-grid'>
        <div className='left-grid'>
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
          <WaveAnimation />
        </div>
        <div className='right-grid'>
          <img src={RightImage} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Home;
