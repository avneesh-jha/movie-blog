import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkMvHw8ROvU9QaGwmf-f_fTAHkjm3k2NQ",
  authDomain: "authenticator-app-21c1f.firebaseapp.com",
  databaseURL: "https://authenticator-app-21c1f.firebaseio.com",
  projectId: "authenticator-app-21c1f",
  storageBucket: "authenticator-app-21c1f.appspot.com",
  messagingSenderId: "175238535512",
  appId: "1:175238535512:web:487a9dbfcfbb1f3bdfad2d",
  measurementId: "G-EVVGYDFGYR",
};

//initailize app using firebase config
//get reference to firebase auth and cloud firestore
//export them

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
