'use client';
import { createContext, useEffect, useState } from 'react';

const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  const [recentJobs, setRecentJobs] = useState([]);

  const getRecentJobs = async () => {
    try {
      const response = await fetch('https://job-search-api.dev.io-academy.uk/jobs/recent');
      const data = await response.json();
      if (!data) {
        console.log('no data');
      } else {
        setRecentJobs(data);
      }
    } catch (error) {
      console.error('Failed to fetch recent jobs', error);
    }
  };

  useEffect(() => {
    getRecentJobs();
  }, []);

  const contextValue = {
    recentJobs,
    setRecentJobs,
  };

  return <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>;
};

export { JobContext, JobContextProvider };
