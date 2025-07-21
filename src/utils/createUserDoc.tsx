import { doc, getDoc, setDoc } from "firebase/firestore";
import { updateProfile, User } from "firebase/auth";
import { db } from "../firebase-config";

export async function createUserDoc(user: User) {
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const today = new Date();
    const yyyymmdd = today.toISOString().slice(0, 10);
    const dayDocRef = doc(db, "users", user.uid, "activityCalendar", yyyymmdd);

    await setDoc(dayDocRef, {
      docsToday: 0,
      practices: 0,
      tests: 0,
    });

    // Firebase Auth: update displayName and photoURL if they exist and differ
    const profileUpdates: { displayName?: string; photoURL?: string } = {};

    if (user.displayName) {
      profileUpdates.displayName = user.displayName;
    }
    if (user.photoURL) {
      profileUpdates.photoURL = user.photoURL;
    }

    if (Object.keys(profileUpdates).length > 0) {
      await updateProfile(user, profileUpdates);
    }
  }
}
