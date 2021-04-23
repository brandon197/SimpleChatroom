import react from "react";
import SignOut from "./Login/SignoutButton";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="MainBanner">
        <h1>NuChat</h1>
      </div>
      <div className="signoutButContainer">
        <SignOut />
      </div>
    </div>
  );
};

export default Navbar;
