'use client';
import { createContext, useEffect, useState } from 'react';

const JobContext = createContext();

function JobContextProvider({ children }) {
  const [recentJobs, setRecentJobs] = useState([]); // state to store the last 10 jobs
  const [search, setSearch] = useState(''); // state to store the search query
  const [jobType, setJobType] = useState(null); // state to store the job type
  const [skill, setSkill] = useState('0'); // state to store the skill
  const [types2, setTypes2] = useState(null); // state to store the job type
  const [jobs, setJobs] = useState([]); // state to store the jobs
  const [allJobs, setAllJobs] = useState([]); // state to store all the jobs
  const [jobTypeToggle, setJobTypeToggle] = useState(false);
  const [results, setResults] = useState(false);
  const [recentJob, setRecentJob] = useState(true);

  const fetchJobs = async () => {
    let url = `https://job-search-api.dev.io-academy.uk/jobs?search=${search}&skill=${skill}`;
    if(jobType != null){
      url += `&type[]=${jobType}`
    }
    if(types2 != null){
      url += `&type[]=${types2}`
    }
    const res = await fetch(url);
    const data = await res.json();
    setJobs(data);
  };
  const fetchAllJobs = async () => {
    const res = await fetch('https://job-search-api.dev.io-academy.uk/jobs');
    const data = await res.json();
    setAllJobs(data);
  };
  
  useEffect(() => {
    fetchJobs();
    fetchAllJobs();
  }, [jobType, search]);


  //function to get the recent jobs
  const getRecentJobs = async () => {
    //try catch block to handle the fetch request
    try {
      //we store the response from the fetch request in a variable called response
      const response = await fetch('https://job-search-api.dev.io-academy.uk/jobs/recent');

      //we store the data from the response in a variable called data

      const data = await response.json(); //we convert the response to json
      //if there is no data we log 'no data' to the console
      if (!data) {
        console.log('no data');
      } else {
        //if there is data we set the recent jobs to the data
        setRecentJobs(data);
      }
    } catch (error) {
      //if there is an error we log the error to the console
      console.error('Failed to fetch recent jobs', error);
    }
  };
  //useEffect hook to call the getRecentJobs function when the component mounts
  useEffect(() => {
    getRecentJobs();
  }, []);

  const contextValue = {
    //we export the recentJobs and setRecentJobs state
    recentJobs,
    setRecentJobs,
    jobs,
    setJobs,
    search,
    setSearch,
    jobType,
    setJobType,
    allJobs,
    setAllJobs,
    setSkill,
    setTypes2,
    jobTypeToggle,
    setJobTypeToggle,
    recentJob,
    setRecentJob,
    results,
    setResults,
  };

  //we wrap the children in the JobContext.Provider and pass the contextValue to the value prop

  return <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>;
}

export { JobContext, JobContextProvider };
