import "firebase/auth";
import { Alert } from "react-native";

const register = () => {};
const signInAnonymously = () => {
  auth()
    .signInAnonymously()
    .then(() => console.log("User signed in anonymously."))
    .catch((e) => {
      Alert("e", e);
    });
};
const signIn = () => {};
const signOut = () => {
  auth()
    .signOut()
    .then(() => console.log("User signed out."))
    .catch();
};

export default { register, signIn, signInAnonymously, signOut };

// Optionally import the services that you want to use
//import "firebase/database";
//import "firebase/functions";
//import "firebase/storage";

// figure out where to put these
// import "firebase/firestore";
// const db = firebase.firestore();
// export default { db };
