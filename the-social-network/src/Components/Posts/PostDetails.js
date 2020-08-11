import React from "react";
import { Link } from "react-router-dom";

const PostDetails = () => {
  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Post</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
              <br />
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <Link exact to="/">To homepage</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
