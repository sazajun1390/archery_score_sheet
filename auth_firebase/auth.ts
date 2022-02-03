// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1DsVqifT64LuUVo-__quS1gzEzsIx9f8",
  authDomain: "vue-archery-score-sheet.firebaseapp.com",
  projectId: "vue-archery-score-sheet",
  storageBucket: "vue-archery-score-sheet.appspot.com",
  messagingSenderId: "455954339578",
  appId: "1:455954339578:web:8d5df83865923023dfdb43",
  measurementId: "G-ZCV2T9LCVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
