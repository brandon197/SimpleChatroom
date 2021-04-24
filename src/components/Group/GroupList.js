import react, { useEffect, useState } from "react";
import GroupTile from "./GroupTile";

const GroupList = () => {
  const [list, setList] = useState([]);

  let temp = [];
  useEffect(() => {
    const ref = db.collection("Groups").onSnapshot((snapShot) => {
      temp = [];
      snapShot.forEach((childSnapshot) => {
        var item = childSnapshot.data();
        item.key = childSnapshot.id;
        temp.push(item);
      });
      setList(temp);
    });
  }, []);

  return (
    <div className="GroupListContainer">
      {list.length > 0 ? (
        list.map((details, index) => {
          <div className="GroupItem">
            <GroupTile
              groupId={details.key}
              description={details.description}
              groupName={details.name}
            />
          </div>;
        })
      ) : (
        <div>No groups</div>
      )}
    </div>
  );
};

export default GroupList;
