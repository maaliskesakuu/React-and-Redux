import React, { Component } from "react";
import Logo from "./Logo";
import RegisteredUserLinks from "./RegisteredUserLinks";
import NonRegisteredUserLinks from "./NonRegisteredUserLinks";

class NavigationBar extends Component {
  render() {
    return (
      <nav className="nav-wrapper">
        <Logo />
        {this.props.uid ? (
          <ul className="right hide-on-small-and-down">
            <RegisteredUserLinks />
          </ul>
        ) : (
          <ul className="right hide-on-small-and-down">
            <NonRegisteredUserLinks />
          </ul>
        )}
      </nav>
    );
  }
}

export default NavigationBar;

// import React from "react";
// import Logo from "./Logo";
// // import { NavLink } from "react-router-dom";
// import RegisteredUserLinks from "./RegisteredUserLinks";
// import NonRegisteredUserLinks from "./NonRegisteredUserLinks";

// const NavigationBar = () => {
//   return (
//     <nav>
//       <div className="nav-wrapper">
//         <Logo />
//         <ul id="nav-mobile" className="right hide-on-small-and-down">
//           <NonRegisteredUserLinks />
//           <RegisteredUserLinks />
//           {/* <li>
//             <NavLink to="/login">Login</NavLink>
//           </li>
//           <li>¢
//             <NavLink to="/register">Register</NavLink>
//           </li>
//           <li>
//             <NavLink to="logout">Logout</NavLink>
//           </li>
//           <li>
//             <NavLink to="newpost">New Post</NavLink>
//           </li>
//           <li>
//             <NavLink to="post">Post</NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;
