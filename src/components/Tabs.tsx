import { useState } from 'react';
import GetTestsComponent from "./GetTestsComponent"

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabLabels = ['Active', 'Past', 'Tab 3'];

  return (
    <div>
      {/* Tabs Nav */}
      <div className="border-b border-gray-200 dark:border-neutral-700 ">
        <nav
          className="flex gap-x-1 justify-end"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {tabLabels.map((label, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              role="tab"
              aria-selected={activeTab === idx}
              aria-controls={`tab-panel-${idx}`}
              id={`tab-${idx}`}
              className={`-mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-gray-50 text-sm font-medium text-center border rounded-t-lg
                ${
                  activeTab === idx
                    ? 'border-b-transparent text-blue-600 bg-white dark:bg-neutral-800 dark:border-b-gray-800 dark:text-white'
                    : 'border-gray-200 text-gray-500 hover:text-gray-700 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
                }
              `}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tabs Content */}
      <div className="mt-3">
        {tabLabels.map((content, idx) => (
          <div
            key={idx}
            id={`tab-panel-${idx}`}
            role="tabpanel"
            aria-labelledby={`tab-${idx}`}
            className={`${activeTab === idx ? '' : 'hidden'}`}
          >
            <GetTestsComponent/>
          </div>
        ))}
      </div>
    </div>
  );
}
