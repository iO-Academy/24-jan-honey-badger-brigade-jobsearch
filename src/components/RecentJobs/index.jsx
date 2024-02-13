import { useContext } from 'react';
import JobCard from '../JobCard';
import { JobContext } from '../../context';
import SkillsItem from '../SkillsItem';

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
            <tr className='flex justify-between px-3 text-white'>
              <th className='text-left w-[45%]'>Job Title / Company</th>
              <th className='flex justify-start w-[15%]'>Type</th>
              <th className='flex justify-start w-[15%]'>Salary</th>
              <th className='flex justify-start w-[25%]'>Skills</th>
            </tr>
          </thead>

          <tbody>
            {recentJobs.map(job => (
              <tr key={job.id} className='flex flex-col even:bg-zinc-700 odd:bg-zinc-500' style={{ width: '100%' }}>
                <JobCard salary={job.salary != null ? job.salary : ' -'} type={job.type != null ? job.type : 'N/A'} title={job.job_title} company={job.company} logo={job.logo} skills={<SkillsItem skills={job.skills} />} />

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
export default RecentJobs;
