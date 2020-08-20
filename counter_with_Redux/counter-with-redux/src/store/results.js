import * as actionTypes from '../actions';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET:
      return { ...state, counter: 0 };
    case actionTypes.DELETE_RESULT:
      return { ...state, results: [] };
    case actionTypes.DELETE:
      const updateArray = state.results.filter(
        item => item.id !== action.resultItem
      );
      return { ...state, results: updateArray };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), result: action.result}),
      };
  }
  return state;
};

const initialState = {
  results: [],
};

export default reducer;

