import React from "react";
import Sidebar from "../components/DashboardFeatures/Sidebar";
import Layout from "../components/General/Layout";
import { useRouter } from 'next/router';

import TestsHome from "../components/TestsFeatures/TestsHome";
import TestReviewer from "../components/TestsFeatures/TestReviewer";
import TestPlayer from "../components/TestsFeatures/TestPlayer";

export default function Tests() {
  const router = useRouter();
  const { reviewTest, practiceTest } = router.query;

  const handleReviewTest = (id: string) => {
    router.push(`/tests?reviewTest=${id}`);
  };

  const handlePlayTest = (id: string) => {
    router.push(`/tests?practiceTest=${id}`);
  };

  return (
    <Layout noFooter>
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full">
          <div>
            {!reviewTest && !practiceTest && (
              <TestsHome
                onReviewTest={handleReviewTest}
                onPlayTest={handlePlayTest}
              />
            )}

            {typeof reviewTest === "string" && (
              <>
                <button
                  onClick={() => router.push('/tests')}
                  className="mb-4 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                  ← Back
                </button>
                <TestReviewer testID={reviewTest} />
              </>
            )}

            {typeof practiceTest === "string" && (
              <>
                <button
                  onClick={() => router.push('/tests')}
                  className="mb-4 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                  ← Back
                </button>
              <TestPlayer testID={practiceTest} />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
