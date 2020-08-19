const currentTime = new Date();

const initialState = {
  posts: [
    {
      id: "first",
      title: " 1. sample title",
      content: "1. sample content",
      time: currentTime,
    },
    {
      id: "second",
      title: "2. sample title",
      content: "2. sample content",
      time: currentTime,
    },
    {
      id: "third",
      title: "3. sample title",
      content: "3. sample content",
      time: currentTime,
    },
    {
      id: "fourth",
      title: "4. sample title",
      content: "4. sample content",
      time: currentTime,
    },
    {
      id: "fifth",
      title: "5. sample title",
      content: "5. sample content",
      time: currentTime,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  console.log("Current state is: ");
  console.log(state);
  if (action.type === "CREATE_NEW_POST")
    return {
      posts: [...state.posts, action.post],
    };
  if (action.type === "REMOVE_ALL_POSTS")
    return {
      ...state, posts:[],
    };
  return state;
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
