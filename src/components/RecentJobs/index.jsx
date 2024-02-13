import { useContext } from 'react';
import JobCard from '../JobCard';
import { JobContext } from '../../context';

function RecentJobs() {
  const { recentJobs } = useContext(JobContext);
  console.log(recentJobs);
  return (
    <section className='font-sans items-center justify-center mx-auto overflow-hidden px-10 max-w-screen-md' style={{ minWidth: '950px' }}>
      <div className='flex flex-row justify-center items-center py-3'>
        <h3 className='flex justify-start font-bold text-3xl'>Most Recent Jobs</h3>
        <a className='flex ml-auto font-semibold text-blue-600' href='#'>
          View all jobs &#8594;
        </a>
      </div>

      <div>
        <table className='w-full bg-zinc-700'>
          <thead>
            <tr className='flex justify-between px-3 mr-16 text-white'>
              <th style={{ minWidth: '350px' }} className='text-left'>Job Title / Company</th>
              <th className='pl-1'>Type</th>
              <th className='pl-3'>Salary</th>
              <th className='pl-2'>Skills</th>
            </tr>
          </thead>

          <tbody>
            {recentJobs.map((job) => (
              <tr key={job.id} className='flex flex-col even:bg-zinc-700 odd:bg-zinc-500' style={{ width: '100%' }}>
                <JobCard salary={job.salary != null ? job.salary : ' -'} type={job.type != null ? job.type : 'N/A'} title={job.job_title} company={job.company} logo={job.logo} skills={'php'} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RecentJobs;
