import React, { Component } from "react";
import PostSummary from "./PostSummary";
import { connect } from "react-redux";

class AllPosts extends Component {
  render() {
    console.log("Received a state from reducer");
    console.log(this.props.posts);
    return (
      <div>
        {this.props.posts
          ? this.props.posts.map(post => (
              <PostSummary post={post} key={post.id} />
            ))
          : "Loading ..."}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(AllPosts);

// import React, { Component } from "react";
// import PostSummary from "./PostSummary";
// import Firebase from "firebase";

// class AllPosts extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { posts: null };
//   }

//   componentDidMount = () => {
//     Firebase.firestore()
//       .collection("posts")
//       .get()
//       .then(resp => {
//         this.setState({
//           posts: resp.docs,
//         });
//       })
//       .catch(err => {
//         console.log(err.message);
//       });
//   };

//   render() {
//     var x = 0;
//     return (
//       <div>
//         {this.state.posts
//           ? this.state.posts.map(post => (
//               <PostSummary post={post.data()} key={x++}></PostSummary>
//             ))
//           : "Loading..."}
//       </div>
//     );
//   }
// }

// export default AllPosts;
