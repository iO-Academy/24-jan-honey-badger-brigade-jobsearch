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
        <div className='w-full bg-zinc-700'>
          <div>
            <div className='flex justify-between px-3 text-white'>
              <div className='text-left w-[45%]'>Job Title / Company</div>
              <div className='flex justify-start w-[15%]'>Type</div>
              <div className='flex justify-start w-[15%]'>Salary</div>
              <div className='flex justify-start w-[25%]'>Skills</div>
            </div>
          </div>

          <div>
            {recentJobs.map((job) => (
              <JobCard
                key={job.id}
                salary={job.salary != null ? job.salary : ' -'}
                type={job.type != null ? job.type : 'N/A'}
                title={job.job_title}
                company={job.company}
                logo={job.logo}
                skills={<SkillsItem skills={job.skills} />}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default RecentJobs;
