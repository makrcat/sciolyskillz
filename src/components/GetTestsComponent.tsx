import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { TestDocument } from "../utils/CreateTest";

const GetTests: React.FC = () => {
    const [tests, setTests] = useState<TestDocument[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTests = async () => {
            const auth = getAuth();
            const user = auth.currentUser;
            if (!user) {
                console.warn("User not logged in.");
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
        };

        fetchTests();
    }, []);

    if (loading) return <div>Loading tests...</div>;

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
                        <h2 className="text-lg font-semibold">{config.category || "Untitled"}</h2>
                        <p className="text-sm text-gray-600">
                            AI Questions: {config.AIquestions ? "Yes" : "No"} <br />
                            Time Limit: {config.noTimeLimit ? "None" : config.timeLimit} <br />
                            Tags: {config.tags?.join(", ") || "None"} <br />
                            Answered: {answered} / {total}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default GetTests;
