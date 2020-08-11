import React, { useState } from "react";

const LogIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleValueChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmission = e => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmission}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                name="email"
                className="validate"
                onChange={handleValueChange}
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
                onChange={handleValueChange}
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
};

export default LogIn;
