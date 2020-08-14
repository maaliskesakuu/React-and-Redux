const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREASE":
      return { ...state, counter: state.counter - 1 };
    case "ADDFIVE":
      return { ...state, counter: state.counter + action.value };
    case "REMOVEFIVE":
      return { ...state, counter: state.counter - action.value };
    case "RESET":
      return { ...state, counter: 0 };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
  }
  return state;
};

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
