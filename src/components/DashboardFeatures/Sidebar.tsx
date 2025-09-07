"use client";
import React from 'react';
import SidebarElement from "./SidebarElement";
import { SmileIcon, PencilIcon, Bookmark02Icon, BookEditIcon, Task01Icon } from "@hugeicons/core-free-icons";

export default function Sidebar() {
  return (

      <div className="w-64 sidebar-custom h-full shadow-sm" style={{"borderRight":"1px solid lightgray"}}>
        <nav>
          <ul className="px-2 py-4 items-start">
            <SidebarElement icon={SmileIcon} label="Dashboard" href="dashboard" />
            <SidebarElement icon={PencilIcon} label="Practice" href="practice" />
            <SidebarElement icon={Task01Icon} label="Tests" href="tests" />
            <SidebarElement icon={BookEditIcon} label="Docs" href="docs" />
            <SidebarElement icon={Bookmark02Icon} label="Bookmarks" href="bookmarks" />
          </ul>
        </nav>
      </div>
  );
}
