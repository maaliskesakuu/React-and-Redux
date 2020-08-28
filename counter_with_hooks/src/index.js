import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./reducers/counterReducer";
import resultsReducer from "./reducers/resultsReducer";

const rootReducer = combineReducers(
  { counter: counterReducer },
  { results: resultsReducer }
);

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
