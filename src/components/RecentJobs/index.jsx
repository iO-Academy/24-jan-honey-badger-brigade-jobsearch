import JobCard from "../JobCard"

function RecentJobs() {


    return (
        <section className="w-full font-sans items-center justify-center mx-auto overflow-hidden px-10 max-w-screen-md">
            <div className="flex flex-row justify-center">
                <h3 className="flex justify-start font-bold">Most Recent Jobs</h3>
                <a className="flex ml-auto" href="#">View all jobs &#8594;</a>
            </div>

            <div>
            <table className="w-full table-auto border border-slate-600">
                <thead>
                    <tr>
                        <th>Job Title / Company</th>
                        <th>Type</th>
                        <th>Salary</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                
                <tbody className="w-full">
                    <tr>
                    <JobCard type={"Full time"} salary={1000} skills={"React"} company={"Google"} logo={"/src/assets/Red_square.png"} title={"Junior Developer"}/>
                    </tr>

                    <tr>
                    <JobCard type={"Full time"} salary={1000} skills={"React"} company={"Google"} logo={"/src/assets/Red_square.png"} title={"Junior Developer"}/>
                    </tr>

                    <tr>
                    <JobCard type={"Full time"} salary={1000} skills={"React"} company={"Google"} logo={"/src/assets/Red_square.png"} title={"Junior Developer"}/>
                    </tr>

                    <tr>
                    <JobCard type={"Full time"} salary={1000} skills={"React"} company={"Google"} logo={"/src/assets/Red_square.png"} title={"Junior Developer"}/>
                    </tr>

                </tbody>

            </table>
            </div>

        </section>
    )

    

    
}


export default RecentJobs