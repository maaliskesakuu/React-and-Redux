import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/Layout/NavBar";
import LogIn from "./components/Auth/LogIn";
import Register from "./components/Auth/Register";
import CreateNewPost from "./components/Posts/CreateNewPost";
import PostDetails from "./components/Posts/PostDetails";
import Feeds from "./components/HomePage/Feeds";
import Firebase from 'firebase';
import { FIREBASE_CONFIG as firebaseConfig } from './config/firebaseConfig';

Firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Feeds}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={LogIn}></Route>
        <Route exact path="/create" component={CreateNewPost}></Route>
        <Route exact path="/post/:id" component={PostDetails}></Route>
      </Switch>
    </Router>
  );
}

export default App;
