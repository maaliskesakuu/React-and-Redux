import React from "react";
// import './App.css';
import NavigationBar from "./Components/Layout/NavigationBar";
import LogIn from "./Components/Auth/LogIn";
import Register from "./Components/Auth/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogOut from "./Components/Auth/LogOut";
import Feeds from "./Components/HomePage/Feeds";
import NewPost from "./Components/Posts/NewPost";
import PostDetails from "./Components/Posts/PostDetails";

function App() {
  return (
    <Router>
      <NavigationBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Feeds />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/logout">
            <LogOut />
          </Route>
          <Route exact path="/newpost">
            <NewPost />
          </Route>
          <Route exact path="/post">
            <PostDetails />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
