import React from 'react';

const Dashboard = ({ incrementBalls, incrementStrikes, strikes, resetCount }) => {
  const handleFoul = () => {
    if (strikes < 2) {
      incrementStrikes();
    }
  }

  return (
    <div>
        <button onClick= {incrementBalls}>Ball</button>
        <button onClick={incrementStrikes}>Strike</button>
        <button onClick={handleFoul}>Foul</button>
        <button onClick={resetCount}>Hit</button>
    </div>
  );
}

export default Dashboard;