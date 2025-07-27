import React, { useState } from "react";
import { createUserTest, TestConfig} from "../../utils/CreateTest";
import { HugeiconsIcon } from '@hugeicons/react';
import { StopWatchIcon, InfinityCircleIcon } from "@hugeicons/core-free-icons";

interface Props {
    onClose: () => void;
}

// Example categories/events
const categories = [
    "Anatomy & Physiology",
]

/*
    "Astronomy",
    "Chemistry Lab",
    "Codebusters",
    "Detector Building",
    "Disease Detectives",
    "Dynamic Planet",
    "Ecology",
    "Experimental Design",
    "Fermi Questions",
    "Flight",
    "Forensics",
    "Forestry",
    "Geologic Mapping",
    "Microbe Mission",
    "Optics",
    "Robot Tour",
    "Scrambler",
    "Tower",
    "Wright Stuff",
    "Write It Do It",
*/

const anatomy_by_year: Record<number, string[]> = {
    2024: ["Cardiovascular", "Lymphatic", "Excretory"],
    2025: ["Integumentary", "Skeletal", "Muscular"],
    2026: ["Nervous", "Endocrine", "Sensory"],
};


export default function CreateTestComponent({ onClose }: Props) {
    const [category, setCategory] = useState("");
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const [selectedSubsystems, setSelectedSubsystems] = useState<string[]>([]);
    const [tags, setTags] = useState("");
    const [timeLimit, setTimeLimit] = useState("15:00");
    const [aiQuestions, setAiQuestions] = useState(0);
    const [noTimeLimit, setNoTimeLimit] = useState(false);
    const [questions, setQuestions] = useState(10);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [error, setError] = useState<string | null>(null);

    /* react :sob: */
    /*************** */

    const handleTimeChange = (value: string) => {
        // Allow empty string so user can clear input
        if (value === "") {
            setTimeLimit(value);
            return;
        }

        // Allow only digits and colons
        if (!/^[0-9:]*$/.test(value)) {
            return; // reject invalid chars immediately
        }

        // Split by colons
        const parts = value.split(":");

        // Too many colons? Reject
        if (parts.length > 3) return;

        // Check each part for reasonable length (max 2 digits) and value (0-59 for MM, SS)
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];

            if (part.length > 2) return; // no more than 2 digits per segment

            // If it's minutes or seconds (last two parts), validate max 59 if fully typed
            if (i >= parts.length - 2 && part.length === 2) {
                const num = parseInt(part, 10);
                if (num > 59) return;
            }
        }

        // If all checks passed, accept input
        setTimeLimit(value);
    };

    const handleCreateTest = async () => {
        setStatus("submitting");
        setError(null);

        const testDoc: TestConfig = {

                AIquestions: aiQuestions,
                category,
                noTimeLimit,
                referenceFolderPath: null,
                tags: tags.split(",").map(t => t.trim()).filter(Boolean),
                timeLimit,
                questions,
                systems: selectedSubsystems,
            }

        const result = await createUserTest(testDoc);

        if (result.success) {
            setStatus("success");
        } else {
            setStatus("error");
            setError(result.error || "Something went wrong");
        }
    };

    /*************** */

    return (
        <div className="z-99 fixed top-0 left-0 h-screen w-screen">
            {/* Blur overlay */}
            <div className="absolute inset-0 bg-gray-300/20 backdrop-blur-sm z-40"
                onClick={onClose} />

            {/* Modal */}
            <div className="h-screen absolute inset-0 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-xl font-bold">Let's make a test!</h2>


                    <div className="flex flex-col mb-3 mt-2">
                        {/* Category dropdown */}
                        <div className="flex flex-row mb-1">
                            <label className="block text-sm">Category</label>
                            <label className="pl-18 block text-sm">Tags (comma separated)</label>
                        </div>

                        <div className="flex flex-row">
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-32 border px-3 py-2 rounded-l-md"
                            >
                                <option value="">--Event--</option>
                                {categories.map((event) => (
                                    <option key={event} value={event}>
                                        {event}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                                className="w-full px-3 py-2 rounded-r-md 
                                relative -left-[1px] border-l-0"
                            />
                        </div>


                    </div>


                    <div className="mb-3 mt-2 flex flex-row">
                        <div className="border-2 border-r-0 border-t-0 border-gray-300 h-8 w-8
                        rounded-bl-lg
                        relative -top-3 left-4"></div>


                        <div className={Number.isNaN(selectedYear) ? "flex flex-row items-center" : "flex flex-row items-start"}>

                            <select
                                value={selectedYear || ""}
                                onChange={(e) => {
                                    const year = parseInt(e.target.value, 10);
                                    setSelectedYear(year);
                                    setSelectedSubsystems([]); // Reset selected systems on year change
                                }}
                                className="border px-3 py-2 rounded ml-4 "
                            >
                                <option value="">--Select Year--</option>
                                {Object.keys(anatomy_by_year).map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>

                            {!Number.isNaN(selectedYear) && selectedYear && (
                                <div className="ml-3 mb-2">
                                    <div className="flex flex-col gap-3 ml-2">
                                        {anatomy_by_year[selectedYear]?.map((system) => (
                                            <label key={system} className="flex items-center gap-2 text-sm">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedSubsystems.includes(system)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setSelectedSubsystems([...selectedSubsystems, system]);
                                                        } else {
                                                            setSelectedSubsystems(selectedSubsystems.filter((s) => s !== system));
                                                        }
                                                    }}
                                                />
                                                {system}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}


                        </div>



                    </div>


                    <div className="mb-4 flex flex-row gap-2">
                        <div className="flex-1">
                            <label
                                htmlFor="questions"
                                className="block mb-2 text-sm"
                            >
                                Number of Questions
                            </label>
                            <input
                                id="questions"
                                type="number"
                                min={10}
                                max={50}
                                value={questions}
                                onChange={(e) => {
                                    setQuestions(parseInt(e.target.value, 10) || 0)
                                }
                                }
                                className="w-full px-3 py-2 border rounded text-gray-900 dark:text-white bg-white dark:bg-gray-800"
                            />
                        </div>

                        <div>
                            <label htmlFor="aiQuestionsCount" className="block mb-2 text-sm ">
                                Number of AI Questions
                            </label>
                            <input
                                id="aiQuestionsCount"
                                type="number"
                                min={0}
                                max={100}

                                onChange={(e) => setAiQuestions(parseInt(e.target.value, 10) || 0)}
                                className="w-full px-3 py-2 border rounded text-gray-900 dark:text-white bg-white dark:bg-gray-800"
                            />
                        </div>

                    </div>

                    {/* Time limit */}
                    <div className="mb-3">
                        <label className="block text-sm mb-1">Time Limit</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={noTimeLimit ? "0:00" : timeLimit}
                                onChange={(e) => handleTimeChange(e.target.value)}
                                className="w-full border px-3 py-2 rounded"
                                disabled={noTimeLimit}
                            />

                            <div className="relative flex gap-0.5 p-1 bg-gray-200 rounded-lg w-fit">
                                {/* Sliding highlight */}
                                <div
                                    className={`absolute top-1 bottom-1 w-1/2 rounded-md bg-white shadow transition-all duration-300 ${noTimeLimit ? "left-1/2" : "left-1"
                                        }`}
                                    style={{ width: "calc(50% - 4px)" }}
                                />

                                {/* Buttons */}
                                <button
                                    onClick={() => {
                                        setNoTimeLimit(false);
                                    }}
                                    className={`relative z-10 px-4 py-1.5 text-sm rounded-full transition-colors duration-200 ${!noTimeLimit ? "text-blue-600 font-semibold" : "text-gray-600"
                                        }`}
                                >
                                    <HugeiconsIcon icon={StopWatchIcon} />
                                </button>

                                <button
                                    onClick={() => {
                                        setNoTimeLimit(true);
                                        setTimeLimit("0:00");
                                    }}
                                    className={`relative z-10 px-4 py-1.5 text-sm rounded-full transition-colors duration-200 ${noTimeLimit ? "text-blue-600 font-semibold" : "text-gray-600"
                                        }`}
                                >
                                    <HugeiconsIcon icon={InfinityCircleIcon} />
                                </button>
                            </div>

                        </div>
                    </div>



                    {/* Action buttons */}
                    <div className="flex justify-end gap-2 mt-8">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 border rounded text-gray-700"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleCreateTest}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Create Test
                        </button>
                    </div>

                    {/* Status messages */}
                    {status === "submitting" && <p className="mt-2 text-gray-500 text-sm">Creating test...</p>}
                    {status === "success" && <p className="mt-2 text-green-600 text-sm">Test created!</p>}
                    {status === "error" && <p className="mt-2 text-red-600 text-sm">Error: {error}</p>}
                </div>
            </div >
        </div>
    );
}
