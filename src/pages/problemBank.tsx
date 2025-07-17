import React from 'react';
import { algoliasearch } from 'algoliasearch';
import Layout from '@theme/Layout';
import SearchDropdown from '../components/SearchDropdown';

import '../css/custom.css';

// load correctly so my components look correct :[

import {
    InstantSearch,
    SearchBox,
    Hits,
    RefinementList,
    Pagination,
    Configure
} from 'react-instantsearch-dom';



const appID = "9UDFND4IRA";
const searchAPIkey = "b9d0863d3b39bf08b9180c5937d38ee8";

const searchClient = algoliasearch(
    appID,
    searchAPIkey
);



function Hit({ hit }) {
  return (
    <div className="bg-slate-100 rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-lg font-semibold dark:text-white mb-3">{hit.question}</h3>

      {hit.potentialAnswers && hit.potentialAnswers.length > 0 && (
          <div>
            <span className="font-medium">Potential Answers:</span>
            <ul className="list-disc list-inside ml-4">
              {hit.potentialAnswers.map((ans, idx) => (
                <li key={idx}>{ans}</li>
              ))}
            </ul>
          </div>
        )}

      <div className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
        <p><span className="font-medium">Event:</span> {hit.event ?? "N/A"}</p>
        <p><span className="font-medium">System:</span> {hit.system ?? "N/A"}</p>
        <p><span className="font-medium">Competition:</span> 
        {`${hit.year} ${hit.competition} ${hit.division}`}</p>
        <p><span className="font-medium">ID:</span> {hit.id ?? "N/A"}</p>
      </div>
    </div>
  );
}



export default function App() {
    return (
        <Layout>
            <InstantSearch indexName="sciolyskillz" searchClient={searchClient}>

                <div className="max-w mx-auto">
                    <div style={{ "height": "50vh" }}
                        className=" bg-[rgb(48,132,84)] text-white pt-[15vh]" >

                            <h1 className="text-3xl font-bold mb-4 text-center">Question Search</h1>

                            <SearchDropdown />
                    </div>

                    <div className="mx-20  flex flex-column gap-2">
                        <Hits hitComponent={Hit} />
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Pagination />
                    </div>

                    <Configure hitsPerPage={10} />
                </div>
            </InstantSearch>
        </Layout>
    );
}
