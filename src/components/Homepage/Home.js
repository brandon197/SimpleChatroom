import react, { useState } from "react";
import { auth } from "../../Firebase";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Textbar from "./Textbar";
import MsgWindow from "./MsgWindow";
import GroupList from "../Group/GroupList";
import { useAuth } from "../userContext";

const Home = () => {
  //const { currentGroup } = useAuth();
  const [currentGroup, setCurrentGroup] = useState("");

  return (
    <div>
      <div className="homeContainer">
        <Navbar />
        <div className="homeMain">
          <div className="homeLeftPan">
            <h2>Chats</h2>
            <GroupList
              selectedGroup={currentGroup}
              onChange={(val) => {
                setCurrentGroup(val);
              }}
            />
          </div>
          <div className="homeMiddlePan">
            <MsgWindow selected={currentGroup} />
            <div className="UserTextContainer" style={{ marginTop: "6px" }}>
              <Textbar selected={currentGroup} />
            </div>
          </div>

          <div className="homeRightPan"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
