// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// 

// This part can be public, it doesn't expose pws
// prolly authdomain linked anyway (later)
const firebaseConfig = {
  apiKey: "AIzaSyB_OwzEDOpt__6YyrdXh-vU8wq9h2pKnXU",
  authDomain: "sciolyskillz.firebaseapp.com",
  projectId: "sciolyskillz",
  storageBucket: "sciolyskillz.firebasestorage.app",
  messagingSenderId: "702267127932",
  appId: "1:702267127932:web:a75a03c81656ed6ba171f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, provider };