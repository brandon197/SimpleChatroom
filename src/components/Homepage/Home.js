import react, { useState } from "react";
import { auth } from "../../Firebase";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Textbar from "./MiddleSection/Textbar";
import MsgWindow from "./MiddleSection/MsgWindow";
import GroupList from "../Group/GroupList";
import Dialogj from "./DialogBox/Dialog";
import Dialog from "@material-ui/core/Dialog";
import ProfileCard from "./RightSection/ProfileCard";
import { useAuth } from "../userContext";

const Home = () => {
  const [currentGroup, setCurrentGroup] = useState("");
  const [vis, setVis] = useState(false);

  return (
    <div>
      <div className="homeContainer">
        <Navbar />
        <div className="homeMain">
          <Dialog open={vis}>
            <Dialogj
              onChange={(val) => {
                setVis(val);
              }}
            />
          </Dialog>
          <div className="homeLeftPan">
            <div className="leftPanBanner">
              <h2>Chats</h2>
              <div className="addNewGroup">
                <button
                  className="AddNewGroupButton"
                  onClick={() => {
                    setVis(true);
                  }}
                >
                  +
                </button>
              </div>
            </div>
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

          <div className="homeRightPan">
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
