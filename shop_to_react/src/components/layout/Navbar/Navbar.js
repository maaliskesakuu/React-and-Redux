import React, { Component } from "react";
import Logo from "./Logo";
import NavbarButtons from "./NavbarButtons";
import MenuProducts from "./MenuProducts";
import Search from "./Search";
import NavbarButtonsLarge from "./NavbarButtonsLarge";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Logo />
            <NavbarButtons />
            <MenuProducts />
            <NavbarButtonsLarge />
          </div>
        </nav>
        <Search />
      </div>
    );
  }
}

export default Navbar;
