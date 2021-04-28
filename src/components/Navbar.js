import react from "react";
import SignOut from "./Login/SignoutButton";
import ForumIcon from "@material-ui/icons/Forum";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="MainBanner">
        <ForumIcon
          style={{ color: "white", marginRight: "10px", fontSize: "30px" }}
        />
        <h1>NuChat</h1>
      </div>
      <div className="signoutButContainer">
        <SignOut />
      </div>
    </div>
  );
};

export default Navbar;
