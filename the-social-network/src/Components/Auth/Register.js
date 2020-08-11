import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleValueChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmission = e => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className="container">
      <h2>Register</h2>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmission}>
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" name="first_name"
              type="text" className="validate" onChange={handleValueChange} />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" name="last_name" type="text" className="validate" onChange={handleValueChange} />
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
export default Register;
