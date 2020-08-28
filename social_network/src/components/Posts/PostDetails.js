import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const PostDetails = props => {
  const { post, auth } = props;

  if (!auth.uid) return <Redirect to="/login" />;
  if (post) {
    const authorId = post.authorId;

    const shortenedAuthorId = authorId.substring(0, 5).concat("...");

    return (
      <div className="container section" style={{ paddingTop: "5rem" }}>
        <div className="card z-depth-5">
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <p>{post.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text text-darken-1">
            <div className="card-text text-darken-1">
              <div>Posted by {shortenedAuthorId}</div>
              <div>
                {moment(post.created_at.toDate().toString()).calendar()}
              </div>
            </div>
          </div>
        </div>
          <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Back to Front Page
              <i className="material-icons right">send</i>
            </button>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

/*The second parameter, ownProps, is needed to get access to the id. It is the props of the component before we attach anything else to it. */
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(PostDetails);
