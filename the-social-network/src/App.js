import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavigationBar from "./Components/Layout/NavigationBar";
// import Feeds from "./Components/HomePage/Feeds";
import LogIn from "./Components/Auth/LogIn";
// import LogOut from "./Components/Auth/LogOut";
import Register from "./Components/Auth/Register";
// import PostDetails from "./Components/Posts/PostDetails";
// import CreateNewPost from "./Components/Posts/CreateNewPost";
// import Firebase from "firebase";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     uid: null,
  //   };
  // }

  // componentDidMount = () => {
  //   this.setState({
  //     uid: Firebase.auth().currentUser ? Firebase.auth().currentUser.uid : null,
  //   });

  //   Firebase.auth().onAuthStateChanged(user => {
  //     if (user && this.state.uid === null) {
  //       this.setState({
  //         uid: user.uid,
  //       });
  //     }
  //     if (!user && this.state.uid !== null) {
  //       this.setState({
  //         uid: null,
  //       });
  //     }
  //   });
  // };

  render() {
    return (
      <div class="container">
        <h1 style={{textAlign: "center"}}>Hello</h1>
        <LogIn />
        <Register />
      </div>
    );
  }
}

export default App;
