import React from 'react';

function Pre({ load }) {
  return (
    <div className={`preloader ${load ? 'visible' : 'hidden'}`}>
      Loading...
    </div>
  );
}

export default Pre;
