import React from 'react';
import { Highlight } from 'react-instantsearch-hooks-web';
import styles from '../DocsFeatures/CheckYoWork.module.css'

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

export default function QuestionHit({ hit }: any) {
  console.log('hit.potentialAnswers:', hit.potentialAnswers);
  return (
    <div className={`${styles["checkyo-box"]} ${styles["padding-bottom"]} h-full relative`}>
      <p className="font-medium m-0">Event: {hit.event ?? "N/A"}</p>
      <p className="font-medium mb-4">System: {hit.system ?? "N/A"}</p>

      <div className="text-lg mt-4 mb-4">
        {
//@ts-ignore
<Highlight attribute="question" hit={hit} tagname="em" />
        }
        
      </div>

      {hit.potentialAnswers?.length > 0 && (
        <div>
          {hit.potentialAnswers.map((ans: string, idx: number) => {
            console.log('Answer at index', idx, 'is:', ans, 'type:', typeof ans);
            console.log('Is React element?', React.isValidElement(ans));
            return (
              <div
                key={idx}
                className={`${styles["checkyo-answer"]}`}
                style={{ margin: "0px 4px 4px 0px", padding: "6px 12px" }}
              >
                <span className="font-semibold mr-2">{letters[idx]}</span>
                {typeof ans === "string" ? ans : JSON.stringify(ans)}
              </div>
            );
          })}
        </div>

      )}

      <div className="absolute bottom-2 text-sm text-gray-700 dark:text-gray-300">
        <p>{`${hit.year} ${hit.competition} ${hit.division}`}</p>
        <p>ID: {hit.id ?? "N/A"}</p>
      </div>
    </div>
  );
}

function QuestionHit2({ hit }: any) {
  console.log("QuestionHit rendered for hit:", hit?.id);

  return <div>Check console for logs! Hit ID: {hit?.id}</div>;
}
