'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import TestsHome from '../../components/TestsFeatures/TestsHome';
import TestReviewer from '../../components/TestsFeatures/TestReviewer';
import TestPlayer from '../../components/TestsFeatures/TestPlayer';


export default function TestsClient() {

  function Bar() {
    return (
      <div className="w-full bg-gray-100 border-b border-gray-300">
        <button
          onClick={() => router.push('/tests')}
          className="px-4 py-2 bg-gray-100 border-r border-gray-300 hover:bg-gray-200"
        >
          ← Back
        </button>
      </div>


    )
  }

  const router = useRouter();
  const searchParams = useSearchParams();
  const reviewTest = searchParams.get('reviewTest');
  const practiceTest = searchParams.get('practiceTest');

  const handleReviewTest = (id: string) => {
    router.push(`/tests?reviewTest=${id}`);
  };

  const handlePlayTest = (id: string) => {
    router.push(`/tests?practiceTest=${id}`);
  };

  return (
    <div>
      {!reviewTest && !practiceTest && (
        <TestsHome
          onReviewTest={handleReviewTest}
          onPlayTest={handlePlayTest}
        />
      )}

      {typeof reviewTest === "string" && (
        <>
          <Bar />
          <TestReviewer testID={reviewTest} />
        </>
      )}

      {typeof practiceTest === "string" && (
        <>
          <Bar />

          <TestPlayer testID={practiceTest} />
        </>
      )}
    </div>
  );
}
