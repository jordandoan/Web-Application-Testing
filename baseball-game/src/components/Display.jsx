import React from 'react';

const Display = ({strikes, balls}) => {
  return (
    <div>
      <div>
        <p>{strikes}</p>
      </div>
      <div>
        <p>{balls}</p>
      </div>
    </div>
  );
}

export default Display;