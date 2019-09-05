import React, { useEffect } from 'react';

import { useCounter } from './hooks/useCounter';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

import './App.css';

function App() {
  let [balls, incrementBalls, resetBalls] = useCounter();
  let [strikes, incrementStrikes, resetStrikes] = useCounter();
  const resetCount = () => {
    resetStrikes();
    resetBalls();
  }
  useEffect(() => {
    if (strikes === 3 || balls === 4) {
      resetCount();
    }
  }, [balls,strikes]);

  return (
    <div className="container">
      <h1>Your Current Batter</h1>
      <Dashboard resetCount={resetCount} strikes={strikes} incrementBalls={incrementBalls} incrementStrikes={incrementStrikes}/>
      <Display balls={balls} strikes={strikes}/>
    </div>
  );
}

export default App;
