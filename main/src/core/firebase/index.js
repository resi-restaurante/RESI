import firebase from "firebase";

const homolog = {
  apiKey: "AIzaSyDEqp1FXBJfUYuJgdRt_WJ7qXbxQAPLUr8",
  authDomain: "resi-1d8b1.firebaseapp.com",
  projectId: "resi-1d8b1",
  storageBucket: "resi-1d8b1.appspot.com",
  messagingSenderId: "159077340436",
  appId: "1:159077340436:web:94e30f7a396f29a8c81e01",
  measurementId: "G-03KTSGPR5K"
};

//   firebase.analytics();
firebase.initializeApp(homolog);
export default firebase;
