import React from "react";
import { NavLink } from "react-router-dom";

const RegisteredUserLinks = () => {
  return (
    <div>
      <ul id="nav-mobile" className="right hide-on-small-and-down">
        <li><NavLink to="create">Create New Post</NavLink></li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default RegisteredUserLinks;
