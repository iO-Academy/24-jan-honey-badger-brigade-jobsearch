import NavMenu from "../NavMenu"
import RecentJobs from "../RecentJobs"
import SearchArea from "../SearchArea"
import BrowseSkills from "../BrowseSkills"
import RecentCompanies from "../RecentCompanies"


function HomePage() {
    return (
        <>
            <NavMenu />
            <SearchArea />
            <RecentJobs />
            {/* <BrowseSkills /> */}
            {/* <RecentCompanies /> */}

            <footer>© Copyright iO Academy 2022</footer>
        </>
    )
}

export default HomePage