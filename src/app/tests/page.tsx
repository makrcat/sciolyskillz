// *not* marked "use client"

import Sidebar from '../../components/DashboardFeatures/Sidebar';
import { Suspense } from 'react';
import TestsClient from '../../components/TestsFeatures/TestsClient';

export default function Tests() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <TestsClient />
        </Suspense>
      </div>
    </div>
  );
}
