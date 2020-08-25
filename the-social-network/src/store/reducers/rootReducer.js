import authReducer from "./authReducer";
import postReducer from "./postReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  firestore: firestoreReducer
});

export default rootReducer;

// const initialState = {
//   posts: [],
//   userData: {},
//   userActionErr: null,
// };

// const rootReducer = (state = initialState, action) => {

//   switch (action.type) {
//     case "CREATE_NEW_POST":
//       console.log("A new post has been added");
//       return state;
//     case "CREATE_NEW_POST_FAILED":
//       console.log("An error has occurred: " + action.err.message);
//       return {
//         ...state,
//         userActionErr: action.err.message,
//       };
//     case "REMOVE_ALL_POSTS":
//       return {
//         ...state,
//         posts: [],
//       };
//     case "SHOW_ALL_POSTS":
//       console.log("Hopefully some posts ...");
//       console.log(state)
//       return { ...state, action };
//     default:
//       return state;
//   }

//   export default rootReducer;

// what below not needed
// console.log("Current state is: ");
// console.log(state);
// if (action.type === "CREATE_NEW_POST")
//   return {
//     posts: [...state.posts, action.post],
//   };
// if (action.type === "REMOVE_ALL_POSTS")
//   return {
//     ...state, posts:[],
//   };
// return state;
// };

// With switch
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "CREATE_NEW_POST":
//       return {
//         posts: [...state.posts, action.post],
//       };
//     default:
//       return state;
//   }
// };
