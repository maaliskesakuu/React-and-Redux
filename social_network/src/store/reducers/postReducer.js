const initialState = {
  posts: [
    { id: "1", title: "1", content: "1" },
    { id: "2", title: "2", content: "2" },
    { id: "3", title: "3", content: "3" },
  ],
};

const postReducer = (state = initialState, action) => {
  // switch (action.type) {
  //   case "CREATE_POST":
  //     console.log("created post", action.post);
  //     return state;
  //   case "CREATE_POST_ERROR":
  //     console.log("create post error", action.err);
  //     return state;
  //   default:
      return state;
  // }
};

export default postReducer;