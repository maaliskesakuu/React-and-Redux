import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        <Logo />
        <ul id="nav-mobile" class="right hide-on-small-and-down">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="logout">Logout</Link>
          </li>
          <li>
            <Link to="newpost">New Post</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
