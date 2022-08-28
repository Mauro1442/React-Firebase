import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZmvKJ2v8CNK2dzEZV1KCLZAlSacjax1g",
  authDomain: "proyectoutn-139b4.firebaseapp.com",
  projectId: "proyectoutn-139b4",
  storageBucket: "proyectoutn-139b4.appspot.com",
  messagingSenderId: "547973249888",
  appId: "1:547973249888:web:b369b88d35e1e547a53c05",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth();
firebase.db = firebase.firestore();
export default firebase;
