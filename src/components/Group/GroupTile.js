import react, { useEffect, useState } from "react";
import { auth, db, fb } from "../../Firebase";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const GroupTile = (props) => {
  const [marker, setMarker] = useState("");
  const [showDel, setShowDel] = useState(false);

  useEffect(() => {
    props.current === props.gId ? setMarker("#fad4d4") : setMarker("#ffffff");
  }, [props.current]);

  const timeDiff = () => {
    if (props.timeStamp !== null) {
      const now = new Date();
      const then = new Date(props.timestamp.seconds * 1000);

      if (
        now.getDate() === then.getDate() &&
        now.getFullYear() === then.getFullYear() &&
        now.getDay() === then.getDay()
      )
        return props.lastMessageTime;
      else return `${then.getDate()}/${then.getDay()}/${then.getFullYear()}`;
    }
  };

  const handleExpand = () => {
    setShowDel(!showDel);
  };

  const handleDelete = async () => {
    await props.onChange(null);
    return db
      .runTransaction(() => {
        return db.collection("messages").where("gId", "==", props.gId).get();
      })
      .then((snapshot) => {
        let batch = db.batch();

        snapshot.forEach((doc) => {
          batch.delete(doc.ref);
        });

        //if more than 500 then batch needs to be split
        return batch.commit();
      })
      .then(() => {
        return db.collection("Groups").doc(props.gId).delete();
      })

      .catch((error) => {
        console.log("error deleting:", error);
      });
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
          ) : // props.lastMessageName.substring(0)
          null}
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
        <button className="GroupTileExpand" onClick={handleExpand}>
          <MoreVertIcon />
        </button>
      </div>
      <div className="GTileHiddenRight">
        {showDel ? (
          <button className="GroupDeleteButton" onClick={handleDelete}>
            delete
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default GroupTile;
