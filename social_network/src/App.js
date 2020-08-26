import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/Layout/NavBar";
import LogIn from "./components/Auth/LogIn";
import Register from "./components/Auth/Register";
import LogOut from "./components/Auth/LogOut";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={LogIn}></Route>
        <Route exact path="/logout" component={LogOut}></Route>
      </Switch>
    </Router>
  );
}

export default App;
