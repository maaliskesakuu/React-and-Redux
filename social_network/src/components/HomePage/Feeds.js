import React, { Component } from "react";
import AllPosts from "../Posts/AllPosts";
import Notifications from "./Notifications";

class Feeds extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <AllPosts posts={posts} />
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
