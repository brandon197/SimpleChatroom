import react, { useEffect, useState } from "react";
import GroupTile from "./GroupTile";
import { db } from "../../Firebase";
import { useAuth } from "../userContext";

const GroupList = (props) => {
  const [list, setList] = useState([]);
  // const { currentGroup, setGroup } = useAuth();
  let temp = [];

  // const HandleChooseGroup = (gId) => {

  // };

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

  // const handleChange= async(val)=> {
  //   await props.setSelectedGroup(val);
  // }

  console.log("current group:", props.selec);
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
