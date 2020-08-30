import * as actionTypes from "../actions/actions";

const resultsReducer = (state = {
  results: [],
}, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULTS:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.exportedResult,
        }),
      };
    case actionTypes.REMOVE_RESULTS:
      const updatedArray = state.results.filter(
        result => result.id !== action.id
      );
      return {
        ...state,
        results: updatedArray,
      };

    default:
      return state;
  }
};

export default resultsReducer;
