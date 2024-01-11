import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';

export default function Counter() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counterReducerValue.counter);

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <button onClick={incrementHandler}>Increment</button>
      <div>{counter}</div>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
}
