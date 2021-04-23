import react, { useState } from "react";
import SignOut from "../Login/SignoutButton";
import { auth } from "../../Firebase";
import { Switch, Route, Link } from "react-router-dom";
import Navbar from "../Navbar";
import Textbar from "./Textbar";
import MsgWindow from "./MsgWindow";

const Home = () => {
  return (
    <div>
      <div className="homeContainer">
        <Navbar />
        <div className="details">{auth.currentUser.displayName}</div>
        <MsgWindow />
        <Textbar />
      </div>
    </div>
  );
};

export default Home;
