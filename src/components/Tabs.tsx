import { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabLabels = ['Tab 1', 'Tab 2', 'Tab 3'];
  const tabContents = [
    'This is the first tab body.',
    'This is the second tab body.',
    'This is the third tab body.',
  ];

  return (
    <>
      <div className="tabs tabs-boxed">
        {tabLabels.map((label, idx) => (
          <a
            key={idx}
            className={`tab ${activeTab === idx ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            {label}
          </a>
        ))}
      </div>

      <div className="mt-4">
        <p>{tabContents[activeTab]}</p>
      </div>
    </>
  );
}
