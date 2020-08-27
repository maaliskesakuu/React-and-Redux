import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link
        to="/"
        className="brand-logo"
        style={{ paddingLeft: "1rem", paddingRight: '1rem' }}
      >
        My Logo
      </Link>
    </div>
  );
};

export default Logo;
