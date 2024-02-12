'use client';
import { createContext } from 'react';

const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  const contextValue = {};
  return <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>;
};

export { JobContext, JobContextProvider };
