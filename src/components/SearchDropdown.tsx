import React, { useState, useRef, useEffect } from "react";
import { connectSearchBox } from "react-instantsearch-dom";

const CustomSearchBox = connectSearchBox(SearchDropdown);
export default CustomSearchBox;


//@ts-ignore
function SearchDropdown({ currentRefinement, refine }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [division, setDivision] = useState("B");
    const dropdownRef = useRef(null);

    // Close dropdown if clicked outside
    useEffect(() => {
        //@ts-ignore
        function handleClickOutside(event) {
            //@ts-ignore
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const [searchValue, setSearchValue] = useState(currentRefinement);

    //@ts-ignore
    const handleSubmit = (e) => {
        e.preventDefault();
        // refine manually
        refine(searchValue);
    };

    return (
        <form
            className="max-w-lg mx-auto relative"
            onSubmit={handleSubmit}>
            <div className="w-full h-full blur-2xl absolute bg-gradient-to-r from-teal-500 to-blue-600 p-2 rounded-xl "></div>
            <div className="flex">
                <label
                    htmlFor="search-dropdown"
                    className="mb-2 text-sm font-medium text-white sr-only"
                >
                    Select Division
                </label>

                {/* Dropdown Button */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        id="dropdown-button"
                        aria-haspopup="listbox"
                        aria-expanded={dropdownOpen}
                        className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none force-border focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    >
                        {division}{" "}
                        <svg
                            className="w-2.5 h-2.5 ms-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                        <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 mt-1 dark:bg-gray-700">
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                role="listbox"
                                aria-labelledby="dropdown-button"
                            >
                                {["B", "C"].map((option) => (
                                    <li key={option}>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setDivision(option);
                                                setDropdownOpen(false);
                                            }}
                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            role="option"
                                            aria-selected={division === option}
                                        >
                                            {option}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Search input with button */}
                <div className="relative w-full" >

                    
                    <input
                        type="search"
                        id="search-dropdown"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.currentTarget.value)}
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 "
                        placeholder="Search by ID, text, or anything else"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-teal-700 rounded-e-lg border hover:bg-teal-800" 
                    >
                        <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    );
}
