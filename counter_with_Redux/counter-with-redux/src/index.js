import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";

import counter from './store/counter';
import results from './store/results'
// import reducer from "./store/reducer";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  ctr: counter,
  res: results
})

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
