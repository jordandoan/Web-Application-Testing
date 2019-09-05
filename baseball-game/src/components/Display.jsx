import React from 'react';

const Display = ({strikes, balls}) => {
  return (
    <div className="display">
      <div className="score-container">
        <p>Balls</p>
        <p className='score'>{balls}</p>
      </div>
      <div className="score-container">
        <p>Strikes</p>
        <p className="score">{strikes}</p>
      </div>
    </div>
  );
}

export default Display;