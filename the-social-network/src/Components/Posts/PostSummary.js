import React from "react";

const PostSummary = ({ post }) => {
  return (
    <div className="card z-depth-0">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{post.title}</span>
        <p>Posted by me</p>
        <p className="grey-text">3rd September, 2 am</p>
      </div>
    </div>
  );
};

export default PostSummary;
