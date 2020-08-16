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
    <div>
      <p>You have logged out.</p>
    </div>
  );
};

export default LogOut;
