import React, { Component } from "react";
import LogIn from "../../auth/LogIn";
import Menu from "./Menu";

class Topbar extends Component {
  render() {
    return (
      <div id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offer mb-3 mb-lg-0">
              <a href="#" className="btn btn-success btn-sm">
                Offer of the day
              </a>
              <a href="#" className="ml-1">
                Get flat 35% off on orders over $50!
              </a>
            </div>
            <Menu />
          </div>
        </div>
        <LogIn />
      </div>
    );
  }
}

export default Topbar;
