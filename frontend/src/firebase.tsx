// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9ohPo51SuonX5utGug2xfivzp0VLMpCU",
  authDomain: "lesson14-56954.firebaseapp.com",
  projectId: "lesson14-56954",
  storageBucket: "lesson14-56954.firebasestorage.app",
  messagingSenderId: "145708386828",
  appId: "1:145708386828:web:688e5b003c791e4fb6bc29",
  measurementId: "G-WQEHG78GL1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Analytics (will be null if running in non-browser environment)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

