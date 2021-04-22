import react, { useState } from "react";
import firebase, { auth } from "../../Firebase";
import { useAuth } from "../userContext";
import { useHistory } from "react-router-dom";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {  } from "@fortawesome/free-solid-svg-icons";

const SigninButton = (props) => {
  const [error, setError] = useState("");
  const history = useHistory();

  const { googleLogin } = useAuth();

  const signInGoogle = async () => {
    try {
      setError("");
      await googleLogin();
      history.push("/Home");
    } catch {
      setError("google login failed");
    }
  };

  console.log(error);
  return (
    <button className="GoogleButton" onClick={signInGoogle}>
      Sign in with Google
    </button>
  );
};

export default SigninButton;
