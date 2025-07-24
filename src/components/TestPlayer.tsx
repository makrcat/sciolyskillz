import React, { useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import { onAuthStateChanged, User } from 'firebase/auth';

interface Question {
    "id": string,
    "competition": string,
    "division": string,
    "year": number,
    "event": string,
    "question": string,
    "potentialAnswers": string[],
    "correctAnswerIndex": number[],
    "explanation": string,
    "system": string,
    "tags": string[],
    "page": number,
    "number": number,
}

export default function TestReviewer({ testID }: { testID: string }) {
    const [history, setHistory] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState<User | null>(null);
    const [authChecked, setAuthChecked] = useState(false);

    const [answers, setAnswers] = useState<{ [qid: string]: number }>({});



    // Listen for Firebase auth state changes to get the user reliably
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setAuthChecked(true); // mark that auth status is known now
        });

        return () => unsubscribe();
    }, []);

    // run after authChecked and user set
    useEffect(() => {
        if (!authChecked) return;
        if (!user) {
            setLoading(false);
            setHistory(null);
            return; // no user signed in
        }

        async function loadTest(userID: string) {
            setLoading(true);

            try {
                const testDocRef = doc(db, 'users', userID, 'practiceTests', testID);
                const testDocSnap = await getDoc(testDocRef);

                if (!testDocSnap.exists()) {
                    console.error(`No test found for ID ${testID}`);
                    setHistory(null);
                    setLoading(false);
                    return;
                }

                const testData = testDocSnap.data();
                setHistory(testData?.history ?? null);
                setLoading(false);
            } catch (error) {
                console.error('Error loading test data:', error);
                setHistory(null);
                setLoading(false);
            }
        }

        loadTest(user.uid);

    }, [authChecked, user, testID]);

    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if (history) {
            setAnswers(history); // preload saved answers
        }
    }, [history]);


    //todo
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/makrcat/sciolyskillz-db-questions/refs/heads/main/algolify.json")
            .then((res) => res.json())
            .then(setData);
    }, []);

    // when data 

    if (!user) return <div>Not logged in</div>;
    if (loading) return <div>Loading test history...</div>;
    if (!history) return <div>No history found for test ID: {testID}</div>;

    if (!data || !history) return <div> Couldn't find questions DB JSON data!</div>

    return (


        <div className="mx-16 w-4xl my-6">
            <h2>Test History for test ID: {testID}</h2>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                {JSON.stringify(history, null, 2)}
            </pre>

            <div>
                {Object.entries(history).map(([qid, userAnswer]: [string, any]) => {
                    const question = data.find((q: Question) => q.id === qid);
                    if (!question) return null;

                    return (
                        <div
                            key={qid}
                            className="border border-gray-300 rounded-xl p-4 mb-4 shadow-sm bg-white dark:bg-gray-800 "
                        >
                            <div className="flex flex-row mb-4">
                                <span className="text-gray-500 text-sm flex-1">
                                    {question.system}
                                </span>

                                <span className="text-gray-500 text-sm">
                                    # {question.number} on page {question.page} • {question.year} {question.competition} {question.division}
                                </span>
                            </div>

                            {/* Question Number Bubble */}
                            <div className="flex items-center gap-2 mb-2">


                                {/* Question Text */}
                                <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                                    {question.question}
                                </p>

                            </div>


                            {/* Answer Choices */}
                            <div className="space-y-1 mb-2">
                                {question.potentialAnswers.map((choice: string, index: number) => {
                                    const isSelected = answers[question.id] === index;

                                    return (
                                        <div
                                            key={index}
                                            className={`cursor-pointer border rounded px-3 py-1 ${isSelected ? 'bg-blue-200' : 'bg-gray-100'} hover:bg-blue-100`}
                                            onClick={() => setAnswers(prev => ({ ...prev, [question.id]: index }))}
                                        >
                                            <strong className="mr-2">{String.fromCharCode(index + 65)}.</strong> {choice}
                                        </div>
                                    );
                                })}

                            </div>

                          
                        </div>

                    );
                })}
            </div>

            <button
  className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
  onClick={async () => {
    if (!user) return;

    const testRef = doc(db, "users", user.uid, "practiceTests", testID);
    try {
      await setDoc(testRef, { history: answers }, { merge: true });
      alert("✅ Answers saved!");
    } catch (err) {
      console.error("Error saving answers:", err);
      alert("❌ Failed to save.");
    }
  }}
>
  Save Test
</button>




        </div>
    );
}
