// import Firebase from "firebase";

export const removePosts = () => {
  return { type: "REMOVE_ALL_POSTS" };
};

export const createPost = post => {
  // return { type: "CREATE_NEW_POST", post };
  return (dispatch, getState, storeEnhancers) => {
    storeEnhancers.getFirestore
      .collection("posts")
      .get()
      .then(resp => {
        console.log("resp is: ");
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
