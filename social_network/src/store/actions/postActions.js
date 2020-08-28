// export const createPost = (post) => {
//   return (dispatch, getState, storeEnhancers) => {
//     storeEnhancers
//       .getFirestore()
//       .collection("posts")
//       .add({ ...post, created_at: new Date() })
//       .then(() => {
//         dispatch({ type: "CREATE_POST", post });
//       })
//       .catch(err => {
//         dispatch({ type: "CREATE_POST_ERROR", err });
//       });
//   };
// };

export const createPost = post => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("posts")
      .add({ ...post, authorId: authorId, created_at: new Date() })
      .then(() => {
        dispatch({ type: "CREATE_POST", post });
      })
      .catch(err => {
        dispatch({ type: "CREATE_POST_ERROR", err });
      });
  };
};
