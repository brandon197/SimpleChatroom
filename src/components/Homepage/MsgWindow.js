import react, { useEffect, useState } from "react";
import MessageTile from "./MessageTile";
import { db } from "../../Firebase";

const MsgWindow = () => {
  const [messageList, SetMessageList] = useState([]);
  const [currentGroup, setCurrentGroup] = useState();
  let temp = [];

  useEffect(() => {
    const ref = db
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        temp = [];
        snapshot.forEach((childSnapshot) => {
          var item = childSnapshot.data();
          item.key = childSnapshot.id;
          temp.push(item);
        });
        SetMessageList(temp);
      });
  }, []);

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
            />
          </div>
        ))
      ) : (
        <div className="noMessagesContainer" style={{ fontSize: "20px" }}>
          No messages!
        </div>
      )}
    </div>
  );
};

export default MsgWindow;
