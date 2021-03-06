import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";

class CreateNewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };

    this.handleSubmission = this.handleSubmission.bind(this);

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmission = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createPost(this.state);
  };

  render() {
    return (
      <div className="container">
        <h2>Create a New Post</h2>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmission}>
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

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
  };
};

export default connect(null, mapDispatchToProps)(CreateNewPost);
