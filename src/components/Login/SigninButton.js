import react from "react";
import firebase, { auth } from "../../Firebase";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {  } from "@fortawesome/free-solid-svg-icons";

const SigninButton = (props) => {
  const signInGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    //props.userSet(auth.currentUser);

    try {
      await auth.signInWithPopup(provider);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button className="GoogleButton" onClick={signInGoogle}>
      Sign in with Google
    </button>
  );
};

export default SigninButton;
