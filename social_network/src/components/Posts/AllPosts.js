import React from "react";
import PostSummary from "./PostSummary";
import { Link } from "react-router-dom";

const AllPosts = ({ posts }) => {
  return (
    <div className="section" style={{border: "1px solid #333", borderRadius: "3px"}}>
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
