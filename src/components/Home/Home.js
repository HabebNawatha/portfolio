import React from 'react';
import './Home.css';
import WaveAnimation from '../../Assets/waves/WaveAnimation';
import WaveEmoji from '../../Assets/waves/WaveEmoji';

function Home() {
  return (
    <div className='home-section'>
      <div className='home-grid'>
        <div className='left-grid'>
          
        </div>
        <div className='right-grid'>
            <div className='waving-container'>
            <span className='larger-text'>Hi!</span><WaveEmoji/>
       </div>
          <h2>I'm Habeb Nawatha</h2>
          <p>Welcome to my Portfolio!</p>
          <WaveAnimation/>
        </div>
      </div>
    </div>
  );
}

export default Home;
