import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";
import { Redirect } from "react-router-dom";

class CreateNewPost extends Component {
  state = {
    title: "",
    content: "",
  };

  handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmission = e => {
    e.preventDefault();
    this.props.createPost(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div className="container" style={{ paddingTop: "5rem" }}>
        <h2>Create a New Post</h2>
        <div className="row">
          <form className="col s12 z-depth-2" onSubmit={this.handleSubmission}>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="title"
                  className="materialize-textarea"
                  name="title"
                  onChange={this.handleValueChange}
                ></textarea>
                <label htmlFor="title">Title</label>
              </div>
              <div className="input-field col s12">
                <textarea
                  id="content"
                  name="content"
                  className="materialize-textarea"
                  onChange={this.handleValueChange}
                ></textarea>
                <label htmlFor="content">Post Content</label>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPost);
