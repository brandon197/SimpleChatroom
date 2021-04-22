import react, { createContext, useContext, useState, useEffect } from "react";
import firebase, { auth } from "../Firebase";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function emailSignup(email, password) {
    //will return a promise that we use for our signup
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function emailLogin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  }

  function logout() {
    auth.signOut();
  }

  useEffect(() => {
    // will unsub us from onauthstatechanged when promped
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const val = {
    currentUser,
    emailSignup,
    emailLogin,
    googleLogin,
    logout,
  };
  return (
    <AuthContext.Provider value={val}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
