import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

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
    this.props.logIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container" style={{ paddingTop: "5rem" }}>
        <h2>Login</h2>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmission}>
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
            <div className="section">
              <span>Not registered yet?</span>{' '}
              <Link to="/register" style={{ textDecoration: "underline"}}>Register</Link>
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
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: creds => dispatch(logIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
