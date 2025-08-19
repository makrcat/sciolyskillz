import React from 'react';

export default function TestStats() {
  return (
    <div className="flex flex-row h-20 gap-4 w-full">
      <div className="border border-gray-400 rounded-lg 
      shadow-[0_2px_0_0_#bdbdbd] w-full flex items-center
       relative
        overflow-hidden items-center">

        <div className="absolute top-[-80px] left-[55%] w-100 h-100 bg-sky-100/80  rounded-full">
        </div>

        <div className="absolute top-[-80px] left-[25%] w-100 h-100 bg-amber-100/80 rounded-full">
        </div>

        <div className="absolute top-[-80px] left-[-5%] w-100 h-100 bg-pink-100/80 rounded-full">
        </div>


        <div className="flex items-center gap-4 p-4 z-10">


          <div className="border border-amber-600 h-12 w-12 rounded flex items-center justify-center">
            icon
          </div>


          <div className="flex-1">
            <h1 className="text-xl font-semibold">69%</h1>
            <div className="text-sm text-gray-600">accuracy</div>
          </div>


        </div>
      </div>
    </div>
  );
};
