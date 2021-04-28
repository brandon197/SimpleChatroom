import react from "react";
import firebase, { auth } from "../../Firebase";
import { useHistory } from "react-router-dom";

const SignoutButton = (props) => {
  const history = useHistory();

  const handleGoogleSignout = async () => {
    try{
    await auth.signOut();
    history.push("/");
    }catch{console.log('failed to logout')}
  };
  return (
    auth.currentUser && <button className='signoutButton' onClick={handleGoogleSignout}>Sign Out</button>
  );
};

export default SignoutButton;
