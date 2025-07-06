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
    <div className="bg-yellow-100 border-l-4 text-yellow-900 p-4 rounded-lg shadow-sm h-full" style={{"border":"1px solid goldenrod"}}>
      <p className="text-base font-normal">
        <h3 className="p-0 m-0 font-normal">Today is</h3>
        <h1 className="p-0 m-0 font-normal">
          {formattedDate} 
          </h1>
          —
          <br />
          it is{" "}
        <span className="italic">{holiday}</span>
      </p>
    </div>
  );
}
