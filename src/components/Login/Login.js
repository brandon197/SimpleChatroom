import react, { useState } from "react";
import SigninButton from "./SigninButton";
import { TextField } from "@material-ui/core";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { useAuth } from "../userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { emailLogin } = useAuth();

  const history = useHistory();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await emailLogin(email, password);
      history.push("/Home");
    } catch {
      setError("Failed to Create account");
    }
    setLoading(false);
  };
  return (
    <div className="loginContainer">
      {console.log("LOGIN")}
      <div className="loginSidepan"></div>
      <div className="loginMainpan">
        <div className="loginIcon"></div>
        <div className="loginBanner">Welcome Back</div>
        <form onSubmit={handleEmailSubmit}>
          <div className="loginTextFields">
            <div className="loginEmailtf">
              <TextField
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="filled-basic"
                label="Email"
                variant="filled"
              />
            </div>
            <div className="loginPasswordtf">
              <TextField
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="filled-basic"
                label="Password"
                variant="filled"
              />
            </div>
          </div>
          <div className="loginButtons">
            <div className="loginFPassword">
              <button>Forgot Password?</button>
            </div>
            <div className="loginButtonlogin"></div>
            <button type="submit">Sign in</button>
          </div>
        </form>
        <div className="loginGoogle">
          <SigninButton />
        </div>
        <div className="loginSwitchtoS">
          Don't have an Account?
          <Link to="/Signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
