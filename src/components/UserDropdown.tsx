import React, { useState, useRef, useEffect } from "react";
import { updateProfile, User, } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

type CachedUser = {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
  email: string | null;
  creationTime: string | null;
};

const cacheUser = (user: CachedUser) => {
  localStorage.setItem("cachedUser", JSON.stringify(user));
};

const getCachedUser = (): CachedUser | null => {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem("cachedUser");
  return data ? JSON.parse(data) : null;
};

export default function UserDropdown() {
  const [user, setUser] = useState<CachedUser | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [editing, setEditing] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch and cache full user
  const fetchAndCacheUser = async (firebaseUser: User) => {
    let creationTime = firebaseUser.metadata.creationTime ?? null;

    try {
      const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        if (data.createdAt?.toDate) {
          creationTime = data.createdAt.toDate().toISOString();
        }
      }
    } catch (err) {
      console.warn("Couldn't load Firestore user doc:", err);
    }

    const mergedUser: CachedUser = {
      uid: firebaseUser.uid,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
      email: firebaseUser.email,
      creationTime,
    };

    setUser(mergedUser);
    setDisplayName(mergedUser.displayName || "");
    setPhotoURL(mergedUser.photoURL || "");
    cacheUser(mergedUser);
  };

  useEffect(() => {
    const cached = getCachedUser();
    if (cached) {
      setUser(cached);
      setDisplayName(cached.displayName || "");
      setPhotoURL(cached.photoURL || "");
    } else if (auth.currentUser) {
      fetchAndCacheUser(auth.currentUser);
    }
  }, []);

  const handleDisplayNameSave = async () => {
    if (!auth.currentUser) return;
    try {
      if (displayName === auth.currentUser.displayName) {
        setEditing(false);
        return;
      }

      await updateProfile(auth.currentUser, { displayName });
      setEditing(false);

      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        displayName,
      });
      await auth.currentUser.reload();
      await fetchAndCacheUser(auth.currentUser);

    } catch (error) {
      console.error("Failed to update display name:", error);
    }
  };

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !auth.currentUser) return;

    try {
      // todo: upload photo
    } catch (error) {
      console.error("Error uploading or updating profile photo:", error);
    }
  };

  return (
    <div
      className="absolute mt-1 right-0 p-4 bg-white rounded shadow"
      style={{ border: "1px solid lightgray" }}
    >
      <h3 className="text-lg font-semibold mb-4">Hello :)</h3>

      {/* Profile Picture */}
      <div className="mb-4 flex flex-row gap-4 items-start">
        <div>
          <img
            src={photoURL || "/default-avatar.png"}
            alt="Profile"
            className="min-h-16 min-w-16 rounded-full cursor-pointer mr-1"
            onClick={handlePhotoClick}
            style={{ transition: "box-shadow 0.2s, border-color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 0 4px #cbd5e1")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handlePhotoChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Display Name</label>
          <div className="flex gap-0.5">
            <input
              type="text"
              value={displayName}
              disabled={!editing}
              onChange={(e) => setDisplayName(e.target.value)}
              className={`border rounded px-2 py-1 text-sm ${editing ? "" : "bg-gray-100"}`}
            />
            {editing ? (
              <button onClick={handleDisplayNameSave} className="text-blue-600 text-sm">
                Save
              </button>
            ) : (
              <button onClick={() => setEditing(true)} className="text-gray-600 text-sm">
                Edit
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Email (Disabled) */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={user?.email || ""}
          disabled
          className="border bg-gray-100 rounded px-2 py-1 text-sm w-full"
        />
      </div>

      <hr className="my-4" />

      {/* Account Info */}
      <div>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Account Created:</span>{" "}
          {user?.creationTime
            ? new Date(user.creationTime).toLocaleString()
            : "Unknown"}
        </p>
      </div>
    </div>
  );
}
