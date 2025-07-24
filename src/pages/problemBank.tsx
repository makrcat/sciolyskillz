
import React from 'react';
import { InstantSearch, Hits, Pagination, Configure } from 'react-instantsearch-hooks-web';
import CustomSearchBox from '../components/SearchDropdown';
import QuestionHit from '../components/QuestionHit';
import algoliaClient from '../utils/algoliaClient';

import Layout from "../components/Layout";


export default function SearchUI() {

    return (

        <Layout>

        {
        //@ts-ignore
            <InstantSearch searchClient={algoliaClient} indexName="sciolyskillz">

                <div className="w-full">

                    <div style={{ "height": "50vh" }}
                        className="w-full bg-gray-600 text-white pt-[15vh]" >

                        <center>
                            <h1 className="text-5xl font-bold mb-10 text-center">Question Search</h1>


                            <CustomSearchBox />

                            <span className="mt-5 flex flex-row gap-2 items-center justify-center">Search by
                                <img
                                    className="h-5 cursor-pointer"
                                    src="../../static/img/legality.png"
                                    alt="Legality"
                                    onClick={() => window.open('https://www.algolia.com/', '_blank')}
                                />
                            </span>
                        </center>
                    </div>



                    <div className="p-10">
                        {//@ts-ignore
                            <Hits hitComponent={QuestionHit} />}
                    </div>


                    <div className="my-6 flex justify-center">
                        {//@ts-ignore
                            <Pagination />}
                    </div>

                    {
                        //@ts-ignore
                        <Configure hitsPerPage={9} />
                    }


                </div>


            </InstantSearch>
}

        </Layout>
    );
}
