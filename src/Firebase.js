import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdVw3DqeWIJVfo2LjoQC2gOkDsNeUFueA",
  authDomain: "chatroom-bd15e.firebaseapp.com",
  projectId: "chatroom-bd15e",
  storageBucket: "chatroom-bd15e.appspot.com",
  messagingSenderId: "472276985049",
  appId: "1:472276985049:web:1439c30ad0631d39c30ac8",
  measurementId: "G-9EXTGSV3DV",
};

firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const fb = firebase;
export default firebase;
