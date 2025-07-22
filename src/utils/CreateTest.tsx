import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";



export interface TestConfig {
  AIquestions: number; //0 20 40 50 60 70 
  category: string;
  noTimeLimit: boolean;
  referenceFolderPath: string | null;
  tags: string[];
  timeLimit: string;
  questions: number;
  systems: string[];
}

export interface TestDocument {
  config: TestConfig;
  history: { [questionId: string]: number };

  score: boolean | null;
  submitted: boolean;
  timeLeft: string;

}


export async function createUserTest(
  testDoc: TestDocument
): Promise<{ success: boolean; error?: string }> {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    return { success: false, error: "User not signed in." };
  }

  const db = getFirestore();
  const testRef = collection(db, "users", user.uid, "practiceTests");

  try {
    // Save the testDoc you receive directly to Firestore
    await addDoc(testRef, testDoc);
    return { success: true };
  } catch (err: any) {
    console.error("Error creating test:", err);
    return { success: false, error: err.message || "Failed to create test." };
  }
}
