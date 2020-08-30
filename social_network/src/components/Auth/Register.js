import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Link } from 'react-router-dom';

class Register extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmission = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container" style={{ paddingTop: "5rem" }}>        
        <h2>Register</h2>
        <div className="row">
          <form className="col s12 z-depth-2" onSubmit={this.handleSubmission}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  className="validate"
                  onChange={this.handleValueChange}
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  className="validate"
                  onChange={this.handleValueChange}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="validate"
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
                  className="validate"
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
            <div className="section">
              <span>Already registered?</span>{' '}
              <Link to="/login" style={{ textDecoration: "underline", color: '#1d7d74', fontWeight: "bolder" }}>Login</Link>
            </div>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
