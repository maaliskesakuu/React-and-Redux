import React from "react";
import { NavLink } from "react-router-dom";

const RegisteredUserLinks = () => {
  return (
    <div>
      <ul id="nav-mobile" class="right hide-on-small-and-down">
        <li>
          <NavLink to="logout">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default RegisteredUserLinks;
