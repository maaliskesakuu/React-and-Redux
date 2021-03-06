import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { createStore, applyMiddleware, compose } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./store/reducers/rootReducer";
// import thunk from "redux-thunk";
// import {
//   createFirestoreInstance,
//   getFirestore,
//   reduxFirestore,
// } from "redux-firestore";
// import {
//   ReactReduxFirebaseProvider,
//   getFirebase
// } from "react-redux-firebase";
// import firebase from "firebase/app";
// import { FIREBASE_CONFIG as firebaseConfig } from "./config/firebaseConfig";

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
//     reduxFirestore(firebase, firebaseConfig)
//   )
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <ReactReduxFirebaseProvider
//       firebase={firebase}
//       config={firebaseConfig}
//       dispatch={store.dispatch}
//       createFirestoreInstance={createFirestoreInstance}
//     >
//       <App />
//     </ReactReduxFirebaseProvider>
//   </Provider>,
//   document.getElementById("root")
// );
