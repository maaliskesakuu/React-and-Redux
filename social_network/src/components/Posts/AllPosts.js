import React from 'react';
import PostSummary from "./PostSummary";

const AllPosts = ({ posts }) => {
  return (
    <div className="section">
      {posts &&
        posts.map(post => {
          return <PostSummary post={post} key={post.id} />;
        })}
    </div>
  );
};

export default AllPosts;
