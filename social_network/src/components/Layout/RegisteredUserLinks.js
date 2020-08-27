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
        <li>
          <button
            style={{
              border: 0,
              color: "white",
              backgroundColor: "#ee6e73",
              paddingRight: "1rem",
              fontSize: '1rem'
            }}
            onClick={props.signOut}
          >
            Log Out
          </button>
        </li>
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
