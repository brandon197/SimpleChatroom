import react, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Switch, Route, Link } from "react-router-dom";
import { useAuth } from "../userContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //get signup from our useAuth
  const { emailSignup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //ADD PASSWORDS MATCH CHECK BEFORE SUBMIT
    try {
      setError("");
      setLoading(true);
      //password must be at least 6 characters
      await emailSignup(email, password);
    } catch {
      setError("Failed to Create account");
    }
    setLoading(false);
  };
  return (
    <div className="SignupContainer">
      <div className="signupFence">
        <h2>Sign Up</h2>
        {error !== null ? <alert>{error}</alert> : null}

        <form onSubmit={handleSubmit}>
          <div className="SignupFields">
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              id="filled-basic"
              label="Email"
              variant="filled"
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              id="filled-basic"
              label="Password"
              variant="filled"
            />
            <TextField
              onChange={(e) => setCheckPassword(e.tager.value)}
              id="filled-basic"
              label="VerifyPassword"
              variant="filled"
            />
          </div>
          <div className="SignupButtons">
            <button disabled={loading} type="submit">
              Submit
            </button>
          </div>
        </form>

        <div className="ToLogin">
          Already have an account?<Link to="/">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
