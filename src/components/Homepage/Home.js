import react, { useState } from "react";
import { auth } from "../../Firebase";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Textbar from "./Textbar";
import MsgWindow from "./MsgWindow";
import GroupList from "../Group/GroupList";
import Dialogj from "./DialogBox/Dialog";
import Dialog from "@material-ui/core/Dialog";
import { useAuth } from "../userContext";

const Home = () => {
  const [currentGroup, setCurrentGroup] = useState("");

  //add dialog box on + on click
  //once values are filled make call to firebase to create group

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

          <div className="homeRightPan"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
