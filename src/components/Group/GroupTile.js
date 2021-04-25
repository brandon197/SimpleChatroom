import react, { useEffect, useState } from "react";

const GroupTile = (props) => {
  const [marker, setMarker] = useState("");

  useEffect(() => {
    props.selected === true ? setMarker("#fad4d4") : setMarker("#ffffff");
  }, []);

  return (
    <div className="GroupTileContainer" style={{ backgroundColor: marker }}>
      <div className="groupTileIcon"></div>
      <div className="groupTileTitle">{props.groupName}</div>
      <div className="groupTileDesc">{props.description}</div>
    </div>
  );
};

export default GroupTile;
