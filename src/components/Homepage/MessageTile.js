import react, { useState, useEffect } from "react";
import { auth } from "../../Firebase";

const MessageTile = (props) => {
  const [sender, setSender] = useState("");

  useEffect(() => {
    auth.currentUser.uid === props.uid
      ? setSender("flex-end")
      : setSender("flex-start");
  }, []);
  return (
    <div
      className="messageTileContinaer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: sender,
      }}
    >
      <div className="messageName" style={{ fontSize: "15px" }}>
        {props.name}
      </div>

      <div className="messageText">{props.message}</div>
      <div className="messageTime" style={{ fontSize: "12px" }}>
        {props.time}
      </div>
    </div>
  );
};

export default MessageTile;
