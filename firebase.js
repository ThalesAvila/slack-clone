import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqq_OzXt1HBxQOvRN9fRBL013zRp6AmII",
  authDomain: "ta-slack-clone.firebaseapp.com",
  databaseURL: "https://ta-slack-clone.firebaseio.com",
  projectId: "ta-slack-clone",
  storageBucket: "ta-slack-clone.appspot.com",
  messagingSenderId: "970638030184",
  appId: "1:970638030184:web:c08a3744373698280c12dd",
  measurementId: "G-X68G9VW6VJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
