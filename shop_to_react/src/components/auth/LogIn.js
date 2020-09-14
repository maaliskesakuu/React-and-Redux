import React, { Component } from "react";

class LogIn extends Component {
  render() {
    return (
      <>
        <div
          id="login-modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="Login"
          aria-hidden="true"
          className="modal fade"
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-header">
              <h5 className="modal-title">Customer login</h5>
              <button
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                className="close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body bg-dark">
              <form action="customer-orders.html" method="post">
                <div className="form-group">
                  <input
                    id="email-modal"
                    type="text"
                    placeholder="email"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    id="password-modal"
                    type="password"
                    placeholder="password"
                    className="form-control"
                  />
                </div>
                <p className="text-center">
                  <button className="btn btn-primary">
                    <i className="fa fa-sign-in"></i> Log in
                  </button>
                </p>
              </form>
              <p className="text-center text-muted">Not registered yet?</p>
              <p className="text-center text-muted">
                <a href="register.html">
                  <strong>Register now</strong>
                </a>
                ! It is easy and done in 1 minute and gives you access to
                special discounts and much more!
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LogIn;
