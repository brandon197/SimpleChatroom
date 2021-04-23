import react, { useEffect, useState } from "react";
import { db } from "../../Firebase";

const MsgWindow = () => {
  const [messageList, SetMessageList] = useState([]);
  let temp = [];

  useEffect(() => {
    const ref = db.collection("messages").onSnapshot((snapshot) => {
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
    <div className="messageWindowContainer">
      {messageList.length !== 0 ? (
        messageList.map((details, index) => (
          <div className="viewMessageContainer">{details.message}</div>
        ))
      ) : (
        <div className="noMessagesContainer">No messages!</div>
      )}
    </div>
  );
};

export default MsgWindow;
