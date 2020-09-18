import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Logo extends Component {
  render() {
    return (
      <div>
        <Link to="/" className="navbar-brand home">
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
        </Link>
      </div>
    );
  }
}

export default Logo;
