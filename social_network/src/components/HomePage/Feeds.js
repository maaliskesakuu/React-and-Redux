import React, { Component } from "react";
import AllPosts from "../Posts/AllPosts";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Feeds extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div style={{ backgroundColor: "whitesmoke", minHeight: '100%', paddingBottom: '1rem'}}>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <AllPosts posts={posts} />
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications />
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
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(Feeds);
