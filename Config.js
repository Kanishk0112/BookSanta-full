import firebase from "firebase"
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyCbZIQlmXSikq7puYBJ1JdQXbB_M_LsdD0",
    authDomain: "booksanta-a027d.firebaseapp.com",
    projectId: "booksanta-a027d",
    storageBucket: "booksanta-a027d.appspot.com",
    messagingSenderId: "414810134438",
    appId: "1:414810134438:web:6fe08955b660cee875e167"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()