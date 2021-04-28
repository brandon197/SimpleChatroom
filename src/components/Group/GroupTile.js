import react, { useEffect, useState } from "react";
import { auth, fb } from "../../Firebase";

const GroupTile = (props) => {
  const [marker, setMarker] = useState("");

  useEffect(() => {
    props.current === props.gId ? setMarker("#fad4d4") : setMarker("#ffffff");
  }, [props.current]);

  const timeDiff = () => {
    if (props.timeStamp !== null) {
      const now = new Date();
      const then = new Date(props.timestamp.seconds * 1000);

      //console.log(props.timestamp);

      if (
        now.getDate() === then.getDate() &&
        now.getFullYear() === then.getFullYear() &&
        now.getDay() === then.getDay()
      )
        return props.lastMessageTime;
      else return `${then.getDate()}/${then.getDay()}/${then.getFullYear()}`;
    }
  };

  return (
    <div
      className="GroupTileContainer"
      style={{ backgroundColor: `${marker}` }}
    >
      <div className="GTileLeft">
        <div
          className="groupTileIcon"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.lastMessageName && props.lastMessageName.length > 0 ? (
            <img
              src={props.lastMessagePic}
              style={{ width: "45px", height: "45px", borderRadius: "25px" }}
            />
          ) : (
            props.lastMessageName.substring(0)
          )}
        </div>
      </div>

      <div className="GTileMid">
        <div className="groupTileTitle">{props.groupName}</div>
        <div className="groupTileMsg">{`${
          props.lastMessageName
        }:   ${props.lastMessage.substring(0, 18)} ${
          props.lastMessage.length > 25 ? "..." : ""
        }`}</div>
      </div>
      <div className="GTileRight">
        <div className="groupTileDesc">{timeDiff()}</div>
      </div>
    </div>
  );
};

export default GroupTile;
