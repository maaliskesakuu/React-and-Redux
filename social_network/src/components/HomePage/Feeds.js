import React, { Component } from "react";
import AllPosts from "../Posts/AllPosts";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Feeds extends Component {
  render() {
    const { posts, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <div className="container" style={{ paddingTop: "5rem" }}>
          <div className="row">
            <div className="col s12 m6">
              <AllPosts posts={posts} />
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications notifications={notifications} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "posts", orderBy: ["created_at", "desc"] },
    { collection: "notifications", limit: 4, orderBy: ["time", "desc"] },
  ])
)(Feeds);
