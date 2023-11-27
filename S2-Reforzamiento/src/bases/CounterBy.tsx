import { useState } from 'react';

interface CounterProps {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  click: number;
}

export const CounterBy = ({ initialValue = 10 }: CounterProps) => {
  const [{ counter, click }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    click: 0,
  });

  const handleClick = (value: number) => {
    setCounterState(({ counter, click }) => ({
      counter: counter + value,
      click: click + 1,
    }));
  };

  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h2>Click: {click}</h2>

      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};
