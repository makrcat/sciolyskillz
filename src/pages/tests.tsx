import Sidebar from "../components/DashboardFeatures/Sidebar";
import Tabs from "../components/Tabs";
import Layout from "../components/Layout";
import TestStats from "../components/TestStats";

import React, { useState } from "react";
import CreateTestComponent from "../components/CreateTestComponent"

import GetTests from "../components/GetTestsComponent"

export default function Tests() {
  const [showCreate, setShowCreate] = useState(false);

  return (
    
    <Layout noFooter>

      <div className="flex flex-row items-stretch">
        <Sidebar />

        <div className="p-8 w-full">

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

          </div>

          <TestStats />

        <h1 className="text-2xl m-0 mt-6 mb-2">All Tests</h1>
        <div className="relative -top-10">
          <Tabs />
        </div>

        {showCreate && <CreateTestComponent onClose={() => setShowCreate(false)} />}

          <GetTests />

      </div>
    </div>
    </Layout >
  );
}
