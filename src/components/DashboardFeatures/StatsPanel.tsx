import React from "react";
import CalendarGrid from "./CalendarGrid";

/* Asked GPT how to do this one */

export default function StatsPanel() {
  return (
    <div className="flex h-full bg-slate-50 rounded-xl shadow-sm " style={{"border":"1px solid oklch(86.9% 0.022 252.894)"}}>
      {/* Practices */}
      <div className="flex-1 min-w-[200px] p-4">
        <h3 className="text-lg font-semibold mb-3">Practices</h3>
        <div className="h-30 my-3 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 italic">
          [Pie Chart]
        </div>
        <p>
          <strong>313</strong> correct
        </p>
        <p>
          <strong>28</strong> incorrect
        </p>
      </div>

      {/* Divider */}
      <div className="w-px bg-slate-300" />

      {/* Progress */}
      <div className="flex-1 min-w-[200px] p-4">
        <h3 className="text-lg font-semibold mb-3">Tests</h3>
        <div className="h-30 my-3 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 italic">
          [Bar Graph]
        </div>
      </div>

      {/* Divider */}
      <div className="w-px bg-slate-300" />

      {/* Calendar */}
      <div className="min-w-[300px] p-4">
        <CalendarGrid />
      </div>
    </div>
  );
}
