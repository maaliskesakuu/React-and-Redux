import React from "react";
import { NavLink } from "react-router-dom";

const RegisteredUserLinks = () => {
  return (
    <div>
      <ul id="nav-mobile" className="right">
        <li><NavLink to="/create">Create New Post</NavLink></li>
        <li>
          <NavLink to="/logout">Log out</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default RegisteredUserLinks;
