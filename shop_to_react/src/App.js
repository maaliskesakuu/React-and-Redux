import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./components/homepage/Homepage";
import Detailpage from "./components/detailpage/Detailpage";

import Topbar from './components/layout/Topbar/Topbar';
import Navbar from './components/layout/Navbar/Navbar';
import Carousel from './components/layout/Carousel';
import Advantages from './components/layout/Advantages';
import Footer from './components/layout/Footer';
import Copyright from './components/layout/Copyright';

function App() {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <Carousel />
      <Advantages />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/detailpage" component={Detailpage}></Route>
      </Switch>
      <Footer />
      <Copyright />
    </Router>
  );
}

export default App;
