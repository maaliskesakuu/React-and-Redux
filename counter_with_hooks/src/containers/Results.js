import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeResult } from '../actions/actions'

const Results = () => {
  const results = useSelector(state => state.results.results);
  const CurrentState = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(storeResult(CurrentState))}>Store the results</button>
      <ul>
        {results.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
