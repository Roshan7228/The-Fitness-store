// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvEXbPeGuA79e9JEan0tZ-cjRtQ3vxQN4",
  authDomain: "e-commerce-gym.firebaseapp.com",
  projectId: "e-commerce-gym",
  storageBucket: "e-commerce-gym.firebasestorage.app",
  messagingSenderId: "651377778249",
  appId: "1:651377778249:web:5bbcdd8c03bd3f1b702998",
  measurementId: "G-PNKTH1M3B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();