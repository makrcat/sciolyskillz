import React from 'react';

export default function TestStats() {
  return (
    <div className="flex flex-row h-20 gap-4 w-full">
      <div className="border border-gray-200 rounded-lg shadow w-full flex items-center">
        <div className="flex items-center gap-4 p-4">
          <div className="border border-amber-600 h-12 w-12 rounded flex items-center justify-center">
            icon
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-semibold">69%</h1>
            <div className="text-sm text-gray-600">accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
};
