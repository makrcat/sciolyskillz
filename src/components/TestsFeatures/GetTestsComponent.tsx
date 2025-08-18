"use client";
import React, { useEffect, useState } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { onAuthStateChanged } from "firebase/auth";

import { TestConfig, MetaData, TestDocument } from "../../utils/CreateTest";
import Spinner from "../Misc/Spinner";
import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01FreeIcons } from "@hugeicons/core-free-icons";



export interface TestCardInfo {
    config: TestConfig;
    score: boolean | null;

    completed: number;

    submitted: boolean;
    timeLeft: string;
    metaData: MetaData;
    id: string;
}

export function TestDoc_to_Card(doc: TestDocument, id_: string) {

    const a: TestCardInfo = {
        config: doc.config,
        score: doc.score,
        submitted: doc.submitted,

        completed: Object.values(doc.history).filter(v => v !== -1).length,

        timeLeft: doc.timeLeft,
        metaData: doc.metaData,
        id: id_
    }

    return a;

}



interface Props {
    tests: TestCardInfo[];
    onPlayTest: (id: string) => void;
}

function GroupedTestsList({ tests, onPlayTest }: Props) {

    const sortedTests = tests.slice(); 
    sortedTests.sort((a, b) => {
        const dateA = new Date(a.metaData.dateCreated).getTime();
        const dateB = new Date(b.metaData.dateCreated).getTime();

        if (dateA > dateB) return -1;
        if (dateA < dateB) return 1;
        return 0;
    });

    // group tests by day string "YYYY-MM-DD"
    type GroupedTests = { [day: string]: TestCardInfo[] };
    const groupedTests: GroupedTests = {};

    for (const test of sortedTests) {
        const dayKey = new Date(test.metaData.dateCreated).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
        });

        if (!groupedTests[dayKey]) {
            groupedTests[dayKey] = [];
        }
        groupedTests[dayKey].push(test);
    }

    function formatDate(dayKey: string) {
        const date = new Date(dayKey);
        return date.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    return (
        <div>
            {Object.entries(groupedTests).map(([dayKey, testsOnDay]) => (
                <div key={dayKey} className="mb-8">
                    {/* Date header */}
                    <div className="flex flex-row w-full mb-2 items-center gap-2">
                        <span className="text-md text-gray-500">{formatDate(dayKey)}</span>
                        <hr className="border-gray-300 border-1  flex-1" />
                    </div>

                    {/* Grid of test cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {testsOnDay.map((testCard) => {
                            return (
                                <div
                                    key={testCard.id}
                                    className="relative border border-gray-200 dark:bg-gray-800 rounded-lg p-4 space-y-4"
                                >
                                    {/* Time remaining top right */}
                                    <div className="absolute top-4 right-4 text-sm text-gray-600 dark:text-gray-300 text-right">
                                        <div className="flex items-center gap-1 justify-end">
                                            <span className="text-sm">Remaining time</span>
                                        </div>
                                        <div className="text-sm">
                                            {testCard.config.noTimeLimit
                                                ? "No limit"
                                                : `${testCard.timeLeft} / ${testCard.config.timeLimit}`}
                                        </div>
                                    </div>

                                    <h3 className=" text-gray-800 dark:text-white" style={{'width':'60%'}}>
                                        {testCard.config.category || "Untitled"}
                                    </h3>

                                    {/* Systems */}
                                    <div className="flex flex-wrap gap-2 text-sm items-center">
                                        <span className="font-semibold">Systems:</span>
                                        {testCard.config.systems && testCard.config.systems.length > 0 ? (
                                            <div className="flex flex-wrap gap-2">
                                                {testCard.config.systems.map((system, i) => (
                                                    <span
                                                        key={i}
                                                        className="bg-green-100 text-green-800 px-2 py-1 rounded-full"
                                                    >
                                                        {system}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="text-gray-500 italic">No systems configured.</div>
                                        )}
                                    </div>

                                    {/* Progress bar */}
                                    <div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                                            Progress: {testCard.completed ?? 0} / {testCard.config.questions}
                                        </div>
                                        <div className="w-full h-2 bg-gray-200 rounded overflow-hidden">
                                            <div
                                                className="h-full bg-blue-500 transition-all duration-300"
                                                style={{
                                                    width: `${Math.min(
                                                        100,
                                                        ((testCard.completed ?? 0) / testCard.config.questions) * 100
                                                    ) || 0
                                                        }%`,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    {testCard.config.tags && testCard.config.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 text-sm items-center">
                                            <span className="font-semibold">Tags:</span>
                                            {testCard.config.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Buttons */}
                                    <div className="flex items-center justify-end mt-2">
                                        <button
                                            onClick={() => onPlayTest(testCard.id)}
                                            className="px-4 py-2 btn"
                                        >
                                            Continue
                                        </button>
                                    </div>

                                    {/* Configuration & Metadata */}
                                    <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                                        <div className="font-semibold">Configuration</div>
                                        <div>Questions: {testCard.config.questions}</div>
                                        <div>AI Questions: {testCard.config.AIquestions}</div>
                                        <div>
                                            Time Limit:{" "}
                                            {testCard.config.noTimeLimit ? "No limit" : testCard.config.timeLimit}
                                        </div>

                                        <div className="pt-3 font-semibold">Metadata</div>
                                        <div>Test ID: {testCard.id}</div>
                                        <div>
                                            Created:{" "}
                                            {new Date(testCard.metaData.dateCreated).toLocaleDateString(undefined, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </div>
                                        {testCard.metaData.pinned && <div>📌 Pinned</div>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}


export default function GetTests({ onReviewTest, onPlayTest }: { onReviewTest: (id: string) => void, onPlayTest: (id: string) => void }) {
    const [tests, setTests] = useState<TestCardInfo[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                console.warn("User not logged in.");
                setTests([]);
                setLoading(false);
                return;
            }

            const db = getFirestore();
            const summaryDoc = doc(db, "users", user.uid, "practiceTests", "ongoing_tests");

            try {

                const docSnap = await getDoc(summaryDoc);

                const data = docSnap.data() || {};

                const testCards: TestCardInfo[] = Object.entries(data).map(([id, info]) => {
                    // info is a string of JSON, so parse it first:
                    const parsedInfo = JSON.parse(info as string);
                    return { ...parsedInfo, id };
                });

                setTests(testCards);



            } catch (err) {
                console.error("Error fetching tests:", err);
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);


    if (loading) return (
        <div className="text-black">

            <Spinner />

        </div>
    );

    return (
        <GroupedTestsList tests={tests} onPlayTest={onPlayTest} />
    )
}