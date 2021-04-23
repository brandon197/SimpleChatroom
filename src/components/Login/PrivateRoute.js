import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../userContext";
import Login from "../Login/Login";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  //console.log("HERE", currentUser);

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
