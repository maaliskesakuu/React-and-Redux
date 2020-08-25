import React, { Component } from "react";
import PostSummary from "./PostSummary";
import { connect } from "react-redux";
import { removePosts, showAllPosts } from "../../store/actions/postActions";

class AllPosts extends Component {

  handleSubmission = e => {
    e.preventDefault();
    this.props.showAllPosts()({
      title: this.props.posts.title,
      content: this.props.posts.content,
    });
  }

  render() {
    return (
      <div className="container">
        <h2>All Posts</h2>
        {this.props.posts
          ? this.props.posts.map(post => (
              // <PostSummary post={post} key={Math.random() * 99} />
              <PostSummary post={post} key={post.id} />
            ))
          : "Loading ..."}
        <button
          className="btn"
          style={{ marginBottom: "0.5rem" }}
          onClick={this.props.removePost}
        >
          Remove all posts
        </button>
        <button
          className="btn"
          style={{ marginBottom: "0.5rem", marginLeft: "0.5rem"  }}
          onClick={this.props.showAllPosts}
        >
          Show all posts
        </button>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     removePost: () => {
//       dispatch({ type: "REMOVE_ALL_POSTS" });
//     },
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    removePost: () => dispatch(removePosts()),
    showAllPosts: () => dispatch(showAllPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);

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
