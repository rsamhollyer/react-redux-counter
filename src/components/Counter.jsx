import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Decrement from './Decrement';
import Increment from './Increment';
import Output from './Output';
import {
  actionIncrement,
  actionDecrement,
  INCREMENT,
  DECREMENT,
} from '../actions';

export default function Counter() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.count);
  const handleClick = (action) => {
    if (action === INCREMENT) {
      dispatch(actionIncrement());
    } else {
      dispatch(actionDecrement());
    }
  };

  return (
    <div>
      <h1>The most amazing counter app ever</h1>
      <Output amount={count} />
      <Increment handleClick={() => handleClick(INCREMENT)} />
      <Decrement handleClick={() => handleClick(DECREMENT)} />
    </div>
  );
}
