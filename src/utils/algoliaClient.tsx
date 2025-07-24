import algoliasearch from 'algoliasearch/lite'; 

const appID = '9UDFND4IRA';
// API key with `addObject` and `editSettings` ACL
const apiKey = "b9d0863d3b39bf08b9180c5937d38ee8";

const algoliaClient = algoliasearch(appID, apiKey);
export default algoliaClient;