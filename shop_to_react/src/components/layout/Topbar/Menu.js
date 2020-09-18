import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <>
        <div className="col-lg-6 text-center text-lg-right">
          <ul className="menu list-inline mb-0">
            <li className="list-inline-item">
              <a href="#" data-toggle="modal" data-target="#login-modal">
                Login
              </a>
            </li>
            <li className="list-inline-item">
              <a href="register.html">Register</a>
            </li>
            <li className="list-inline-item">
              <a href="contact.html">Contact</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Recently viewed</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Menu;
