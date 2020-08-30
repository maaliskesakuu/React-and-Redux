export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const RESET = "RESET";
export const STORE_RESULTS = "STORE_RESULTS";
export const REMOVE_RESULTS = "REMOVE_RESULTS";

const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const addFive = () => ({
  type: ADD,
  value: 5,
});

const removeFive = () => ({
  type: REMOVE,
  value: 5,
});

const reset = () => ({
  type: RESET,
});

const storeResult = currentState => ({
  type: STORE_RESULTS,
  exportedResult: currentState,
});

const removeResult = id => ({
  type: REMOVE_RESULTS,
  id: id,
});

export {
  increase,
  decrease,
  addFive,
  removeFive,
  reset,
  storeResult,
  removeResult,
};
