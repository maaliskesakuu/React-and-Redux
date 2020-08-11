import React from "react";
import {Link} from "react-router-dom"

const PostSummary = () => {
  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Post</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minima neque aliquam dolore magni nemo modi odit optio perspiciatis eius blanditiis, doloribus nobis consectetur alias dolorem unde dignissimos necessitatibus ipsam?
              </p>
            </div>
            <div className="card-action">
              <Link exact="true" to="/">
                To homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSummary;
