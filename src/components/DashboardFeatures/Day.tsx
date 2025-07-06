import React from "react";

export  default function  Day() {
  const today = new Date();

  const month = today.toLocaleString("default", { month: "long" });
  const day = today.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";
  const formattedDate = `${month} ${day}${suffix}`;
  const holiday = "national OW my ears day";

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-900 p-4 rounded-lg shadow-sm h-full">
      <p className="text-base font-medium">
        <span className="font-bold">Today is</span>
        <h2>
          {formattedDate}
          <br />
           —
          
          </h2>
          it is{" "}
        <span className="italic">{holiday}</span>
      </p>
    </div>
  );
}
