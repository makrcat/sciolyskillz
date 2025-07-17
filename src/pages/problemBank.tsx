import React from 'react';
import { algoliasearch } from 'algoliasearch';
import Layout from '@theme/Layout';
import SearchDropdown  from '../components/SearchDropdown';

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
        <div>
            <h3>{hit.question}</h3>
            <p>System: {hit.system}</p>
            <p>Division: {hit.division}</p>
            {/* Customize how you want to display each question */}
        </div>
    );
}


export default function App() {
    return (
        <Layout>
            <InstantSearch indexName="sciolyskillz" searchClient={searchClient}>
                <div className="max-w-4xl mx-auto p-6">


                    <h1 className="text-3xl font-bold mb-4 text-center">Question Search</h1>


                    
                    <SearchDropdown/>
                    <SearchBox
                        className="mb-4"
                        translations={{ placeholder: 'Search questions...' }}
                        submitIconComponent={() => <span>🔍</span>}
                        resetIconComponent={() => <span>❌</span>}
                    />




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
