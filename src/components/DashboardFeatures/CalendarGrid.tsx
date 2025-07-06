import React from "react";

export default function CalendarGrid() {
  const rows = 5;
  const cols = 7;
  const totalCells = rows * cols;

  return (
    <div className="calendar-section">
      <div className="calendar-header">
        <span>2025 July</span>
        <div>
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
      </div>
      <div className="calendar-grid">
        {Array.from({ length: totalCells }).map((_, idx) => (
          <div key={idx} className="calendar-cell"></div>
        ))}
      </div>
    </div>
  );
}
