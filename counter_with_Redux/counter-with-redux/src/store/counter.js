import * as actionTypes from "../actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREASE:
      return { ...state, counter: state.counter - 1 };
    case actionTypes.ADDFIVE:
      return { ...state, counter: state.counter + action.value };
    case actionTypes.REMOVEFIVE:
      return { ...state, counter: state.counter - action.value };
    case actionTypes.RESET:
      return { ...state, counter: 0 };
  }
  return state;
};

const initialState = {
  counter: 0,
};

export default reducer;
