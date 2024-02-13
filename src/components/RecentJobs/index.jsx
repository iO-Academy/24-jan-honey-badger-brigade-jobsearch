import { useContext, useState } from 'react';
import JobCard from '../JobCard';
import { JobContext } from '../../context';
import JobModal from '../Modal';

function RecentJobs() {
  const { recentJobs } = useContext(JobContext);
  console.log(recentJobs);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <section className='font-sans items-center justify-center mx-auto overflow-hidden px-10 max-w-screen-md' style={{ minWidth: '950px' }}>
      <div className='flex flex-row justify-center items-center py-3'>
        <h3 className='flex justify-start font-bold text-3xl'>Most Recent Jobs</h3>
        <a className='flex ml-auto font-semibold text-blue-600' href='#'>
          View all jobs &#8594;
        </a>
      </div>
      {modal && <JobModal toggle={toggleModal} />}
      <div>
        <div className='w-full bg-zinc-700'>
          <div>
            <div className='flex justify-between px-3 mr-16 text-white'>
              <div style={{ minWidth: '350px' }} className='text-left'>
                Job Title / Company
              </div>
              <div className='pl-1'>Type</div>
              <div className='pl-3'>Salary</div>
              <div className='pl-2'>Skills</div>
            </div>
          </div>

          <div>
            {recentJobs.map((job) => (
              <div onClick={toggleModal} key={job.id} className='flex flex-col even:bg-zinc-700 odd:bg-zinc-500' style={{ width: '100%' }}>
                <JobCard salary={job.salary != null ? job.salary : ' -'} type={job.type != null ? job.type : 'N/A'} title={job.job_title} company={job.company} logo={job.logo} skills={'php'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentJobs;
