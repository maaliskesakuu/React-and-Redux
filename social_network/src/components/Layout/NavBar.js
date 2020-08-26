import React from "react";
import Logo from "./Logo";
import RegisteredUserLinks from "./RegisteredUserLinks";
import NonRegisteredUserLinks from "./NonRegisteredUserLinks";
import { connect } from 'react-redux';

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Logo />
        <ul id="nav-mobile" className="right">
          <NonRegisteredUserLinks />
          <RegisteredUserLinks />
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps)(NavBar);
