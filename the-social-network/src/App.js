import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./Components/Layout/NavigationBar";
import Feeds from "./Components/HomePage/Feeds";
import LogIn from "./Components/Auth/LogIn";
import LogOut from "./Components/Auth/LogOut";
import Register from "./Components/Auth/Register";
import PostDetails from "./Components/Posts/PostDetails";
import CreateNewPost from "./Components/Posts/CreateNewPost";
import Firebase from "firebase";
import { FIREBASE_CONFIG as firebaseConfig } from './config/firebaseConfig';

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
    };
  }

  componentDidMount = () => {
    this.setState({
      uid: Firebase.auth().currentUser ? Firebase.auth().currentUser.uid : null,
    });

    Firebase.auth().onAuthStateChanged(user => {
      if (user && this.state.uid === null) {
        this.setState({
          uid: user.uid,
        });
      }
      if (!user && this.state.uid !== null) {
        this.setState({
          uid: null,
        });
      }
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar uid={this.state.uid}></NavigationBar>
          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return <Feeds uid={this.state.uid} />;
                }}
              ></Route>
              <Route
                exact
                path="/create"
                render={() => {
                  return <CreateNewPost uid={this.state.uid} />;
                }}
              ></Route>
              <Route
                exact
                path="/register"
                render={() => {
                  return <Register uid={this.state.uid} />;
                }}
              ></Route>
              <Route
                exact
                path="/login"
                render={() => {
                  return <LogIn uid={this.state.uid} />;
                }}
              ></Route>
              <Route
                exact
                path="/logout"
                render={() => {
                  return <LogOut />;
                }}
              ></Route>
              <Route
                exact
                path="/post/:id"
                render={() => {
                  return <PostDetails uid={this.state.uid} />;
                }}
              ></Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

/*
import React from "react";
// import './App.css';
import NavigationBar from "./Components/Layout/NavigationBar";
import LogIn from "./Components/Auth/LogIn";
import Register from "./Components/Auth/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogOut from "./Components/Auth/LogOut";
import Feeds from "./Components/HomePage/Feeds";
import CreateNewPost from "./Components/Posts/CreateNewPost";
import PostDetails from "./Components/Posts/PostDetails";
import Firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAUsEs1fxdrTLc1hjVaEDn5HZCi45Cqt6c",
  authDomain: "social-network-b2d25.firebaseapp.com",
  databaseURL: "https://social-network-b2d25.firebaseio.com",
  projectId: "social-network-b2d25",
  storageBucket: "social-network-b2d25.appspot.com",
  messagingSenderId: "354221347923",
  appId: "1:354221347923:web:a2a750235710a56c63e2a6",
  measurementId: "G-T75GK27XKD",
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
Firebase.analytics();

const database = Firebase.firestore();

database
  .collection("posts")
  .get()
  .then(resp => {
    console.log("resp is: ");
    console.log(resp);
    console.log('resp.docs is: ');
    console.log(resp.docs);
    console.log('resp.docs[0].data()');
    console.log(resp.docs[0].data());
    console.log(resp.docs[1].data());
    console.log(resp.docs[2].data());
  })
  .catch(err => {
    console.log(err);
  });

function App() {
  return (
    <Router>
      <NavigationBar />
      <main>
        <Switch>
          <Route exact path="/" component={Feeds} />
          <Route path="/login" component={LogIn} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={LogOut} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/create" component={CreateNewPost} />
        </Switch>
      </main>
    </Router>
  );
} 

export default App; */
