import React, { Component } from "react";
import Slideshow from "../layout/Slideshow";
import Blog from "../layout/Blog";

class Homepage extends Component {
  render() {
    return (
      <div id="content">
        <Slideshow />
        <Blog />
      </div>
    );
  }
}

export default Homepage;
