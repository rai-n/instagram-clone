import Firebase from 'firebase/*';
/*
can be changed during prod
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
*/

const config = {
  apiKey: "AIzaSyB4-lwnJsIc4QDF3TuaPUUE0aowQRPqZYo",
  authDomain: "instagram-clone-9898f.firebaseapp.com",
  projectId: "instagram-clone-9898f",
  storageBucket: "instagram-clone-9898f.appspot.com",
  messagingSenderId: "758233807940",
  appId: "1:758233807940:web:016a1cbf43fe4db5d29011"
};


const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };