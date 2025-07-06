import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 h-screen border-r border-gray-300">
      <nav>
        <ul className="flex flex-col space-y-3 px-2">
          <li>
            <button
              type="button"
              className="w-full text-left px-4 py-3 rounded hover:bg-blue-100 transition"
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              type="button"
              className="w-full text-left px-4 py-3 rounded hover:bg-blue-100 transition"
            >
              Practice
            </button>
          </li>
          <li>
            <button
              type="button"
              className="w-full text-left px-4 py-3 rounded hover:bg-blue-100 transition"
            >
              Bookmarks
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
