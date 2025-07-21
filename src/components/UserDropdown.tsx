import React, { useState, useRef } from "react";
import { auth } from "../firebase-config";
import {
  updateProfile,
  signOut,
  User,
} from "firebase/auth";


type UserDropdownProps = {
  user: User;
  onUpdate: (updatedUser: User) => void;
};

export default function UserDropdown({ user, onUpdate }: UserDropdownProps) {
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const [editing, setEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDisplayNameSave = async () => {
    try {
      await updateProfile(user, { displayName });
      setEditing(false);
      // await user.reload();
      onUpdate(user); // Notify parent with updated user
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
    if (!file) return;

    try {
      // TODO: upload to Firebase Storage and get `uploadedURL`
      // await updateProfile(user, { photoURL: uploadedURL });
      // await user.reload();
      // onUpdate(user);
    } catch (error) {
      console.error("Error updating photoURL:", error);
    }
  };

  return (
    <div className="z-3 absolute mt-1 right-0 p-4 bg-white rounded shadow" style={{ border: "1px solid lightgray" }}>
      <h3 className="text-lg font-semibold mb-4">Hello :)</h3>

      {/* Profile Picture */}
      <div className="mb-4 flex flex-row gap-4 items-start">
        <div>
          <img
            src={photoURL || "/default-avatar.png"}
            alt="Profile"
            className="min-h-16 min-w-16 rounded-full cursor-pointer"
            onClick={handlePhotoClick}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 0 4px #cbd5e1")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
          />
          <input type="file" accept="image/*" ref={fileInputRef} className="hidden" onChange={handlePhotoChange} />
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
            <div className="ml-2">
            {editing ? (
              <button onClick={handleDisplayNameSave} className="text-blue-600 text-sm">Save</button>
            ) : (
              <button onClick={() => setEditing(true)} className="text-gray-600 text-sm">Edit</button>
            )}
            </div>
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

      <hr className="my-2 border-gray-300" />

      {/* Account Info */}
      <div className="py-2">
        <span className="text-sm text-gray-600">
          Account Created:{" "}
          {user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleString() : "Unknown"}
        </span>
      </div>

      <hr className="my-2 border-gray-300" />

      <button onClick={handleLogout} className="text-red-600 text-sm text-left pt-2">
        Log Out
      </button>
    </div> 
  );
}
