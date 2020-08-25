// import React from "react";
// import AllPosts from "../Posts/AllPosts";
// import { Redirect } from "react-router-dom";

// const Feeds = props => {
//   return (
//     <div className="container">
//       {props.uid ? <AllPosts /> : <Redirect to="/login" />}
//     </div>
//   );
// };

// export default Feeds;

import React, { Component } from "react";
import Notifications from "./Notifications";
import AllPosts from "../Posts/AllPosts";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Feeds extends Component {
  render() {
    // console.log(this.props)
    const { posts } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <AllPosts posts={posts} />
            </div>
            <div className="col s12 m5 offser-m1">
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
  firestoreConnect([
    {collection: 'posts'}
  ])
)(Feeds);
