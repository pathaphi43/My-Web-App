// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmdyIQ63UbCnvWFFcnfk_y7yB6o_xd0GA",
  authDomain: "my-app-8555b.firebaseapp.com",
  projectId: "my-app-8555b",
  storageBucket: "my-app-8555b.appspot.com",
  messagingSenderId: "392181434832",
  appId: "1:392181434832:web:42051340a9b2dd451651d5",
  measurementId: "G-6LF6EV13G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);