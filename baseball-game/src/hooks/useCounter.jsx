import { useState } from 'react';

export const useCounter = () => {
  let [value, setValue] = useState(0);

  const incrementValue = () => {
    setValue(value + 1)
  }

  const resetValue = () => {
    setValue(0);
  }
  
  return [value, incrementValue, resetValue];
}