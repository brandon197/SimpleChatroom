import react, { useState } from "react";
import SigninButton from "./SigninButton";
import { TextField } from "@material-ui/core";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { useAuth } from "../userContext";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

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
      <div className="loginSidepan">
        <div className="loginSwitchtoS">
          <div className="loginSidePanBanner">Welcome Back!</div>
          <div className="loginSidePanText">Don't have an Account?</div>
          <div className="loginSidePanLink">
            <Link to="/Signup">Sign Up</Link>
          </div>
        </div>
      </div>
      <div className="loginMainpan">
        <div className="loginIcon">
          <ForumIcon
            style={{
              color: "#ffffff",
              fontSize: "55px",
            }}
          />
        </div>
        <div className="loginBanner">Log In</div>

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
                style={{ width: 300 }}
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
                style={{ width: 300 }}
              />
            </div>
          </div>
          <div className="loginButtons">
            <div className="loginButtonlogin">
              <button className="loginButt" type="submit">
                Log in
              </button>
            </div>

            <div className="loginFPassword">
              <button className="forgotButton">Forgot Password?</button>
            </div>
          </div>
        </form>
        <div className="loginGoogle">
          <SigninButton />
        </div>
      </div>
    </div>
  );
};

export default Login;
