import { useContext, useState } from 'react';
import RecentJobs from '../RecentJobs';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import JobTypePage from '../JobTypePage';
import { JobContext } from '../../context';

function HomePage() {
  const { setJobTypeToggle, jobTypeToggle, results, setResults, recentJob, setRecentJob, setSearch } = useContext(JobContext);

  function toggleResults() {
    setResults(true);
    setRecentJob(false);
  }

  function toggleRecents() {
    setRecentJob(false);
    setResults(true);
  }

  function toggleReset() {
    setRecentJob(true);
    setResults(false);
  }

  return (
    <>
      <SearchBar toggle={toggleResults} />
      {jobTypeToggle ? <JobTypePage toggle={toggleReset} /> : results ? <SearchResults toggle={toggleReset} /> : <RecentJobs toggle={toggleRecents} />}
      {/* <BrowseSkills /> */}
      {/* <RecentCompanies /> */}
    </>
  );
}

export default HomePage;
