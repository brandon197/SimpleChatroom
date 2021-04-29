import react, { useEffect, useState } from "react";
import MessageTile from "./MessageTile";
import { db } from "../../../Firebase";
import { useAuth } from "../../userContext";

const MsgWindow = (props) => {
  const [messageList, SetMessageList] = useState([]);
  let temp = [];

  useEffect(() => {
    if (props.selected.length > 0) {
      const ref = db
        .collection("messages")

        .orderBy("timestamp", "asc")
        .where("gId", "==", props.selected)
        .onSnapshot((snapshot) => {
          temp = [];
          snapshot.forEach((childSnapshot) => {
            var item = childSnapshot.data();
            item.key = childSnapshot.id;
            temp.push(item);
          });
          SetMessageList(temp);
        });
    }
  }, [props.selected]);

  return (
    <div
      className="messageWindowContainer"
      style={{ overflow: "auto", fontSize: "20px" }}
    >
      {messageList.length !== 0 ? (
        messageList.map((details, index) => (
          <div className="viewMessageContainer" key={details.key}>
            <MessageTile
              uid={details.user_id}
              name={details.name}
              date={details.date_submitted}
              time={details.time_submitted}
              message={details.message}
              photo={details.photoURL}
              timestamp={details.timestamp}
            />
          </div>
        ))
      ) : (
        <div className="noMessagesContainer" style={{ fontSize: "20px" }}>
          {props.selected ? 'No Messages - Start a Conversation!': 'Please Select a Chat'}
        </div>
      )}
    </div>
  );
};

export default MsgWindow;
