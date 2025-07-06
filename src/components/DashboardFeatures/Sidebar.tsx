import React from "react";
import "./Sidebar.css";


export default function Sidebar() {
  return (
    <aside className="w-64 shadow-lg sidebar-custom">
      <nav>
        <ul className="flex flex-col px-2 py-4 space-y-0">
          <li>
            <button
              type="button"
              className="w-full text-left px-4 py-3 rounded hover:bg-slate-100 transition text-lg"
            >
              Dashboard
            </button>
          </li>

          <hr className=" mx-4" />

          <li>
            <button
              type="button"
              className="w-full text-left px-4 py-3 rounded hover:bg-slate-100 transition text-lg"
            >
              Practice
            </button>
          </li>

          <hr className=" mx-4" />

          <li>
            <button
              type="button"
              className="w-full text-left px-4 py-3 rounded hover:bg-slate-100 transition text-lg"
            >
              Bookmarks
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
