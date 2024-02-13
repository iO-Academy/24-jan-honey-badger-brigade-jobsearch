<<<<<<< HEAD
import { JobContext, JobContextProvider } from './context';

function App() {
  return (
    <>
      <JobContextProvider>
        <div>Main</div>
      </JobContextProvider>
    </>
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecentJobs from './components/RecentJobs';
import SearchArea from './components/SearchArea';

import { JobContextProvider } from './context';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <div className="font-sans font-normal text-base bg-slate-50">
      <JobContextProvider>
       
        <BrowserRouter>
          <NavMenu />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/jobs' element={<SearchArea />} />
            <Route path='jobs/:id' element={<SearchArea />} />
            <Route path='/jobs/recent' element={<RecentJobs />} />
          </Routes>
        </BrowserRouter>
      </JobContextProvider>
      <footer className='bg-white text-sm'>
        <div className="p-2.5 mx-auto w-full md:max-w-screen-md">
        © Copyright iO Academy 2022
        </div>
      </footer>
    </div>
>>>>>>> f6e7f472b0a7ec4fb8c68766a685ae82ee554c7f
  );
}

export default App;
