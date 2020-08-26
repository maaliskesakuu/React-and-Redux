import React, { Component } from "react";

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

export default CreateNewPost;
