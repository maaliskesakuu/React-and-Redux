import React, { Component } from "react";
// import Firebase from "firebase";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };

    this.handleValueChange = this.handleValueChange.bind(this);

    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmission = e => {
    e.preventDefault();

    // Firebase.auth()
    //   .createUserWithEmailAndPassword(this.state.email, this.state.password)
    //   .then(resp => {
    //     Firebase.firestore()
    //       .collection("users")
    //       .doc(resp.user.uid)
    //       .set({
    //         firstname: this.state.first_name,
    //         lastname: this.state.last_name,
    //         email: this.state.email,
    //       })
    //       .then(() => {
    //         console.log("Register success");
    //         console.log(resp.user.uid);
    //       });
    //   })
    //   .catch(function (error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     if (errorCode === "auth/weak-password") {
    //       alert("The password is too weak.");
    //     } else {
    //       alert(errorMessage);
    //     }
    //     console.log(error);
    //   });
  };

  render() {
    return (
      <div className="container">
        <h2>Register</h2>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmission}>
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
          </form>
        </div>
      </div>
    );
  }
}

// import React, { useState } from "react";

// const Register = () => {
//   const [user, setUser] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     password: "",
//   });

//   const handleValueChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmission = e => {
//     e.preventDefault();
//     console.log(user);
//   };
//   return (
//     <div className="container">
//       <h2>Register</h2>
//       <div className="row">
//         <form className="col s12" onSubmit={handleSubmission}>
//           <div className="row">
//             <div className="input-field col s6">
//               <input id="first_name" name="first_name"
//               type="text" className="validate" onChange={handleValueChange} />
//               <label htmlFor="first_name">First Name</label>
//             </div>
//             <div className="input-field col s6">
//               <input id="last_name" name="last_name" type="text" className="validate" onChange={handleValueChange} />
//               <label htmlFor="last_name">Last Name</label>
//             </div>
//           </div>
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
export default Register;
