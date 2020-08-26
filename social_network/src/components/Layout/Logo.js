import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link
        to="/"
        className="brand-logo"
        style={{ paddingLeft: "15px", paddingRight: "15px" }}
      >
        My Logo
      </Link>
    </div>
  );
};

export default Logo;
