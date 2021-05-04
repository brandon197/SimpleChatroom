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
        {props.photo !== null ? (<img className="messagePic" src={props.photo} />) :
        (<div className='messagePic'>{props.name.substring(0)}</div>) }
        

        <div>
          <div
            className="messageText"
            style={{
              borderRadius: "10px",
              backgroundColor: fdir === "row-reverse" ? "#F87979" : "#8c8382",
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
