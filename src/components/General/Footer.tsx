import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-700 text-gray-100 py-6 px-6 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
                {/* Left side: copyright */}
                <p className="text-md">&copy; {new Date().getFullYear()} makrcat mayyykerrrcatuhh</p>

                {/* Center: links */}
                <nav className="space-x-4 flex flex-col gap-2">
                    <a
                        href="/privacy"
                        className="hover:text-teal-600 dark:hover:text-teal-400 text-md"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="/terms"
                        className="hover:text-teal-600 dark:hover:text-teal-400 text-md"
                    >
                        Terms of Service
                    </a>
                    <a
                        href="/No"
                        className="hover:text-teal-600 dark:hover:text-teal-400 text-md"
                    >
                        Contact
                    </a>
                </nav>


                <div className="mt-4 md:mt-0 flex space-x-4">
                    <a
                        href="https://github.com/makrcat/sciolyskillz"
                        title="OKOK I KNOW I was crashing out at about commit ~70. don't judge me"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="hover:text-teal-600 dark:hover:text-teal-400"
                    >
                        Github

                    </a>
                    {/* Add more social icons here if you want */}
                </div>
            </div>
        </footer>
    );
}
