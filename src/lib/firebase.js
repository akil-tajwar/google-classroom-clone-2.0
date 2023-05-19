import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjY4UA4IDRjiVPGiDpLwI6Z0BOJc1ABgQ",
  authDomain: "classroom-clone-a5870.firebaseapp.com",
  projectId: "classroom-clone-a5870",
  storageBucket: "classroom-clone-a5870.appspot.com",
  messagingSenderId: "1013152169563",
  appId: "1:1013152169563:web:5fb5f4c7603475690c497e",
  measurementId: "G-N7RNRC0MXX"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
