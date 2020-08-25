import React from "react";
import { NavLink } from "react-router-dom";

const NonRegisteredUserLinks = () => {
  return (
    <div>
      <ul id="nav-mobile" className="right">
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
