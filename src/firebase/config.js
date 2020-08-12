import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCIjgtZO51UHF3M_WZlAb6C29-hh9JGmUg",
  authDomain: "photo-galary-codershs.firebaseapp.com",
  databaseURL: "https://photo-galary-codershs.firebaseio.com",
  projectId: "photo-galary-codershs",
  storageBucket: "photo-galary-codershs.appspot.com",
  messagingSenderId: "771247932403",
  appId: "1:771247932403:web:aa3787a4569612026fc886",
  measurementId: "G-Z218TFJE7N",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
