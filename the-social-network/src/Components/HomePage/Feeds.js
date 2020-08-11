import React from "react";
import AllPosts from "../Posts/AllPosts";
import Notifications from "./Notifications";

const Feeds = () => {
  return (
    <div className="container">
      <Notifications />
      <AllPosts />
    </div>
  );
};

export default Feeds;
