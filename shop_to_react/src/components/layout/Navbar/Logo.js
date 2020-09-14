import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <div>
        <a href="index.html" className="navbar-brand home">
          <img
            src="img/logo.png"
            alt="Obaju logo"
            className="d-none d-md-inline-block"
          />
          <img
            src="img/logo-small.png"
            alt="Obaju logo"
            className="d-inline-block d-md-none"
          />
          <span className="sr-only">Obaju - go to homepage</span>
        </a>
      </div>
    );
  }
}

export default Logo;
