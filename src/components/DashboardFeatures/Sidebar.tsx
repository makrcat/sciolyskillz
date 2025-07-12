import React from "react";
import SidebarElement from "./SidebarElement";
import { SmileIcon, PencilIcon, Bookmark02Icon, BookEditIcon } from "@hugeicons/core-free-icons";

export default function Sidebar() {
  return (
    <aside className="w-64 shadow-lg sidebar-custom bg-slate-50">
      <nav>
        <ul className="flex flex-col px-2 py-4 space-y-0">
          <SidebarElement icon={SmileIcon} label="Dashboard" />
          <SidebarElement icon={PencilIcon} label="Practice" />
          <SidebarElement icon={BookEditIcon} label="Docs" />
          <SidebarElement icon={Bookmark02Icon} label="Bookmarks" />
        </ul>
      </nav>
    </aside>
  );
}
