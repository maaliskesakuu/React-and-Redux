import React from "react";
import moment from 'moment';

const PostSummary = ({ post }) => {
  return (
    <div className="card z-depth-0">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{post.title}</span>
        <p className="grey-text">{moment(post.created_at.toDate().toString()).calendar()}</p>
      </div>
    </div>
  );
};

export default PostSummary;
