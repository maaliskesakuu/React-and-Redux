// import Firebase from "firebase";

export const removePosts = () => {
  return { type: "REMOVE_ALL_POSTS" };
};

export const createPost = post => {
  return { type: "CREATE_NEW_POST", post };
};
