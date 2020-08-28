import React from "react";
import moment from 'moment';

const PostSummary = ({ post }) => {
  return (
    <div className="card z-depth-5">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{post.title}</span>
        <p>Posted by {post.authorId}</p>
        <p className="grey-text text-darken-1">{moment(post.created_at.toDate().toString()).calendar()}</p>
      </div>
    </div>
  );
};

export default PostSummary;
