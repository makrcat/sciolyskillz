import React from 'react';
import { algoliasearch } from 'algoliasearch';



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
      <p><strong>System:</strong> {hit.system}</p>
      <p><strong>Division:</strong> {hit.division}</p>
      {/* Customize how you want to display each question */}
    </div>
  );
}

export default function App() {
  return (
    <InstantSearch indexName="sciolyskillz" searchClient={searchClient}>
      {/* Search box for free text search */}
      <SearchBox />

      {/* Filter questions by system */}
      <RefinementList attribute="system" />

      {/* Filter questions by division */}
      <RefinementList attribute="division" />

      {/* Show results */}
      <Hits hitComponent={Hit} />

      {/* Pagination */}
      <Pagination />

      {/* Optionally, limit results or add filters */}
      <Configure hitsPerPage={10} />
    </InstantSearch>
  );
}
