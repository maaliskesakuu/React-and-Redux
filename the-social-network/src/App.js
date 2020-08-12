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

export default App;
