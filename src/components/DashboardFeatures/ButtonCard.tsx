"use client";
import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase-config.js';

import styles from './ButtonCard.module.css';

const BUTTON_DOC_ID = 'button';

export default function ButtonCard() {
  const [counter, setCounter] = useState<number>(0); 
  const [savedCounter, setSavedCounter] = useState<number>(0); 
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // fetching stuff
    const fetchCounter = async () => {
      const buttonDocRef = doc(db, 'todo', BUTTON_DOC_ID);
      const buttonDoc = await getDoc(buttonDocRef);

      if (buttonDoc.exists()) {
        const firestoreCounter = buttonDoc.data().counter || 0;
        setCounter(firestoreCounter);
        setSavedCounter(firestoreCounter);
      } else {
        // if it doesnt even exist yet set 0
        await setDoc(buttonDocRef, { counter: 0 });
        setCounter(0);
        setSavedCounter(0);
      }
      setLoading(false);
    };
    fetchCounter();
  }, []);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleSave = async () => {
    const buttonDocRef = doc(db, 'todo', BUTTON_DOC_ID);
    await setDoc(buttonDocRef, { counter });
    setSavedCounter(counter);
  };

  const handleDelete = async () => {
    if (window.confirm('This resets the counter')) {
      const buttonDocRef = doc(db, 'todo', BUTTON_DOC_ID);
      await deleteDoc(buttonDocRef);
      setCounter(0);
      setSavedCounter(0);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles['button-card']}>
      <h3 className="text-md p-0 mb-1">Button card</h3>
      <p className="text-sm mb-2">Why do you have access to this? Well, because I don't know how to use firebase yet.</p>
      
      <div>Counter: {counter}</div>
      <button className={styles['button-card-button']} onClick={handleIncrement}>
        Click!
      </button>
      <button
        className={styles['button-card-button']} 
        onClick={handleSave}
        style={{ marginLeft: 4}}
        disabled={counter === savedCounter}
      >
        Save
      </button>
      <button
        className={styles['button-card-button']} 
        onClick={handleDelete}
        style={{ marginLeft: 4}}
      >
        Reset
      </button>
    </div>
  );
}
