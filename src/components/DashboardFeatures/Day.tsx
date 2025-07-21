import React from "react";
import ExternalLink from '../ExternalLink';

import sillyHolidaysData from "../../../static/silly-holidays-US.json";

import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare02Icon } from "@hugeicons/core-free-icons";

// credit: https://todaysholiday.herokuapp.com/holidays
// but i hope they fix their link
// todo: add the herokuapp link to website credits 

type SillyHoliday = {
  tags: string[];
  _id: string;
  name: string;
  month: number;
  day: number;
};

function getTodaySillyHolidayNames(holidays: SillyHoliday[]): string[] {
  const today = new Date();
  const todayMonth = today.getMonth() + 1; // getMonth() is 0-based
  const todayDay = today.getDate();

  return holidays
    .filter(h => h.month === todayMonth && h.day === todayDay)
    .map(h => h.name);
}

const names = getTodaySillyHolidayNames(sillyHolidaysData as SillyHoliday[]);
let holiday : string;
let googleLink : string | null = null;


if (names.length === 0) {
  holiday = "no silly holiday :/";
} else {
  holiday = names[Math.floor(Math.random() * names.length)];
  googleLink = "https://www.checkiday.com/";
}

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

  return (
    <div className="bg-yellow-100 text-yellow-900 p-4 rounded-lg h-full relative" style={{"border":"1px solid goldenrod"}}>
      <div className="text-base font-normal">
        <div className="p-0 m-0 text-xl">Today is</div>
        <div className="p-0 m-0 text-4xl">
          {formattedDate} 
          </div>
          —
          <br />
        <span className="italic">{holiday}</span>
        <br />

      {googleLink && (
        <span className="text-sm">
          <span className="absolute bottom-1.5 right-1.5">
            
              <ExternalLink href={googleLink}>
                <HugeiconsIcon icon={LinkSquare02Icon} size={20}/>
              </ExternalLink>
            
          </span>
        </span>
      )}
      </div>
    </div>
  );
}
