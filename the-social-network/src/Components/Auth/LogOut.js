import React from "react";
import Firebase from "firebase";

const LogOut = () => {
  Firebase.auth()
    .signOut()
    .then(() => {
      console.log("Logout success");
    })
    .catch(err => {
      console.log("Logout fail: " + err);
    });

  return (
    <div className="container">
      <h2 style={{textAlign: "center"}}>Thanks for your visit!</h2>
      <p style={{textAlign: "center"}}>You have logged out.</p>
    </div>
  );
};

export default LogOut;
