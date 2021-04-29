import react, { useState } from "react";
import { TextField } from "@material-ui/core";

import { db, auth, fb } from "../../../Firebase";
import { useAuth } from "../../userContext";

const Textbar = (props) => {
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = auth.currentUser.uid;
    const t = new Date().toLocaleTimeString();
    const d = new Date().toLocaleDateString();
    const item = {
      user_id: id,
      name: auth.currentUser.displayName,
      message: msg,
      time_submitted: t,
      date_submitted: d,
      timestamp: fb.firestore.FieldValue.serverTimestamp(),
      gId: props.selected,
      photoURL: auth.currentUser.photoURL,
    };

    const ref = db.collection("messages");
    return db
      .runTransaction(() => {
        {
          return ref.add(item);
        }
      })

      .then(() => {
        return db.collection("Groups").doc(props.selected).update({
          lastMessage: msg,
          lastMessageName: auth.currentUser.displayName,
          lastMessageTime: t,
          lastMessageDate: d,
          lastTimestamp: fb.firestore.FieldValue.serverTimestamp(),
          lastPhotoURL: auth.currentUser.photoURL,
        });
      })

      .then(() => setMsg(""))
      .catch((e) => {
        console.log("Msg did not send:", e);
      });
  };

  return (
    <div className="textBarContainer">
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <div className="textbarItems">
          <div className="textBarField">
            <input
              onChange={(e) => {
                setMsg(e.target.value);
              }}
              label="Message"
              value={msg}
              style={{ height: "100%", fontSize: "25px", width: "100%" }}
            />
          </div>

          <div className="MsgSubmitSection">
            <button
              className="MsgSubmitButton"
              type="submit"
              //disabled={props.selected.length < 1 ? true : false}
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Textbar;
