import React from 'react';
import './WaveAnimation.css'; // Import CSS for styling

function WaveAnimation() {
  return (
    <div className="wave-container">
      <div className="wave">
      <span className="symbol">&lt;</span>
        <span className="symbol">\</span>
        <span className="symbol">&gt;</span>
      </div>
    </div>
  );
}

export default WaveAnimation;
