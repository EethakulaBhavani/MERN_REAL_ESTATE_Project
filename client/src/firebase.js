// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-9add5.firebaseapp.com",
  projectId: "mern-real-estate-9add5",
  storageBucket: "mern-real-estate-9add5.appspot.com",
  messagingSenderId: "1054969584907",
  appId: "1:1054969584907:web:2d57a4d06b84250ea5560e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);