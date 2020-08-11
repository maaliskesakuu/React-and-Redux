import React from "react";
import { NavLink } from "react-router-dom";

const NonRegisteredUserLinks = () => {
  return (
    <div>
      <ul id="nav-mobile" class="right hide-on-small-and-down">
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NonRegisteredUserLinks;
