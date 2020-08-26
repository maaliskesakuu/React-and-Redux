import React, { Component } from "react";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmission = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <h2>Login</h2>
        <div className="row">
          <form className="white col s12" onSubmit={this.handleSubmission}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={this.handleValueChange}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={this.handleValueChange}
                />
                <label htmlFor="password">Password</label>
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

export default LogIn;
