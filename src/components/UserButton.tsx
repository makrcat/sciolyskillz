import React, { useState } from "react";
import type { User } from "firebase/auth";

import UserDropdown from "./UserDropdown";

type UserButtonProps = {
  user: User;
};


export default function UserButton({user}: UserButtonProps) {
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
      <UserDropdown />
      )}
    </div>
  );
}
