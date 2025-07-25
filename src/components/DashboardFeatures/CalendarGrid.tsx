import React from "react";

export default function CalendarGrid() {
  const rows = 6;
  const cols = 7;
  const totalCells = rows * cols;

  // Optional: random contribution levels (0–4) for demo
  const levels = Array.from({ length: totalCells }, () =>
    Math.floor(Math.random() * 5)
  );

  const levelToColor = [
    "bg-gray-200",
    "bg-green-200",
    "bg-green-400",
    "bg-green-500",
    "bg-green-700",
  ];

  return (
    <div className="calendar-section text-sm">
      <div className="calendar-header flex items-center mb-3">
        <span className="font-semibold">2025 July</span>
        <div className="space-x-2">
          <button className="px-2 py-1  rounded-sm">&lt;</button>
          <button className="px-2 py-1 rounded-sm">&gt;</button>
        </div>
      </div>

      {/* GitHub-style contribution grid */}
      <div className="inline">
        <div className="grid gap-1 w-fit"
        style={{
      gridTemplateColumns: `repeat(${cols}, 1.1rem)`,
      gridTemplateRows: `repeat(${rows}, 1.1rem)`,
    }}>
          {levels.map((level, idx) => (
            <div
              key={idx}
              className={`w-4 h-4 ${levelToColor[level]}`}
              title={`Level ${level}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
