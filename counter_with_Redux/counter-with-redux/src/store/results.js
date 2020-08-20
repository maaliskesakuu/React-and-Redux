import * as actionTypes from "../actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_RESULT:
      return { ...state, results: [] };
    case actionTypes.DELETE:
      const updatedArray = state.results.filter(
        item => item.id !== action.resultItem
      );
      return { ...state, results: updatedArray };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
  }
  return state;
};

const initialState = {
  results: [],
  counter: 0,
};

export default reducer;
