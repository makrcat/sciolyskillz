import React from "react";

export default function Spinner() {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="relative w-8 h-8" role="status">
        <div className="absolute inset-0 rounded-full animate-spin bg-[conic-gradient(red,orange,orange,yellow,yellow,green,green,teal,teal,blue,blue,purple,purple,red)] opacity-30"></div>
        <div className="absolute inset-[4px] rounded-full bg-white dark:bg-black"></div>
        
      </div>
      {/*<span className="text-gray-500">Loading...</span>*/}
    </div>
  );
}
