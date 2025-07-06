import React from "react";

export default function TopicsPanel() {
  return (
    <div className="flex flex-col h-full items-start gap-4 p-4 bg-blue-50 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold">Topics</h2>
      
      <div className="flex flex-col w-full gap-2">
        
        <div className="bg-white rounded-md border w-full border-gray-300 h-12 flex items-center justify-center text-gray-400 italic">
          empty section for now
        </div>

      </div>

      <button style={{"border": "2px dashed gray"}}
        className="w-full h-10 rounded-lg bg-blue-50 text-gray-400 text-2xl font-bold flex items-center justify-center hover:bg-slate-300 transition border"
      >
        +
      </button>
    </div>
  );
}
