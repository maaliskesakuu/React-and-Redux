import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actionTypes from "../actions/actions";

const Counter = () => {
  const counter = useSelector(state => state.counter);
  // if in reducer there is state = 0
  // const counter = useSelector(state => state);

  const dispatch = useDispatch();

  const increase = () => ({
    type: actionTypes.INCREASE,
  });

  const decrease = () => ({
    type: actionTypes.DECREASE,
  });

  const addFive = () => ({
    type: actionTypes.ADD,
    value: 5,
  });

  const removeFive = () => ({
    type: actionTypes.REMOVE,
    value: 5,
  });

  const reset = () => ({
    type: actionTypes.RESET,
  });

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
