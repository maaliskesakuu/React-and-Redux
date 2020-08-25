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
import { FIREBASE_CONFIG as firebaseConfig } from "./config/firebaseConfig";

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
              <Route exact path="/" component={Feeds}></Route>
              <Route exact path="/create" component={CreateNewPost}></Route>
              <Route exact path="/register" component={Register}></Route>
              <Route exact path="/login" component={LogIn}></Route>
              <Route
                exact
                path="/logout"
                render={() => {
                  return <LogOut />;
                }}
              ></Route>
              <Route exact path="/post/:id" component={PostDetails}></Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
