import React, { useEffect } from 'react';

import { useCounter } from './hooks/useCounter';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

import './App.css';

function App() {
  let [balls, incrementBalls, resetBalls] = useCounter();
  let [strikes, incrementStrikes, resetStrikes] = useCounter();
  let [outs, incrementOuts, resetOuts] = useCounter();
  const resetCount = () => {
    resetStrikes();
    resetBalls();
  }
  useEffect(() => {
    if (strikes === 3 || balls === 4) {
      if (strikes === 3) {
        incrementOuts();
      }
      resetCount();
    }
    if (outs === 3) {
      resetOuts();
    }
  }, [balls,strikes]);

  return (
    <div className="container">
      <h1>Your Current Inning</h1>
      <Dashboard resetCount={resetCount} strikes={strikes} incrementBalls={incrementBalls} incrementStrikes={incrementStrikes}/>
      <Display outs={outs} balls={balls} strikes={strikes}/>
    </div>
  );
}

export default App;
