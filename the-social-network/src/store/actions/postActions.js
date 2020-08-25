export const createPost = post => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("posts")
      .add({ ...post, createdAt: new Date() })
      .then(() => {
        dispatch({ type: "CREATE_POST", post });
      })
      .catch(err => {
        dispatch({ type: "CREATE_POST_ERROR", err });
      });
  };
};

// export const removePosts = () => {
//   return { type: "REMOVE_ALL_POSTS" };
// };

// export const createPost = function (post) {
//   return (dispatch, getState, storeEnhancers) => {
//     storeEnhancers
//       .getFirestore()
//       .collection("posts")
//       .add(post)
//       .then(() => {
//         dispatch({ type: "CREATE_NEW_POST" });
//       })
//       .catch(err => {
//         dispatch({ type: "CREATE_NEW_POST_FAILED", err: err });
//       });
//   };
// };

// export const showAllPosts = function () {
//   return (dispatch, getState, storeEnhancers) => {
//     storeEnhancers
//       .getFirestore()
//       .collection("posts")
//       .get()
//       .then((resp) => {
//         console.log(resp);
//         console.log(resp.docs)
//         const data = resp.docs[0].data()
//         dispatch({ type: "SHOW_ALL_POSTS", data});
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
// };
