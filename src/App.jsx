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
        <NavMenu />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/jobs' element={<SearchArea />} />
            <Route path='jobs/:id' element={<SearchArea />} />
            <Route path='/jobs/recent' element={<RecentJobs />} />
          </Routes>
        </BrowserRouter>
      </JobContextProvider>
    </div>
  );
}

export default App;
