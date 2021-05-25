import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import keys from "./keys";

// Optionally import the services that you want to use
//import "firebase/database";
//import "firebase/functions";
//import "firebase/storage";

// Prevent re-initialization of firebase.app if initialized
!firebase.app.length
  ? firebase.initializeApp(keys.firebaseConfig)
  : firebase.app();

const db = firebase.firestore();

export default { db };
