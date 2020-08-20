import * as actionTypes from '../actions';

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
    case actionTypes.DELETE_RESULT:
      return { ...state, results: [] };
    case actionTypes.DELETE:
      const updateArray = state.results.filter(
        item => item.id !== action.resultItem
      );
      return { ...state, results: updateArray };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
  }
  return state;
};

// switch is used instead of if statements
// if (action.type === "INCREMENT") {
//   return {
//     ...state,
//     counter: state.counter + 1,
//   };
// }
// if (action.type === "DECREASE") {
//   return {
//     ...state,
//     counter: state.counter - 1,
//   };
// }
// if (action.type === "ADDFIVE") {
//   return {
//     ...state,
//     counter: state.counter + action.value,
//   };
// }
// if (action.type === "REMOVEFIVE") {
//   return {
//     ...state,
//     counter: state.counter - action.value,
//   };
// }
// if (action.type === "RESET") {
//   return {
//     ...state,
//     counter: 0,
//   };
// }
// return state;
// };

const initialState = {
  counter: 0,
  results: [],
};

export default reducer;
