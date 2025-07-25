import React, { useEffect, useState } from "react";
import ExternalLink from "../ExternalLink";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare02Icon } from "@hugeicons/core-free-icons";

type SillyHoliday = {
  tags: string[];
  _id: string;
  name: string;
  month: number;
  day: number;
};

function getTodaySillyHolidayNames(holidays: SillyHoliday[]): string[] {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  return holidays
    .filter((h) => h.month === todayMonth && h.day === todayDay)
    .map((h) => h.name);
}

export default function Day() {
  const [holiday, setHoliday] = useState<string>("...");
  const [googleLink, setGoogleLink] = useState<string | null>(null);


  useEffect(() => {
    fetch("/static/silly-holidays-US.json")
      .then((res) => res.json())
      .then((data: SillyHoliday[]) => {
        const names = getTodaySillyHolidayNames(data);
        if (names.length === 0) {
          setHoliday("no silly holiday :/");
        } else {
          const chosen = names[Math.floor(Math.random() * names.length)];
          setHoliday(chosen);
          setGoogleLink("https://www.checkiday.com/");
        }
      })
      .catch((err) => {
        console.error("Failed to load silly holidays", err);
        setHoliday("error loading silly holiday :(");
      });
  }, []);


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
    <div
      className="bg-yellow-100 text-yellow-900 p-4 rounded-lg h-full relative"
      style={{ border: "1px solid goldenrod" }}
    >
      <div className="text-base font-normal">
        <div className="p-0 m-0 text-xl">Today is</div>
        <div className="p-0 m-0 text-4xl">{formattedDate}</div>—<br />
        <span className="italic">{holiday}</span>
        <br />
        {googleLink && (
          <span className="text-sm">
            <span className="absolute bottom-1.5 right-1.5">
              <ExternalLink href={googleLink}>
                <HugeiconsIcon icon={LinkSquare02Icon} size={20} />
              </ExternalLink>
            </span>
          </span>
        )}
      </div>
    </div>
  );
}
