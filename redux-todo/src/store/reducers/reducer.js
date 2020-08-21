import * as actionTypes from "../../action";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_NOTE:
      return {
        ...state,
        notes: state.notes.concat({ id: new Date(), text: action.data }),
      };
    case actionTypes.REMOVE_NOTE:
      const updateArray = state.notes.filter(item => item.id !== action.item);
      return {
        ...state,
        notes: updateArray,
      };
  }
  return state;
};

const initialState = {
  notes: [
    // { id: 1, text: "this is my first note" },
    // { id: 2, text: "this is my second note" },
  ],
};

export default reducer;
