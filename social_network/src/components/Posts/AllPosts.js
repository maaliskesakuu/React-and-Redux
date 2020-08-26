import React from "react";
import PostSummary from "./PostSummary";
import { Link } from "react-router-dom";

const AllPosts = ({ posts }) => {
  return (
    <div className="section">
      {posts &&
        posts.map(post => {
          return (
            <Link to={"/post/" + post.id} key={post.id}>
              <PostSummary post={post} />
            </Link>
          );
        })}
    </div>
  );
};

export default AllPosts;
