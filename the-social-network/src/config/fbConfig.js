import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAUsEs1fxdrTLc1hjVaEDn5HZCi45Cqt6c",
  authDomain: "social-network-b2d25.firebaseapp.com",
  databaseURL: "https://social-network-b2d25.firebaseio.com",
  projectId: "social-network-b2d25",
  storageBucket: "social-network-b2d25.appspot.com",
  messagingSenderId: "354221347923",
  appId: "1:354221347923:web:a2a750235710a56c63e2a6",
  measurementId: "G-T75GK27XKD",
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
