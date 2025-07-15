import React, { useState, useRef, useEffect } from "react";
import { auth } from "../firebase-config";
import {
  updateProfile,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

export default function UserDropdown() {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [editing, setEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchUser = async () => {
    if (auth.currentUser) {
      await auth.currentUser.reload();
      const u = auth.currentUser;
      setUser(u);
      setDisplayName(u.displayName || "");
      setPhotoURL(u.photoURL || "");
    }
  };

  useEffect(() => {
    fetchUser();

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setDisplayName(firebaseUser?.displayName || "");
      setPhotoURL(firebaseUser?.photoURL || "");
    });

    return () => unsubscribe();
  }, []);

  const handleDisplayNameSave = async () => {
    if (!auth.currentUser) return;
    try {
      await updateProfile(auth.currentUser, { displayName });
      setEditing(false);
      fetchUser();
    } catch (err) {
      console.error("Failed to update display name:", err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.reload();
    } catch (err) {
      console.error("Failed to log out:", err);
    }
  };

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !auth.currentUser) return;

    try {
      // TODO: Upload image to storage & get URL
      // await updateProfile(auth.currentUser, { photoURL: uploadedURL });
      // fetchUser();
    } catch (error) {
      console.error("Error updating photoURL:", error);
    }
  };

  if (!user) return null;

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
            className="min-h-16 min-w-16 rounded-full cursor-pointer"
            onClick={handlePhotoClick}
            style={{ transition: "box-shadow 0.2s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 0 4px #cbd5e1")
            }
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

      {/* Email */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={user.email || ""}
          disabled
          className="border bg-gray-100 rounded px-2 py-1 text-sm w-full"
        />
      </div>

      <hr className="my-4" />

      {/* Account Info */}
      <div>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Account Created:</span>{" "}
          {user.metadata.creationTime
            ? new Date(user.metadata.creationTime).toLocaleString()
            : "Unknown"}
        </p>
      </div>

      <hr className="my-4" />

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="text-red-600 text-sm hover:underline"
      >
        Log Out
      </button>
    </div>
  );
}
