import React, { Component } from "react";

class NavbarButtons extends Component {
  render() {
    return (
      <div>
        <div className="navbar-buttons">
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            className="btn btn-outline-secondary navbar-toggler"
          >
            <span className="sr-only">Toggle navigation</span>
            <i className="fa fa-align-justify"></i>
          </button>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#search"
            className="btn btn-outline-secondary navbar-toggler"
          >
            <span className="sr-only">Toggle search</span>
            <i className="fa fa-search"></i>
          </button>
          <a
            href="basket.html"
            className="btn btn-outline-secondary navbar-toggler"
          >
            <i className="fa fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default NavbarButtons;
