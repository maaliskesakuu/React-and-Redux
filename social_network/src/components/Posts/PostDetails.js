import React from "react";

const PostDetails = props => {
  return (
    <div className="container section">
      <div className="card z-depth-o">
        <div className="card-content">
          <span className="card-title">Post Title</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non
            voluptatum alias maxime officiis. Iusto obcaecati at quae a, placeat
            minima suscipit sunt expedita blanditiis sequi rem cumque vitae
            assumenda.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by me</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
