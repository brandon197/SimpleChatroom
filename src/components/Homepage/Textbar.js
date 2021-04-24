import react, { useState } from "react";
import { TextField } from "@material-ui/core";

import { db, auth, fb } from "../../Firebase";
import { useAuth } from "../userContext";

const Textbar = () => {
  const [msg, setMsg] = useState("");
  //const [id, setId] = useState(auth.currentUser.uid);

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
    };
    try {
      const res = db.collection("messages").add(item);
      setMsg("");
    } catch {
      console.log("didnt work");
    }
  };

  return (
    <div className="textBarContainer">
      <form onSubmit={handleSubmit}>
        <div className="textbarItems">
          <div className="textBarField">
            <input
              onChange={(e) => {
                setMsg(e.target.value);
              }}
              label="Message"
              value={msg}
              style={{ height: "100%", fontSize: "25px" }}
            />
          </div>

          <div className="MsgSubmitSection">
            <button className="MsgSubmitButton" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Textbar;
