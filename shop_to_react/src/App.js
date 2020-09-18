import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import extraScript from "./components/extra/extraScript";

import Homepage from "./components/homepage/Homepage";
import Detailpage from "./components/detailpage/Detailpage";

import Topbar from "./components/layout/Topbar/Topbar";
import Navbar from "./components/layout/Navbar/Navbar";
import Carousel from "./components/layout/Carousel";
import Advantages from "./components/layout/Advantages";
import Footer from "./components/layout/Footer";
import Copyright from "./components/layout/Copyright";

class App extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      extraScript();
    }
  }
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default withRouter(props => <App {...props}/>);
