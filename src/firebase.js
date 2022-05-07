// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBzF_4zsZzx-QdsXuqeNicpTD31Mqw7Q4c",
    authDomain: "clone-180d6.firebaseapp.com",
    projectId: "clone-180d6",
    storageBucket: "clone-180d6.appspot.com",
    messagingSenderId: "362467880530",
    appId: "1:362467880530:web:4518958be0e583f0d7f98b",
    measurementId: "G-EM8W8LTHV5"
  };

  // initialization of app on firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // intialization of data base on firebase
  const db = firebaseApp.firestore();
  const auth = firebase.auth(); // give variable for sign in

  export {db , auth};