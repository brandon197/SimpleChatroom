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
        <div className="homeMain">
          <div className="homeLeftPan"></div>
          <div className="homeMiddlePan">
            <MsgWindow />
            <div className='UserTextContainer'>
              <Textbar />
            </div>
          </div>

          {/* <div className="homeRightPan"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
