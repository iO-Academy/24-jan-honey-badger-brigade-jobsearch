import { useState } from 'react';
import RecentJobs from '../RecentJobs';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';

function HomePage() {
  const [results, setResults] = useState(false);
  const [recentJobs, setRecentJobs] = useState(true);

  function toggleResults() {
    setResults(true);
    setRecentJobs(false);
  }

  function toggleRecents() {
    setRecentJobs(false);
    setResults(true);
  }

  function toggleReset() {
    setRecentJobs(true);
    setResults(false);
  }

  return (
    <>
      <SearchBar toggle={toggleResults} />
      {results ? <SearchResults toggle={toggleReset} /> : <RecentJobs toggle={toggleRecents} />}
      {/* <BrowseSkills /> */}
      {/* <RecentCompanies /> */}
    </>
  );
}

export default HomePage;
