import React, { useState } from "react";
import type { User } from "firebase/auth";

type UserDropdownProps = {
  user: User;
};

export default function UserDropdown({user}: UserDropdownProps) {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="ml-2 logged-in-button rounded-lg px-3 py-2 text-center inline-flex items-center"
      >
        <img
          src={user.photoURL}
          alt="profile"
          className="rounded-full w-6 h-6 mr-2"
        />
        <span className="text-sm">{user.displayName}</span>
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-opacity-5 z-50" style={{ border: "1px solid lightgray" }}>
          <div className="py-1 text-sm text-gray-700">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sign Out</a>
          </div>
        </div>
      )}
    </div>
  );
}
