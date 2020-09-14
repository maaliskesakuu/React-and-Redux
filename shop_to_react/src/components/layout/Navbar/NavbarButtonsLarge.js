import React, { Component } from "react";

class NavbarButtonsLarge extends Component {
  render() {
    return (
      <div className="navbar-buttons d-flex justify-content-end">
        <div id="search-not-mobile" className="navbar-collapse collapse"></div>
        <a
          data-toggle="collapse"
          href="#search"
          className="btn navbar-btn btn-primary d-none d-lg-inline-block"
        >
          <span className="sr-only">Toggle search</span>
          <i className="fa fa-search"></i>
        </a>
        <div
          id="basket-overview"
          className="navbar-collapse collapse d-none d-lg-block"
        >
          <a href="basket.html" className="btn btn-primary navbar-btn">
            <i className="fa fa-shopping-cart"></i>
            <span>3 items in cart</span>
          </a>
        </div>
      </div>
    );
  }
}

export default NavbarButtonsLarge;
