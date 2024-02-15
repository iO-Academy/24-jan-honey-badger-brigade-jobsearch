import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecentJobs from './components/RecentJobs';
import { JobContextProvider } from './context';
import modalContext from './context/modalContext';
import NavMenu from './components/NavMenu';
import { useState } from 'react';
import SearchResults from './components/SearchResults';

function App() {
  const [modal, setModal] = useState(false)
  const [modalID, setID] = useState('')

  const toggleModal = click => {
    setID(click.currentTarget.id)
    setModal(!modal)
  }
  return (
    <div className='font-sans font-normal text-base bg-slate-50'>
      <JobContextProvider>
        <modalContext.Provider value={{ modal: modal, toggleModal: toggleModal, modalID: modalID, }}>
          <BrowserRouter>
            <NavMenu />
            {/* <SearchResults /> */}
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/job' element={<SearchResults />} />
              <Route path='jobs/:id' element={<SearchResults />} />
              <Route path='/jobs/recent' element={<RecentJobs />} />
            </Routes>
          </BrowserRouter>
        </modalContext.Provider>
      </JobContextProvider>
      <footer className='bg-white text-sm'>
        <div className='p-2.5 mx-auto w-full md:max-w-screen-md'>© Copyright iO Academy 2022</div>
      </footer>
    </div>
  );
}

export default App;
