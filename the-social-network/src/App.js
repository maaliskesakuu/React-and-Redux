import React from "react";
// import './App.css';
import NavigationBar from "./Components/Layout/NavigationBar";
import LogIn from "./Components/Auth/LogIn";
import Register from "./Components/Auth/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogOut from "./Components/Auth/LogOut";
import Feeds from "./Components/HomePage/Feeds";
import CreateNewPost from "./Components/Posts/CreateNewPost";
import PostDetails from "./Components/Posts/PostDetails";

function App() {
  return (
    <Router>
      <NavigationBar />
      <main>
        <Switch>
          <Route exact path="/" component={Feeds} />
          <Route path="/login" component={LogIn} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={LogOut} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/create" component={CreateNewPost} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
