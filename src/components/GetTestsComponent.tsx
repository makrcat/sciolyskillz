import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { TestDocument } from "../utils/CreateTest";

import { onAuthStateChanged } from "firebase/auth";



export default function GetTests() {
    const [tests, setTests] = useState<TestDocument[]>([]);
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
            const testsRef = collection(db, "users", user.uid, "practiceTests");

            try {
                const snapshot = await getDocs(testsRef);
                const testDocs: TestDocument[] = snapshot.docs.map(doc => doc.data() as TestDocument);
                setTests(testDocs);
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
            {tests.map((test, index) => {
                const { config, history } = test;
                const answered = Object.values(history).filter(choice => choice !== -1).length;
                const total = Object.keys(history).length;

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
                                {JSON.stringify(test, null, 2)}
                            </pre>
                        </div>
                    </div>
                );

            })}
        </div>
    );
}