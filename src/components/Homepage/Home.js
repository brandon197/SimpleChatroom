import react, { useState } from "react";
import SignOut from "../Login/SignoutButton";
import { auth } from "../../Firebase";
import { Switch, Route, Link } from "react-router-dom";

const Home = () => {
 

  return (
    <div>
      <Route exact path="/home">
        <div className="homeContainer">
          <div className="details">{auth.currentUser.displayName}</div>
          <SignOut />
        </div>
      </Route>
    </div>
  );
};

export default Home;
