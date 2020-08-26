import React from "react";
import Logo from "./Logo";
import RegisteredUserLinks from "./RegisteredUserLinks";
import NonRegisteredUserLinks from "./NonRegisteredUserLinks";
import { connect } from "react-redux";

const NavBar = props => {
  const { auth } = props;
  const links = auth.uid ? <RegisteredUserLinks /> : <NonRegisteredUserLinks />;
  return (
    <nav>
      <div className="nav-wrapper">
        <Logo />
        <ul id="nav-mobile" className="right">
          {links}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(NavBar);
