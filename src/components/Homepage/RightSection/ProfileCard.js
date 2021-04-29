import react, { useState } from "react";
import { Collapse, Button, TextField } from "@material-ui/core";
import { useAuth } from "../../userContext";

const ProfileCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [remarks, setRemarks] = useState("");
  const { currentUser } = useAuth();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (e) => {
    setRemarks(e.target.value);
    console.log(remarks);
  };

  const handleCancelClick = () => {
    handleExpandClick();
    setRemarks("");
  };

  return (
    <div className="contactPcontainer">
      <div className="cardContainer">
        <div className="imageSpace">
          <div className="imageSpaceColBlock" color="primary"></div>

          <div className="imageDiv">
            <img className="AvImage" src={currentUser.photoURL} />
          </div>
        </div>

        <div className="ContactContent">
          <div className="ContactText">
            <div className="ContactHeader">{currentUser.displayName}</div>
            <div className="ContactSpecialty">
              <span className="date">{currentUser.email}</span>
            </div>
            <div className="description">available</div>
          </div>
          <div
            className="ContactControlButton"
            style={expanded ? { padding: "5px" } : { padding: "25px" }}
          >
            <Collapse in={!expanded}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleExpandClick}
              >
                Request Contact
              </Button>
            </Collapse>
          </div>
        </div>

        <div className="extraContent">
          <Collapse in={expanded}>
            <form
              className="remarksForm"
              //   onSubmit={handleSubmitClick}
              onReset={handleCancelClick}
            >
              <div
                className="remarksText"
                style={({ width: "90%" }, { display: "flex" })}
              >
                <TextField
                  id="outlined-multiline-static"
                  label="Additional Remarks"
                  multiline
                  rows={3}
                  variant="outlined"
                  onChange={handleChange}
                  style={{ width: 210 }}
                  value={remarks}
                />
              </div>

              <div className="ContactButtons">
                <div className="ContactCancelButton">
                  <Button
                    style={{
                      maxWidth: "90px",
                      maxHeight: "30px",
                      minWidth: "25px",
                      minHeight: "25px",
                    }}
                    variant="contained"
                    color="secondary"
                    //onClick={handleExpandClick}
                    type="reset"
                  >
                    Cancel
                  </Button>
                </div>
                <div className="ContactSubmitButton">
                  <Button
                    style={{
                      maxWidth: "90px",
                      maxHeight: "30px",
                      minWidth: "25px",
                      minHeight: "25px",
                    }}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
