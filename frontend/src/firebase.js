import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAz7LfqDgDB9V5LzqJVTcn_8qXjrF058xc",
    authDomain: "clone-fd04a.firebaseapp.com",
    projectId: "clone-fd04a",
    storageBucket: "clone-fd04a.appspot.com",
    messagingSenderId: "1036973806708",
    appId: "1:1036973806708:web:a19eecd4b2cebe7876ad21",
    measurementId: "G-2C40ZKBYET"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();

  export {db , auth};