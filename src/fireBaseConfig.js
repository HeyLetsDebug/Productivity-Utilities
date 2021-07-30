import firebase from "firebase";
const config = {
  apiKey: "AIzaSyB7J0Sb5UfdwrShSZqlPplfOAPNqEXnRkM",
  authDomain: "productivity-utility.firebaseapp.com",
  projectId: "productivity-utility",
  storageBucket: "productivity-utility.appspot.com",
  messagingSenderId: "976022167941",
  appId: "1:976022167941:web:3fa8d4a9b74e12f05364ec"
};
const Firebase = firebase.initializeApp(config);
export default Firebase;
