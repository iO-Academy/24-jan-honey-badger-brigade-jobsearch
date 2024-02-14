import { useState } from 'react';
import NavMenu from '../NavMenu';
import RecentJobs from '../RecentJobs';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';

function HomePage() {
  const [results, setResults] = useState(false)
  const [recentJobs, setRecentJobs] = useState(true)

  function toggleResults() {
    setResults(true)
  }

  function toggleRecents() {
    setRecentJobs(false)
    setResults(!results)
  }

  console.log(results, recentJobs)

  return (
    <>
      <SearchBar toggle={toggleResults} />
      {results ? <SearchResults /> : <RecentJobs toggle={toggleRecents} />}
      {/* <BrowseSkills /> */}
      {/* <RecentCompanies /> */}


    </>
  );
}

export default HomePage;
