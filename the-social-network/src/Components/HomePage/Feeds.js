import React from 'react';
import AllPosts from "./AllPosts";
import Notifications from "./Notifications";

const Feeds = () => {
  return (
    <div>
      Newsfeed
      <AllPosts />
      <Notifications />
    </div>
  );
}

export default Feeds;
