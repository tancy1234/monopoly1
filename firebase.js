// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOuwE9ADs8tFmDBjhXnhYeNJ8pefPiQtc",
  authDomain: "tcy108-1158d.firebaseapp.com",
  projectId: "tcy108-1158d",
  storageBucket: "tcy108-1158d.firebasestorage.app",
  messagingSenderId: "826889675114",
  appId: "1:826889675114:web:dc6ebf2798fda71b180513",
  measurementId: "G-TM9DWWHR88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);