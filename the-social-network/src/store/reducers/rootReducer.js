// const currentTime = new Date();

const initialState = {
  posts: [{ "title": 1, "content": 1 }],
  userData: {},
  userActionErr: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW_POST":
      console.log("A new post has been added");
      return state;
    case "CREATE_NEW_POST_FAILED":
      console.log("An error has occurred: " + action.err.message);
      return {
        ...state,
        userActionErr: action.err.message,
      };
    case "REMOVE_ALL_POSTS":
      return {
        ...state,
        posts: [],
      };
    default:
      return state;
  }
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
};

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

export default rootReducer;
