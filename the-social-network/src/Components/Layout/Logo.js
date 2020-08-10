import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/" class="brand-logo">
        My Logo
      </Link>
    </div>
  );
};

export default Logo;
