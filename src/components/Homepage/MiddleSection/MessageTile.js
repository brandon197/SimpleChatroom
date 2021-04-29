import react, { useState, useEffect } from "react";
import { auth } from "../../../Firebase";

const MessageTile = (props) => {
  const [fdir, setFdir] = useState("");

  function timeCheck() {
    //hotfix for checking timestamp before its available
    if (props.timestamp !== null) {
      const now = new Date();
      const then = new Date(props.timestamp.seconds * 1000);

      if (
        now.getDate() === then.getDate() &&
        now.getFullYear() === then.getFullYear() &&
        now.getDay() === then.getDay()
      )
        return props.time;
      else
        return `${then.getDate()}/${then.getDay()}/${then.getFullYear()} - ${
          props.time
        }`;
    }
  }

  useEffect(() => {
    //if the message was sent by me or received by someone else
    if (auth.currentUser.uid === props.uid) {
      setFdir("row-reverse");
    } else {
      setFdir("row");
    }
  }, []);

  return (
    <div className="messageTileContainer">
      <div className="mainContent" style={{ flexDirection: fdir }}>
        <img className="messagePic" src={props.photo} />

        <div>
          {/* <div className="chatBubble">
            {fdir === "row-reverse" ? (
              <ModeCommentIcon style={{ color: "#f5cecb" }} />
            ) : (
              <ChatBubbleIcon style={{ color: "#c9c9c9" }} />
            )}
          </div> */}
          <div
            className="messageText"
            style={{
              borderRadius: "10px",
              backgroundColor: fdir === "row-reverse" ? "#f5cecb" : "#c9c9c9",
            }}
          >
            {props.message}
          </div>
        </div>
      </div>

      <div
        className="messageTime"
        style={{
          fontSize: "10px",
          justifyContent: fdir === "row" ? "flex-start" : "flex-end",
        }}
      >
        {timeCheck()}
      </div>
    </div>
  );
};

export default MessageTile;
