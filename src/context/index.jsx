'use client';
import { createContext, useState } from 'react';

const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  const [recentJobs, setRecentJobs] = useState([]);

  const contextValue = {
    recentJobs,
    setRecentJobs,
  };
  return <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>;
};

export { JobContext, JobContextProvider };
