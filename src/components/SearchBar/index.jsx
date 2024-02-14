import { useContext, useState } from 'react';
import { JobContext } from '../../context';

function SearchBar({ toggle }) {
  const [searchJob, setSearchJob] = useState('');

  const { setSearch } = useContext(JobContext);

  function submitSearch(e) {
    e.preventDefault();
    setSearch(searchJob);
  }

  return (
    <form onSubmit={submitSearch}>
      <div className="bg-[url('/src/assets/JobSearchHeaderBG.jpg')] bg-cover bg-center">
        <div className='flex flex-col gap-3 px-2.5 md:py-20 py-10 mx-auto w-full md:max-w-screen-md'>
          <h1 className='text-white text-5xl pb-5'>Find your perfect job</h1>
          <input className='rounded p-2 px-2.5 mx-auto w-full md:max-w-screen-md' onChange={(e) => setSearchJob(e.target.value)} type='text' id='search' placeholder='developer' />

          <div className='flex justify-between items-center'>
            <div className='flex gap-3'>
              <div className='flex gap-1 items-center'>
                <input type='checkbox' id='full-time' />
                <label className='text-white text-sm' htmlFor='full-time'>
                  Full time
                </label>
              </div>
              <div className='flex gap-1 items-center'>
                <input type='checkbox' id='part-time' />
                <label className='text-white text-sm' htmlFor='part-time'>
                  Part time
                </label>
              </div>
              <div className='flex gap-1 items-center'>
                <input type='checkbox' id='contract' />
                <label className='text-white text-sm' htmlFor='contract'>
                  Contract
                </label>
              </div>
            </div>

            <div>
              <p className='text-white text-xs'>Popular skills:</p>
            </div>
          </div>

          <div>
            <input className='bg-blue-500 py-2 px-3 rounded text-white cursor-pointer' onClick={toggle} type='submit' value='Search' />
          </div>
        </div>
      </div>
    </form>
  );
}
export default SearchBar;
