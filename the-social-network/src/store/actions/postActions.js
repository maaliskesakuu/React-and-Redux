export const removePosts = () => {
  return { type: "REMOVE_ALL_POSTS" };
};

export const createPost = function (post) {
  return (dispatch, getState, storeEnhancers) => {
    storeEnhancers
      .getFirestore()
      .collection("posts")
      .add(post)
      .then(() => {
        dispatch({ type: "CREATE_NEW_POST" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_NEW_POST_FAILED", err: err });
      });
  };
};

export const showAllPosts = function () {
  return (dispatch, getState, storeEnhancers) => {
    storeEnhancers
      .getFirestore()
      .collection("posts")
      .get()
      .then((resp) => {
        console.log(resp);
        console.log(resp.docs)
        console.log(resp.docs[0].data())
        dispatch({ type: "SHOW_ALL_POSTS"});
      })
      .catch(err => {
        console.log(err);
      });
  };
};
