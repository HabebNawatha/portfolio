import React from 'react';
import './WaveEmoji.css'; // Import CSS for styling

function WaveEmoji() {
  return (
    <div className="wave-container">
      <span role="img" aria-label="wave" className="hand-emoji">
        👋
      </span>
    </div>
  );
}

export default WaveEmoji;
