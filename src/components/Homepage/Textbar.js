import react, { useState } from "react";
import { TextField } from "@material-ui/core";

import { db, auth } from "../../Firebase";
import { useAuth } from "../userContext";

const Textbar = () => {
  const [msg, setMsg] = useState("");
  //const [id, setId] = useState(auth.currentUser.uid);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const id = auth.currentUser.uid;
    const d = new Date().toLocaleString;
    const item = {
      user_id: id,
      message: msg,
     // date_submitted: d,
    };

    await db.collection("messages").add(item);
  };

  return (
    <div className="textBarContainer">
      <form onSubmit={handleSubmit}>
        <div className="textbarItems">
          <div className="textBarField">
            <TextField
              onChange={(e) => {
                setMsg(e.target.value);
              }}
              id="outlined-basic"
              label="Message"
              variant="outlined"
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
