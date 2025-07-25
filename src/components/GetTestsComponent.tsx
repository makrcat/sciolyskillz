import React, { useEffect, useState } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { onAuthStateChanged } from "firebase/auth";

import { TestConfig, MetaData, TestDocument } from "../utils/CreateTest";



export interface TestCardInfo {
    config: TestConfig;
    score: boolean | null;
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
        timeLeft: doc.timeLeft,
        metaData: doc.metaData,
        id: id_
    }

    return a;

}


/**THIS component goes to firebase and pretty please asks for the big document file with all the key info */



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
        <div className="text-black">Loading tests...</div>
    );

    return (
        <div className="space-y-4">
            {tests.map((testCard, index) => {
                const config = testCard.config;

                return (
                    <div
                        key={index}
                        className="border rounded-lg shadow p-4 bg-white dark:bg-gray-900"
                    >
                        <h2 className="text-lg font-semibold">
                            Test {index + 1} — {config?.category || "Untitled"}
                        </h2>

                        <div className="text-sm space-y-1 mt-2">
                            <div className="font-semibold">Full Test Object:</div>
                            <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded overflow-x-auto">
                                {JSON.stringify(testCard, null, 2)}
                            </pre>
                        </div>


                        <div>

                            <div>{testCard.id}</div>
                            <button
                                onClick={() => onReviewTest(testCard.id)}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Review
                            </button>

                            <button
                                onClick={() => onPlayTest(testCard.id)}
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ml-2"
                            >
                                Play
                            </button>

                        </div>

                    </div>


                );

            })}
        </div>
    );
}