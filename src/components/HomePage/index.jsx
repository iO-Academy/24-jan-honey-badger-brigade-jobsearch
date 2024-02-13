import NavMenu from '../NavMenu';
import RecentJobs from '../RecentJobs';
import SearchArea from '../SearchArea';

function HomePage() {
  return (
    <>
      <SearchArea />
      <RecentJobs />
      {/* <BrowseSkills /> */}
      {/* <RecentCompanies /> */}

      <footer className='bg-white text-sm'>
        <div className="p-2.5 mx-auto w-full xl:max-w-screen-xl">
        © Copyright iO Academy 2022
        </div>
      </footer>
    </>
  );
}

export default HomePage;
