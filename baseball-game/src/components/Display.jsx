import React from 'react';

const Display = ({strikes, balls, outs}) => {
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
      <div className="score-container">
        <p>Outs</p>
        <p className="score">{outs}</p>
      </div>
    </div>
  );
}

export default Display;