import React, { useState } from "react";
import GoogLoginButton from "./LoginButton";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon02Icon } from "@hugeicons/core-free-icons";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // Simple dark mode toggle: toggles a 'dark' class on <html>
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="flex flex-row text-lg items-center justify-between h-16 px-6 bg-gray-100 dark:bg-gray-900">
      {/* Left side: Logo + main links */}
      <div className="flex items-center space-x-6 ">
        {/* Logo / site image */}
        <img
          src="../../static/img/logo.png"
          alt="Site Logo"
          className="h-12 w-auto"
        />

        {/* Navigation links */}
        <nav className="flex gap-2 space-x-4 text-gray-700 dark:text-gray-300 font-medium">
          <a href="/dashboard" className="hover:text-teal-600 dark:hover:text-teal-400">
            Dashboard
          </a>
          <a href="/topics" className="hover:text-teal-600 dark:hover:text-teal-400">
            Topics
          </a>
          <a href="/problem-bank" className="hover:text-teal-600 dark:hover:text-teal-400">
            Problem Bank
          </a>
        </nav>
      </div>

      {/* Right side: About + Dark Mode + Sign Up */}
      <div className="flex items-center space-x-6 gap-2">
        <a href="/about" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium">
          About
        </a>


        <button
          onClick={toggleDarkMode}
          className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 focus:outline-none"
        >
          {darkMode ? (

            <HugeiconsIcon icon={Sun01Icon} />
          ) : (

            <HugeiconsIcon icon={Moon02Icon} />
          )}
        </button>

        <GoogLoginButton />
      </div>
    </header>
  );
}
