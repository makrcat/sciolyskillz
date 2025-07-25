import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';
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
    const [questionOrder, setQO] = useState<string[]>([]);

    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState<User | null>(null);
    const [authChecked, setAuthChecked] = useState(false);



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
                setQO(testData?.questionOrder ?? []);

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
                {questionOrder.map((qid: string) => {
                    const userAnswer = history[qid];
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
                            <div className="space-y-1 mb-4">
                                {question.potentialAnswers.map((choice: string, index: number) => {
                                    const isCorrectAnswer = question.correctAnswerIndex.includes(index);
                                    const isUserAnswer = userAnswer === index;

                                    let bgColor = "";

                                    if (isUserAnswer && isCorrectAnswer) {
                                        // ✅ User selected the correct answer
                                        bgColor = "bg-green-100 border-green-500 text-green-800";
                                    } else if (isUserAnswer && !isCorrectAnswer) {
                                        // ❌ User selected the wrong answer
                                        bgColor = "bg-red-100 border-red-500 text-red-800";
                                    } else if (!isUserAnswer && isCorrectAnswer) {
                                        // ⚠️ User missed the correct answer (didn't select it)
                                        bgColor = "bg-yellow-100 border-yellow-500 text-yellow-800";
                                    } else {
                                        // Default for everything else
                                        bgColor = "bg-gray-100 border-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-200";
                                    }


                                    return (

                                        <div
                                            key={index}
                                            className={`relative ml-4 border rounded px-3 pl-10 py-1 ${bgColor}`}
                                        >
                                            <div className="absolute left-2">{String.fromCharCode(index + 65)}</div>
                                            {choice}

                                        </div>
                                    );
                                })}
                            </div>

                            {/* Explanation */}
                            <p className="text-gray-700 dark:text-gray-300">
                                <span className="font-semibold">Explanation:</span>{" "}
                                {question.explanation}
                            </p>
                        </div>
                    );
                })}
            </div>



        </div>
    );
}
