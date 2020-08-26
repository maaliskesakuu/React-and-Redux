import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const RegisteredUserLinks = props => {
  return (
    <div>
      <ul id="nav-mobile" className="right">
        <li>
          <NavLink to="/create">Create New Post</NavLink>
        </li>
        <li><a onClick={props.signOut}>Log Out</a></li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(RegisteredUserLinks);
