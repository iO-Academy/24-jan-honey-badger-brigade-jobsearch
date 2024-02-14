import NavMenu from '../NavMenu';
import RecentJobs from '../RecentJobs';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';

function HomePage() {
  return (
    <>
      <SearchBar />
      <RecentJobs />
      <SearchResults />
      {/* <BrowseSkills /> */}
      {/* <RecentCompanies /> */}


    </>
  );
}

export default HomePage;
