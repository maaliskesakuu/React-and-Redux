import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increase, decrease, addFive, removeFive, reset } from '../actions/actions';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  // if in reducer there is state = 0
  // const counter = useSelector(state => state);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counts: {counter}</h1>
      <button onClick={() => dispatch(increase())}>Increase one</button>
      <button onClick={() => dispatch(decrease())}>Decrease one</button>
      <button onClick={() => dispatch(addFive())}>Add five</button>
      <button onClick={() => dispatch(removeFive())}>Remove five</button>
      <button onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
