import react, { useState, useEffect } from "react";
import reactDOM from "react-dom";
import "./styles/styles.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import firebase, { auth, db } from "./Firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import Login from "./components/Login/Login";
import Home from "./components/Homepage/Home";
import SignUp from "./components/AccountSignup/SignUp";
import { AuthProvider } from "./components/userContext";

const App = () => {
  const [u] = useAuthState(auth);
  const [user, setUser] = useState(() => auth.currentUser);

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Signup" component={SignUp} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
