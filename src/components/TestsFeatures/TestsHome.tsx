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


{/*
            <div className="absolute inset-0">
                <div className="top-15 left-0 absolute h-15 w-15 rounded-full
            bg-gradient-to-br bg-blue-200
            bg-opacity-30 blur-2xl"></div>
                <div className="top-0 left-15 absolute h-15 w-15 rounded-full
            bg-gradient-to-br bg-pink-200
            bg-opacity-30 blur-2xl"></div>

                <div className="-top-5 -left-5 absolute h-15 w-15 rounded-full
            bg-gradient-to-br bg-purple-200
            bg-opacity-30 blur-2xl"></div>
            </div>

*/}


            <div className="flex flex-row gap-4 mb-4">
                <div className="flex-1">
                    <h1 className="text-2xl m-0 mb-2">Practice Tests</h1>
                    <p className="text-sm text-gray-600">Whrrr. Generating tests...
                        practice makes perfect, as they say
                    </p>
                </div>

                <div className="relative inline-block">
                    {/* the blur */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-600 to-blue-700 blur-lg opacity-80 h-10"></div>

                    {/* Actual button */}
                    <button className="relative z-10 shadow text-white font-semibold rounded-lg px-5 py-1.5 h-min border border-white bg-[rgba(255,255,255,0.3)] hover: cursor-pointer hover:bg-[rgba(255,255,255,0.4)] hover:shadow-lg transition transition-300"
                        onClick={() => setShowCreate(!showCreate)}
                    >
                        New Test
                    </button>


                </div>




                {/*just for testing*/}
                <button className="relative z-10 shadow text-black font-semibold rounded-lg px-5 py-1.5 h-min border border-black hover: cursor-pointer transition transition-300"
                >
                    uh
                </button>




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