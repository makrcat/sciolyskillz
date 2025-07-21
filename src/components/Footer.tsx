import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-700 text-gray-100 py-6 px-6 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Left side: copyright */}
                <p className="text-sm">&copy; {new Date().getFullYear()} makrcat. Not a single right reserved.</p>

                {/* Center: links */}
                <nav className="mt-4 md:mt-0 space-x-4">
                    <a
                        href="/privacy"
                        className="hover:text-teal-600 dark:hover:text-teal-400 text-sm"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="/terms"
                        className="hover:text-teal-600 dark:hover:text-teal-400 text-sm"
                    >
                        Terms of Service
                    </a>
                    <a
                        href="/contact"
                        className="hover:text-teal-600 dark:hover:text-teal-400 text-sm"
                    >
                        Contact
                    </a>
                </nav>


                <div className="mt-4 md:mt-0 flex space-x-4">
                    <a
                        href="https://twitter.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="hover:text-teal-600 dark:hover:text-teal-400"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="no" />
                        </svg>

                    </a>
                    {/* Add more social icons here if you want */}
                </div>
            </div>
        </footer>
    );
}
