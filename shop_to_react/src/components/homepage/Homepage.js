import React, { Component } from "react";
import Slideshow from "../layout/Slideshow";
import Blog from "../layout/Blog";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Slideshow />
        <Blog />
      </div>
    );
  }
}

export default Homepage;
