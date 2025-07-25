import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, updateDoc } from "firebase/firestore";
import algoliaClient from "./algoliaClient";

import { TestDoc_to_Card } from "@/components/TestsFeatures/GetTestsComponent";


export interface MetaData {
  dateCreated: Date;
  pinned: boolean;
}

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

  metaData: MetaData;
  questionOrder: string[];

}

const questionsIndex = algoliaClient.initIndex("sciolyskillz");



async function generateTestQuestions(config: TestConfig): Promise<string[]> {
  
  const { tags, systems, questions } = config;

  const cleanedTags = tags
  .map(t => t.trim().toLowerCase())
  .filter(t => t && /^[a-z0-9\s]+$/.test(t)); // only allow alphanumeric + spaces


  const cleanedSys = systems
  .map(t => t.trim())
  .filter(t => t && /^[a-zA-Z0-9\s]+$/.test(t));  // allow letters, numbers, spaces



  const filters = [
    ...cleanedSys.map(sys => `system:"${sys}"`),
  ].join(' AND ');

  console.log("Using filters:", filters);


  const results = await questionsIndex.search('', {
    filters,
    hitsPerPage: questions,
  });

  return results.hits.map((hit: any) => hit.id);
}


export async function createUserTest(
  config: TestConfig
): Promise<{ success: boolean; error?: string }> {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    return { success: false, error: "User not signed in." };
  }

  try {
    const questionIDs = await generateTestQuestions(config);

    const testDoc: TestDocument = {
      config,
      
      history: questionIDs.reduce((acc, id) => {
        acc[id] = -1;
        return acc;
      }, {} as { [questionId: string]: number }),

      score: null,
      submitted: false,
      timeLeft: config.timeLimit,
      metaData: {
        dateCreated: new Date(),
        pinned: false,
      },

      questionOrder: questionIDs,
    };

    console.log(
      questionIDs.reduce((acc, id) => {
        acc[id] = -1;
        return acc;
      }, {} as { [questionId: string]: number }),);

    const db = getFirestore();
    const testRef = collection(db, "users", user.uid, "practiceTests");
    
    const I_ADDED_IT_AHUGH = await addDoc(testRef, testDoc);



    const summaryDocRef = doc(db, "users", user.uid, "practiceTests", "ongoing_tests");

    const updateData: Record<string, string> = {};
    // like now that we added the doc, we update the data
    updateData[I_ADDED_IT_AHUGH.id] = JSON.stringify(TestDoc_to_Card(testDoc, I_ADDED_IT_AHUGH.id));
    await updateDoc(summaryDocRef, updateData);

    

    return { success: true };
  } catch (err: any) {
    console.error("Error creating test:", err);
    return { success: false, error: err.message || "Failed to create test." };
  }
}