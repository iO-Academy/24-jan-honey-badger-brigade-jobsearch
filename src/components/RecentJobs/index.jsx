import { useContext, useState } from 'react';
import JobCard from '../JobCard';
import { JobContext } from '../../context';
import SkillsItems from '../SkillsItems';
import JobModal from '../Modal';
import modalContext from '../../context/modalContext';

function RecentJobs() {
  const { recentJobs } = useContext(JobContext);
  const [modal, setModal] = useState(false)
  const [modalID, setID] = useState('')
  
  const toggleModal = click => {
    setID(click.currentTarget.id)
    setModal(!modal)
  }

  return (
    <modalContext.Provider value={ {modal: modal, toggleModal: toggleModal, modalID: modalID,} }>
    <section className='font-sans items-center justify-center mx-auto overflow-hidden px-2.5 w-full md:max-w-screen-md'>
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
                skills={<SkillsItems key={job.id} skills={job.skills} />}
                url={job.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    {modal && <JobModal toggle={toggleModal}/>}
    </modalContext.Provider>
  );
}
export default RecentJobs;