import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";


// thanks copilot 
// i guess

// Locally define IconSvgObject type since it's not exported by the package
type IconSvgObject = ([string, {
    [key: string]: string | number;
}])[] | readonly (readonly [string, {
    readonly [key: string]: string | number;
}])[];


interface SidebarElementProps {
  icon: IconSvgObject;  // <-- Use this type for icon data
  label: string;
  href: string;
}

export default function SidebarElement({ icon, label, href }: SidebarElementProps) {
  return (
    <li className="flex flex-row items-center gap-2 pl-3 hover:bg-gray-200 rounded-md cursor-pointer transition-colors duration-200">

      <HugeiconsIcon icon={icon} size={24} strokeWidth={1.5} />
      <button
        type="button"
        className="w-full text-left px-2 py-2 rounded text-lg"
        onClick={function() {window.location.href = href}}
      >
        {label}
      </button>
    </li>
  );
}
