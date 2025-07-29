'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import TestsHome from '../../components/TestsFeatures/TestsHome';
import TestReviewer from '../../components/TestsFeatures/TestReviewer';
import TestPlayer from '../../components/TestsFeatures/TestPlayer';

export default function TestsClient() {
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
  );
}
