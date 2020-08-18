import React from "react";
// import { Link } from "react-router-dom";

const PostDetails = () => {
  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Post</span>
              <span className="card-content">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quaerat ipsum sunt quam dolore ipsa neque, incidunt cupiditate
                  ab saepe, earum vel accusamus quidem fugiat dolores!
                </p>
              </span>
            </div>
            {/* <div className="card-action">
              <Link exact to="/">
                To homepage
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
