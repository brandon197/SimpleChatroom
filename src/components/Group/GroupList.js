import react, { useEffect, useState } from "react";
import GroupTile from "./GroupTile";
import { db } from "../../Firebase";


const GroupList = (props) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach((childSnapshot) => {
      var item = childSnapshot.data();
      item.key = childSnapshot.id;
      
      //hotfix for lastTimestamp being initially null
      if (childSnapshot.data().lastTimestamp !== null) {
        returnArr.push(item);
      }
    });
    setList(returnArr);
  }

  useEffect(() => {
    const unsub = db
      .collection("Groups")
      .orderBy("lastTimestamp", "desc")
      .onSnapshot((snapShot) => {
        snapshotToArray(snapShot);
      });
  }, []);



  return (
    <div className="ListContainer">
      {list.length > 0 ? (
        list.map((details, index) => (
          <div
            className="groupTileButton"
            key={index}
            onClick={() => {
              props.onChange(details.key);
            }}
          >
            <GroupTile
              groupName={details.gName}
              description={details.description}
              gId={details.key}
              selected={details.active}
              current={props.selectedGroup}
              lastMessageTime={details.lastMessageTime}
              lastMessageName={details.lastMessageName}
              lastMessage={details.lastMessage}
              lastMessagePic={details.lastPhotoURL}
              lastMessageDate={details.lastMessageDate}
              timestamp={details.lastTimestamp}
            />
          </div>
        ))
      ) : (
        <div className="nullGroups">no Groups</div>
      )}
    </div>
  );
};

export default GroupList;
