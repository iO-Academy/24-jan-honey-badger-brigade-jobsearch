'use client';
import { createContext, useEffect, useState } from 'react';

const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('developer');

  const fetchJobs = async () => {
    const res = await fetch(`https://job-search-api.dev.io-academy.uk/jobs?search=${search}`);
    const data = await res.json();
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  console.log(jobs);
  const contextValue = {
    jobs,
    setJobs,
  };
  return <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>;
};

export { JobContext, JobContextProvider };
