import React from 'react';
import algoliasearch from 'algoliasearch';
import { Highlight } from 'react-instantsearch-dom';

/* when we fix that dependency it will be {} again btw */

import Layout from '@theme/Layout';
import SearchDropdown from '../components/SearchDropdown';

import '../css/custom.css';
import '../components/DocsFeatures/CheckYoWork.css'
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

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

function Hit({ hit }) {
    return (
        <div className="checkyo-box padding-bottom h-full relative">
            <p className="font-medium m-0">Event: {hit.event ?? "N/A"}</p>
            <p className="font-medium mb-4">System: {hit.system ?? "N/A"}</p>

            <p className="text-lg dark:text-white mb-4">
                <Highlight attribute="question" hit={hit} tagName="em" />
            </p>

            {hit.potentialAnswers && hit.potentialAnswers.length > 0 && (
                <div>
                    <span>
                        {hit.potentialAnswers.map((ans, idx) => (
                            <div className="checkyo-answer" style={{ "margin": "0px 4px 4px 0px", "padding": "6px 12px" }}>
                                <span className="font-semibold mr-2">
                                    {letters[idx]}
                                </span>
                                {ans}
                            </div>
                        ))}
                    </span>
                </div>
            )}

            <div className="absolute bottom-2 text-sm text-gray-700 dark:text-gray-300">
                <p>{`${hit.year} ${hit.competition} ${hit.division}`}</p>
                <p>ID: {hit.id ?? "N/A"}</p>
            </div>
        </div>
    );
}



export default function App() {
    return (
        <Layout>
            <InstantSearch indexName="sciolyskillz" searchClient={searchClient}>

                <div className="w-full">

                    <div style={{ "height": "50vh" }}
                        className="w-full bg-[rgb(48,132,84)] text-white pt-[15vh]" >

                        <center>
                            <h1 className="text-3xl font-bold mb-4 text-center">Question Search</h1>


                            <SearchDropdown />
                            <span className="flex flex-row gap-2 items-center justify-center">Powered by
                                <img height="20px" src="img/legality.png"></img>
                            </span>
                        </center>
                    </div>



                    <div className="p-10">
                        <Hits hitComponent={Hit} />
                    </div>


                    <div className="mt-6 flex justify-center">
                        <Pagination />
                    </div>

                    <Configure hitsPerPage={9} />


                </div>
            </InstantSearch>



        </Layout>
    );
}
