import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import Firebase from "firebase";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";

class CreateNewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posted: false,
    };

    this.handleSubmission = this.handleSubmission.bind(this);

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmission = e => {
    e.preventDefault();
    // this.props.createPost({
    //   title: this.state.title,
    //   content: this.state.content,
    // });

    // Firebase.firestore()
    //   .collection("posts")
    //   .add({
    //     content: this.state.content,
    //     time: new Date(),
    //     title: this.state.title,
    //     user: Firebase.auth().currentUser.uid,
    //   })
    //   .then(() => {
    //     this.setState({
    //       posted: true,
    //     });
    //   });
  };

  render() {
    return (
      <div className="container">
        {this.state.posted ? <Redirect to="/" /> : ""}
        {!this.props.uid ? (
          <Redirect to="/login/" />
        ) : (
          <div className="row">
            <form className="col s12" onSubmit={this.handleSubmission}>
              <div className="row">
                {/* <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div> */}
                <div className="input-field col s12">
                  <textarea
                    id="postTitle"
                    className="materialize-textarea"
                    name="title"
                    onChange={this.handleValueChange}
                  ></textarea>
                  <label htmlFor="postTitle">Title</label>
                </div>
                <div className="input-field col s12">
                  <textarea
                    id="textarea1"
                    name="content"
                    className="materialize-textarea"
                    onChange={this.handleValueChange}
                  ></textarea>
                  <label htmlFor="textarea1">Content</label>
                </div>
              </div>
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPost);

// import React, { useState } from "react";

// const CreateNewPost = props => {
//   const [newPost, setNewPost] = useState({ title: "", content: "" });

//   const handleValueChange = e => {
//     setNewPost({ ...newPost, [e.target.name]: e.target.value });
//   };

//   const handleSubmission = e => {
//     e.preventDefault();
//     console.log(newPost);
//   };

//   return (
//     <div>
//       {props.uid ? (
//         <div className="container">
//           <h2>Add a post</h2>
//           <div className="row">
//             <form className="col s12" onSubmit={handleSubmission}>
//               <div className="row">
//                 {/* <div className="input-field col s6">
//                 <input id="first_name" type="text" className="validate" />
//                 <label htmlFor="first_name">First Name</label>
//               </div>
//               <div className="input-field col s6">
//                 <input id="last_name" type="text" className="validate" />
//                 <label htmlFor="last_name">Last Name</label>
//               </div> */}
//                 <div className="input-field col s12">
//                   <textarea
//                     id="postTitle"
//                     className="materialize-textarea"
//                     name="title"
//                     onChange={handleValueChange}
//                   ></textarea>
//                   <label htmlFor="postTitle">Title</label>
//                 </div>
//                 <div className="input-field col s12">
//                   <textarea
//                     id="textarea1"
//                     name="content"
//                     className="materialize-textarea"
//                     onChange={handleValueChange}
//                   ></textarea>
//                   <label htmlFor="textarea1">Content</label>
//                 </div>
//               </div>
//               <button
//                 className="btn waves-effect waves-light"
//                 type="submit"
//                 name="action"
//               >
//                 Submit
//                 <i className="material-icons right">send</i>
//               </button>
//             </form>
//           </div>
//         </div>
//       ) : (
//         <Redirect to="/login" />
//       )}
//     </div>
//   );
// };

// export default CreateNewPost;
