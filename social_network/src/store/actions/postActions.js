export const createPost = post => {
  return (dispatch, getState, storeEnhancers) => {
    storeEnhancers
      .getFirestore()
      .collection("posts")
      .add({ ...post, created_at: new Date() })
      .then(() => {
        dispatch({ type: "CREATE_POST", post });
      })
      .catch(err => {
        dispatch({ type: "CREATE_POST_ERROR", err });
      });
  };
};
