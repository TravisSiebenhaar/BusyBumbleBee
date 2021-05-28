import firebase from "firebase/app";
import { keys } from "./config/keys";

export default !firebase.app.length
  ? firebase.initializeApp(keys.firebaseConfig)
  : firebase.app();
