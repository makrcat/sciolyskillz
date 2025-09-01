"use client";
import React, { useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';
import { TestDocument } from '@/utils/CreateTest';
import { onAuthStateChanged, User } from 'firebase/auth';
import { deleteField } from "firebase/firestore";
import Spinner from "../Misc/Spinner";

// --- Hooks ---
function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [authChecked, setAuthChecked] = useState(false);


    // OK THIS one looks fine, check
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setAuthChecked(true);
        });
        return () => unsubscribe();
    }, []);

    return { user, authChecked };
}

function useTestData(user: User | null, testID: string, authChecked: boolean) {
    const [history, setHistory] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [questionOrder, setQO] = useState<string[]>([]);
    const [TD, setTD] = useState<TestDocument>();

    useEffect(() => {
        if (!authChecked) return;
        if (!user) {
            setLoading(false);
            setHistory(null);
            return;
        }
        async function loadTest(userID: string) {
            setLoading(true);
            try {
                const testDocRef = doc(db, 'users', userID, 'practiceTests', testID);
                const testDocSnap = await getDoc(testDocRef);
                if (!testDocSnap.exists()) {
                    setHistory(null);
                    setLoading(false);
                    return;
                }
                const testData = testDocSnap.data() as TestDocument;
                setTD(testData);
                setHistory(testData?.history ?? null);
                setQO(testData?.questionOrder ?? []);
                setLoading(false);
            } catch {
                setHistory(null);
                setLoading(false);
            }
        }
        loadTest(user.uid);
    }, [authChecked, user, testID]);

    return { history, loading, questionOrder, TD };
}

function useQuestionsData() {
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/makrcat/sciolyskillz-db-questions/refs/heads/main/algolify.json")
            .then((res) => res.json())
            .then(setData);
    }, []);
    return data;
}

// --- Components ---
function DebugInfo({ testID, history }: { testID: string, history: any }) {
    return (
        <div className="collapse bg-base-100 border-base-300 border">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">Debug Info for: <code>{testID}</code></div>
            <div className="collapse-content text-sm">
                <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {JSON.stringify(history, null, 2)}
                </pre>
            </div>
        </div>
    );
}

function QuestionCard({
    question,
    selected,
    onSelect
}: {
    question: any,
    selected: number | undefined,
    onSelect: (index: number) => void
}) {
    return (
        <div className="border border-gray-300 rounded-lg p-4 mb-4 shadow-sm bg-white dark:bg-gray-800 ">
            <div className="flex flex-row mb-4">
                <span className="text-gray-500 text-sm flex-1">
                    {question.system ?? (<em>No System</em>)}
                </span>
                <span className="text-gray-500 text-sm">
                    # {question.number} on page {question.page} • {question.year} {question.competition} {question.division}
                </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
                <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {question.question}
                </p>
            </div>
            <div className="space-y-1 mb-2">
                {question.potentialAnswers.map((choice: string, index: number) => (
                    <div
                        key={index}
                        className={`cursor-pointer rounded px-3 py-1 transition-colors duration-200 ease-in-out
                            ${selected === index ? 'bg-yellow-100 bg-opacity-50 border border-yellow-600'
                                : 'bg-gray-100 border border-gray-300'}`}
                        onClick={() => onSelect(index)}
                    >
                        <strong className="mr-2">{String.fromCharCode(index + 65)}.</strong> {choice}
                    </div>
                ))}
            </div>
        </div>
    );
}

function Navigation({
    currentIndex,
    questionOrderLength,
    onPrev,
    onNext,
    onSubmit,
    isLast
}: {
    currentIndex: number,
    questionOrderLength: number,
    onPrev: () => void,
    onNext: () => void,
    onSubmit: () => void,
    isLast: boolean
}) {
    return (
        <div className="flex justify-between items-center mt-4">
            <button
                onClick={onPrev}
                disabled={currentIndex === 0}
                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 disabled:opacity-50"
            >
                ← Previous
            </button>
            <span className="text-sm text-gray-600">
                Question {currentIndex + 1} of {questionOrderLength}
            </span>
            {isLast ? (
                <button
                    onClick={onSubmit}
                    className="px-4 py-2 bg-teal-300/50 border border-teal-700/50 rounded hover:bg-teal-400/50"
                >
                    Submit ➡
                </button>
            ) : (
                <button
                    onClick={onNext}
                    disabled={currentIndex === questionOrderLength - 1}
                    className="px-4 py-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 disabled:opacity-50 "
                >
                    Next ➡
                </button>
            )}
        </div>
    );
}

// --- Main ---
export default function TestReviewer({ testID }: { testID: string }) {
    const { user, authChecked } = useAuth();
    const { history, loading, questionOrder, TD } = useTestData(user, testID, authChecked);
    const data = useQuestionsData();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [qid: string]: number }>({});

    useEffect(() => {
        if (history) setAnswers(history);
    }, [history]);

    if (loading) return <div><Spinner /></div>;
    if (!user) return <div>Not logged in</div>;
    if (!history) return <div>No history found for test ID: {testID}</div>;
    if (!data || !Array.isArray(data)) return <div>Loading DB questions...</div>;

    const qid = questionOrder[currentIndex];
    const question = data.find((q: any) => q.id === qid);

    // Handlers
    const handleSelect = (index: number) => {
        setAnswers(prev => ({ ...prev, [question.id]: index }));
    };

    const handleSubmit = async () => {
        if (!user) return;
        const testRef = doc(db, "users", user.uid, "practiceTests", testID);
        const ongoingRef = doc(db, "users", user.uid, "practiceTests", "ongoing_tests");
        const pastRef = doc(db, "users", user.uid, "practiceTests", "past_tests");
        try {
            await setDoc(testRef, { history: answers }, { merge: true });
            const ongoingSnap = await getDoc(ongoingRef);
            const pastSnap = await getDoc(pastRef);
            const ongoingData = ongoingSnap.data() || {};
            const pastData = pastSnap.data() || {};
            const info = ongoingData[testID];
            if (info) {
                const parsed = JSON.parse(info);
                parsed.completed = Object.values(answers).filter(v => v !== -1).length;
                const updatedString = JSON.stringify(parsed);
                await setDoc(pastRef, { [testID]: updatedString }, { merge: true });
                await setDoc(ongoingRef, { [testID]: deleteField() }, { merge: true });
            }
            alert("✅ Test submitted and archived!");
            window.history.back();
        } catch (err) {
            alert("❌ Failed to submit.");
        }
    };

    const handleSave = async () => {
        if (!user) return;
        const testRef = doc(db, "users", user.uid, "practiceTests", testID);
        const ongoingRef = doc(db, "users", user.uid, "practiceTests", "ongoing_tests");
        const docSnap = await getDoc(ongoingRef);
        const info = docSnap.data()?.[testID];
        const completedCount = Object.values(answers).filter((v) => v != -1).length;
        try {
            await setDoc(testRef, { history: answers }, { merge: true });
            const parsed = JSON.parse(info);
            parsed.completed = completedCount;
            const updatedString = JSON.stringify(parsed);
            await setDoc(ongoingRef, { [testID]: updatedString }, { merge: true });
            alert("✅ Answers saved!");
        } catch (err) {
            alert("❌ Failed to save.");
        }
    };

    return (
        <div className="mx-auto w-4xl mt-8">
            <DebugInfo testID={testID} history={history} />
            <div>
                <div className="flex flex-row justify-between my-2">
                    <div>Right Dog</div>
                    <div>{TD!.timeLeft}{" / "}{TD!.config.timeLimit}</div>
                </div>
                {question ? (
                    <QuestionCard
                        question={question}
                        selected={answers[question.id]}
                        onSelect={handleSelect}
                    />
                ) : (
                    <div>❌ Couldn't find the question data.</div>
                )}
            </div>
            <Navigation
                currentIndex={currentIndex}
                questionOrderLength={questionOrder.length}
                onPrev={() => setCurrentIndex(i => Math.max(i - 1, 0))}
                onNext={() => setCurrentIndex(i => Math.min(i + 1, questionOrder.length - 1))}
                onSubmit={handleSubmit}
                isLast={currentIndex === questionOrder.length - 1}
            />
            <button
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleSave}
            >
                Save Test
            </button>
        </div>
    );
}
