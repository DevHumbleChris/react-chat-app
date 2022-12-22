// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBQ_tLn7GtFcl8pg8FF_s4r5V-QqALY5W8",
  authDomain: "react-chat-app-7a8f6.firebaseapp.com",
  projectId: "react-chat-app-7a8f6",
  storageBucket: "react-chat-app-7a8f6.appspot.com",
  messagingSenderId: "232116169338",
  appId: "1:232116169338:web:19af68198f4cb1df23e9c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
