import React, { Component } from "react";
import Firebase from "firebase";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      auth: null,
    };

    this.handleSubmission = this.handleSubmission.bind(this);

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmission = e => {
    e.preventDefault();

    Firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log("Login success");
      })
      .catch(err => {
        console.log("Login fail: " + err);
      });
  };

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

// Functional
// import React, { useState } from "react";
// import Firebase from "firebase";

// const Auth = Firebase.auth();

// const LogIn = () => {
//   const [user, setUser] = useState({ email: "", password: "" });

//   const handleValueChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmission = e => {
//     e.preventDefault();
//     Firebase.auth().signInWithEmailAndPassword(
//       this.state.email,
//       this.state.password
//     ).then(() => {
//       console.log('Login success');
//     }).catch(err => {
//       console.log('Login fail: ' + err)
//     })
//     console.log(user);
//   };

//   return (
//     <div className="container">
//       <h2>Login</h2>
//       <div className="row">
//         <form className="col s12" onSubmit={handleSubmission}>
//           <div className="row">
//             <div className="input-field col s12">
//               <input
//                 id="email"
//                 type="email"
//                 name="email"
//                 className="validate"
//                 onChange={handleValueChange}
//               />
//               <label htmlFor="email">Email</label>
//             </div>
//           </div>
//           <div className="row">
//             <div className="input-field col s12">
//               <input
//                 id="password"
//                 type="password"
//                 name="password"
//                 className="validate"
//                 onChange={handleValueChange}
//               />
//               <label htmlFor="password">Password</label>
//             </div>
//           </div>
//           <button
//             className="btn waves-effect waves-light"
//             type="submit"
//             name="action"
//           >
//             Submit
//             <i className="material-icons right">send</i>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

export default LogIn;
