'use client';
import { createContext } from 'react';

const JobContext = createContext(null > null);

const JobContextProvider = ({ children }) => {
  //function to fetch recent jobs

  //function to fetch all jobs

  //useEffect to run it once

  const contextValue = {};
  return <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>;
};

export { JobContext, JobContextProvider };
