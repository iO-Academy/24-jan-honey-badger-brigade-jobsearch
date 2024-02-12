import JobCard from '../JobCard';

function RecentJobs() {
  return (
    <section className='font-sans items-center justify-center mx-auto overflow-hidden px-10 max-w-screen-md' style={{ minWidth: '750px' }}>
      <div className='flex flex-row justify-center py-3'>
        <h3 className='flex justify-start font-bold text-3xl'>Most Recent Jobs</h3>
        <a className='flex ml-auto font-semibold text-blue-600' href='#'>
          View all jobs &#8594;
        </a>
      </div>

      <div>
        <table className='w-full bg-zinc-700'>
          <thead>
            <tr className='flex justify-between px-2 mr-10'>
              <th>Job Title / Company</th>
              <th className='ml-5 '>Type</th>
              <th className='ml-5'>Salary</th>
              <th>Skills</th>
            </tr>
          </thead>

          <tbody>
            <tr className='flex flex-col' style={{ width: '100%' }}>
              <JobCard salary={`${5000}`} type={'Full-time'} title={'Soft Dev'} company={'Google'} logo={'/src/assets/Red_square.png'} skills={'PHP'} />
              <JobCard salary={`${5000}`} type={'Full-time'} title={'Soft Dev'} company={'Google'} logo={'/src/assets/Red_square.png'} skills={'PHP'} />
              <JobCard salary={`${5000}`} type={'Full-time'} title={'Soft Dev'} company={'Google'} logo={'/src/assets/Red_square.png'} skills={'PHP'} />
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RecentJobs;
