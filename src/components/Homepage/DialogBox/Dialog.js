import react, { useState } from "react";
import { db, fb } from "../../../Firebase";

const Dialog = (props) => {
  const [gName, setGName] = useState();
  const [gDescription, setGDescription] = useState();

  //   const [vis, setVis] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const item = {
      gName: gName,
      description: gDescription,
      active: false,
      lastMessage: "",
      lastMessageName: "",
      lastMessageTime: "",
      unread: true,
      lastTimestamp: fb.firestore.FieldValue.serverTimestamp(),
      lastPhotoURL: "",
    };

    try {
      const res = db.collection("Groups").add(item);
      handleCleanup();
    } catch {
      console.log("Group could not be created");
    }
  };

  const handleCleanup = () => {
    props.onChange(false);
    setGName("");
    setGDescription("");
  };

  return (
    <div>
      <div className="dialogContainer">
        <div className="dialogBanner">
          <h3>Please Enter the Following Info</h3>
        </div>
        <form onSubmit={handleSubmit} onReset={handleCleanup}>
          <div className="formContainer">
            <div className="groupNameField">
              <input
                type="text"
                value={gName}
                onChange={(e) => {
                  setGName(e.target.value);
                }}
              />
            </div>
            <div className="groupDescriptionField">
              <input
                type="text"
                value={gDescription}
                onChange={(e) => {
                  setGDescription(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="DialogButtons">
            <button type="submit">Submit</button>
            <button type="reset">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dialog;
