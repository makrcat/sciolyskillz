import React, { useState, useEffect } from "react";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

import { auth, provider } from "../firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { createUserDoc } from "../utils/createUserDoc";
import type { User } from "firebase/auth";

import UserButton from "./UserButton";


export default function GoogLoginButton() {
  const [user, setUser] = useState<User | null>(null);

  // Load user on first render
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);


  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // a type of firebase.User including UID and stuff
      // 

      setUser(user);

      // create firestore doc if it doesn't exist

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        createUserDoc(user);
      }


    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-2 ml-2">
          {
          //<span>{user.displayName}</span>
          //<img src={user.photoURL} className="profile-img" width="30" />
          }

       <UserButton user={user}/>

        </div>
      ) : (
        <button onClick={handleLogin} type="button" className="ml-2 login-button rounded-lg px-3 py-2 text-center inline-flex items-center">
          <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
            <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
          </svg>
          Sign in
        </button>
      )}
    </div>
  );
}
