import React, { useState, useRef, useEffect } from "react";
import { updateProfile, User } from "firebase/auth";
import { auth } from "../firebase-config";

// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// const storage = getStorage();

const cacheUser = (user: User) => {
  const cached = {
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL,
    email: user.email,
    creationTime: user.metadata.creationTime,
  };
  localStorage.setItem("cachedUser", JSON.stringify(cached));
};

const getCachedUser = () => {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem("cachedUser");
  return data ? JSON.parse(data) : null;
};

export default function UserDropdown() {
  // Add user state here
  const [user, setUser] = useState<User | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [editing, setEditing] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
  // Load from cache first
  const cached = getCachedUser();
  if (cached) {
    setUser(cached);
    setDisplayName(cached.displayName || "");
    setPhotoURL(cached.photoURL || "");
  } else if (auth.currentUser) {
    // fallback if cache empty (like first time login)
    setUser(auth.currentUser);
    setDisplayName(auth.currentUser.displayName || "");
    setPhotoURL(auth.currentUser.photoURL || "");
    cacheUser(auth.currentUser);
  }
}, []);

  const handleDisplayNameSave = async () => {
    if (!user) return;

    try {
      await updateProfile(auth.currentUser!, { displayName });
      setEditing(false);

      // Refresh user info from auth and update state/cache
      await auth.currentUser!.reload();

      const updatedUser = auth.currentUser!;
      setUser(updatedUser);
      setDisplayName(updatedUser.displayName || "");
      // reflect changes

      // save it for next time
      cacheUser(updatedUser);
      

    } catch (error) {
      console.error("Failed to update display name:", error);
    }
  };

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    try {
        /*
      const photoRef = ref(storage, `profilePhotos/${user.uid}`);
      await uploadBytes(photoRef, file);

      const downloadURL = await getDownloadURL(photoRef);
      await updateProfile(auth.currentUser!, { photoURL: downloadURL });

      await auth.currentUser!.reload();
      const updatedUser = auth.currentUser!;
      setUser(updatedUser);
      setPhotoURL(updatedUser.photoURL || "");

      cacheUser(updatedUser);

      alert("Profile photo updated!");
      */
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
          {user?.metadata?.creationTime
            ? new Date(user.metadata.creationTime).toLocaleString()
            : "Unknown"}
        </p>
      </div>
    </div>
  );
}
