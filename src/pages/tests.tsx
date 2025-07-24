import Sidebar from "../components/DashboardFeatures/Sidebar";
import Layout from "../components/Layout";
import React from "react";

import TestsHome from "../components/TestsHome";
import TestReviewer from "../components/TestReviewer";
import TestPlayer from "../components/TestPlayer";


export default function Tests() {
  return (
    
    <Layout noFooter>

      <div className="flex flex-row items-stretch">
        <Sidebar />

        <TestPlayer testID="BGu1QQQXXO4Pf0QxG63t" />

        
      </div>
    </Layout >
  );
}


            