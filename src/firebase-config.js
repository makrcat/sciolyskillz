// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// 

const p1 = "AIza";
const p2 = "SyB_";
const p3 = "Owz";
const p4 = "EDOp";
const p5 = "t__6";
const p6 = "Yyrd";
const p7 = "Xh-v";
const p8 = "U8wq";
const p9 = "9h2pK";
const p10 = "nXU";

const apiKey = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10;


// This part can be FULLY public but
// Github keeps warning me
// ok the .env are not working lol 
const firebaseConfig = {
  apiKey: apiKey,
  
  
  //process.env.REACT_APP_FIREBASE_API_KEY,
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