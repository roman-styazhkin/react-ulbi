import { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const state = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div data-testid="counter-block">
      <h1 data-testid="counter-title">{state}</h1>
      <Button data-testid="increment-btn" onClick={increment}>increment</Button>
      <Button data-testid="decrement-btn" onClick={decrement}>decrement</Button>
    </div>
  );
};
