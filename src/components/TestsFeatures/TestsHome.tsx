"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";
import TestStats from "./TestStats";
import CreateTestComponent from "./CreateTestComponent"
import GetTests from "./GetTestsComponent"

export default function TestsHome({ onReviewTest, onPlayTest }: { onReviewTest: (id: string) => void, onPlayTest: (id: string) => void }) {
    const [showCreate, setShowCreate] = useState(false);
    return (
        <div className="relative p-8 w-full overflow-clip">


            <div className="flex flex-row gap-4 mb-4">
                <div className="flex-1">
                    <h1 className="text-2xl m-0 mb-2">Practice Tests</h1>
                    <p className="text-sm text-gray-600">Whrrr. Generating tests...
                        practice makes perfect, as they say
                    </p>
                </div>

                <div className="relative inline-block">

                    <img className="absolute top-[-30] left-[-50] w-150" src='/static/img/splat.png'></img>


                    <button
                        className="relative z-10 rounded-lg px-5 py-1.5 h-min 
             border border-black/10 shadow 
             bg-white/20 backdrop-blur-sm 
             hover:cursor-pointer hover:bg-white/30 hover:shadow-lg 
             transition duration-300"

                        onClick={() => setShowCreate(!showCreate)}
                    >
                        New Test
                    </button>


                </div>
            </div>

            <TestStats />

            <h1 className="text-2xl m-0 mt-6 mb-2">All Tests</h1>
            <div className="relative -top-10">
                <Tabs />
            </div>

            {showCreate && <CreateTestComponent onClose={() => setShowCreate(false)} />}

            <GetTests onReviewTest={onReviewTest} onPlayTest={onPlayTest} />



        </div>
    )
}