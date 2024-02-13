import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavMenu() {
  const [mobileMenu, setMobileMenu] = useState(false);

  function toggleMobileMenu() {
    setMobileMenu(!mobileMenu);
  }

  return (
    <>
      <nav className='px-2.5 py-1.5 flex justify-between items-center'>
        <a href='/' className='text-xl text-zinc-500 md:basis-1/4'>
          JobSearch
        </a>
        <div className={mobileMenu == false ? 'border border-zinc-400 rounded-md p-1 md:hidden' : 'hidden'}>
          <svg onClick={toggleMobileMenu} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' className='w-8 h-8 stroke-zinc-500'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
          </svg>
        </div>
        <div className={mobileMenu == true ? 'border border-zinc-400 rounded-md p-1 md:hidden' : 'hidden'}>
          <svg onClick={toggleMobileMenu} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' className='w-8 h-8 stroke-zinc-500'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
          </svg>
        </div>
        <div
          className={
            mobileMenu == true
              ? 'w-full text-end border-b border-zinc-400 absolute top-14 right-0 bg-zinc-50 py-10 px-10 text-xl flex flex-col gap-2'
              : 'hidden md:static md:flex md:flex-row md:basis-3/4'
          }>
          <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-center md:basis-2/3'>
            <NavLink to='#'>All Jobs</NavLink>
            <NavLink to='#'>Full time</NavLink>
            <NavLink to='#'>Part time</NavLink>
            <NavLink to='#'>Contract</NavLink>
          </div>
          <div className='my-2 md:basis-1/3 md:flex md:justify-end'>
            <a href='#' className='border border-green-600 rounded-md p-1 text-green-600 '>
              Post a Job
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavMenu;
