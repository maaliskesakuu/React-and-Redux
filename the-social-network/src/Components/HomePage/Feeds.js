// import React from "react";
// import AllPosts from "../Posts/AllPosts";
// import { Redirect } from "react-router-dom";

// const Feeds = props => {
//   return (
//     <div className="container">
//       {props.uid ? <AllPosts /> : <Redirect to="/login" />}
//     </div>
//   );
// };

// export default Feeds;

import React, { Component } from "react";
import Notifications from "./Notifications";
import AllPosts from '../Posts/AllPosts';

class Feeds extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <AllPosts />
            </div>
            <div className="col s12 m5 offser-m1">
              <Notifications />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feeds;
