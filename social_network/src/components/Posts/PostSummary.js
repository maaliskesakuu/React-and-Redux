import React from "react";
import moment from "moment";

const PostSummary = ({ post }) => {
  const authorId = post.authorId;

  const shortenedAuthorId = authorId.substring(0, 5).concat("...");

  return (
    <div className="card z-depth-2">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{post.title}</span>
        <p>Posted by {shortenedAuthorId}</p>
        <p className="grey-text text-darken-1">
          {moment(post.created_at.toDate().toString()).calendar()}
        </p>
      <div className="section green-text text-darken-4">Click to see more</div>
      </div>
    </div>
  );
};

export default PostSummary;
