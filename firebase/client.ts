// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuWoo7hEPGQpHGM8Ls8QvZ7u6JTipId_s",
  authDomain: "interviewguide-fe77a.firebaseapp.com",
  projectId: "interviewguide-fe77a",
  storageBucket: "interviewguide-fe77a.firebasestorage.app",
  messagingSenderId: "622141812171",
  appId: "1:622141812171:web:3c034c0a07169cdf171a4e",
  measurementId: "G-9L85E3TD4R",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
