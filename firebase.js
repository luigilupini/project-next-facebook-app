import firebase from "firebase";
import "firebase/storage";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyA_Tuey40WgMsgAFauHq_OAX1iMZLzX0VQ",
  authDomain: "next-facebook-91593.firebaseapp.com",
  projectId: "next-facebook-91593",
  storageBucket: "next-facebook-91593.appspot.com",
  messagingSenderId: "217744943304",
  appId: "1:217744943304:web:a2f24429f0d5a97c161dfd",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
