'use client';
import { createContext, useEffect, useState } from 'react';

const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  const [recentJobs, setRecentJobs] = useState([]);

  const getRecentJobs = async () => {
    try {
      const response = await fetch('/jobs/recent');
      const data = await response.json();
      if (!data) {
        console.log('failed to fetch data');
      }
      console.log(data);
    } catch (error) {
      console.error('Failed to get recent jobs: ', error);
    }
  };

  useEffect(() => {
    getRecentJobs;
  }, []);

  const contextValue = {
    recentJobs,
    setRecentJobs,
  };
  return <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>;
};

export { JobContext, JobContextProvider };
