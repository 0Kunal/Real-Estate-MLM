// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3F9nADSMfOcoUmVwuyq9mcNhflb9Ar78",
  authDomain: "real-estate-mlm.firebaseapp.com",
  projectId: "real-estate-mlm",
  storageBucket: "real-estate-mlm.appspot.com",
  messagingSenderId: "603581484113",
  appId: "1:603581484113:web:cff24cc95b1480384cfc70",
  measurementId: "G-5FE75G26RD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

console.log("Firebase initialized");

export { db, auth };
