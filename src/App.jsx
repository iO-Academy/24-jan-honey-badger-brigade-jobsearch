
import JobCard from './components/JobCard';
import { JobContext } from './context';


import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import RecentJobs from './components/RecentJobs';
import SearchArea from './components/SearchArea';

import { JobContextProvider } from './context';



function App() {
  return (
    <>


      <JobContextProvider>

      


        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/jobs' element={<SearchArea />} />
            <Route path='jobs/:id' element={<SearchArea />} />
            <Route path='/jobs/recent' element={<RecentJobs />} />
          </Routes>
        </BrowserRouter>

      </JobContextProvider>

    </>
  );
}

export default App;
