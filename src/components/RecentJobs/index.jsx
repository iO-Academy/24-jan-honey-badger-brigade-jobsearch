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
                
                <tbody>
                    <tr>

                    </tr>
                </tbody>

            </table>
            </div>

        </section>
    )

    }
export default RecentJobs