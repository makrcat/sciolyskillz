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
        <div className=" bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {hit.question}
            </h3>
            <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <p>
                    <span className="font-medium text-gray-700 dark:text-gray-200">System:</span> {hit.system}
                </p>
                <p>
                    <span className="font-medium text-gray-700 dark:text-gray-200">Division:</span> {hit.division}
                </p>
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

                    <Hits hitComponent={Hit} />
                    <div className="mt-6 flex justify-center">
                        <Pagination />
                    </div>

                    <Configure hitsPerPage={10} />
                </div>
            </InstantSearch>
        </Layout>
    );
}
