import { useContext, useEffect, useState } from 'react';
import { JobContext } from '../../context';
import modalContext from '../../context/modalContext';

function JobModal() {
  // const { recentJobs } = useContext(JobContext);
  // const job = recentJobs[0];

  const {modalID, toggle} = useContext(modalContext)
  const [jobTitle, setTitle] = useState('')
  const [jobCompany, setCompany] = useState('')
  const [jobType, setType] = useState('')
  const [jobImg, setImg] = useState('')
  const [jobSalary, setSalary] = useState('')
  const [jobDate, setDate] = useState('')
  const [jobSkills, setSkills] = useState([])
  const [jobDesc, setDesc] = useState('')
  const jobURL = `https://job-search-api.dev.io-academy.uk/jobs/${modalID}`
  useEffect(getJobDetails, [])

  function getJobDetails() {
    fetch(jobURL)
    .then(res => res.json())
    .then (data => {
      setTitle(data.job_title)
      setCompany(data.company)
      setType(data.type != null ? data.type : 'N/A')
      setImg(data.logo)
      setDesc(data.job_description)
      setSalary(data.salary != null ? data.salary : ' -')
      setDate(data.posted)
      setSkills(data.skills)
    })
  }
  console.log(jobTitle)

  return (
    <div className={`Modal-container px-2 border-2 border-slate-400 z-10 fixed my-5 bg-white  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
      <div className='flex my-4 ml-2 border-slate-200 border-b-2 pb-4'>
        <div className='flex flex-row gap-2'>
          <h2>{`${jobTitle} -`}</h2>
          <h2>{jobCompany}</h2>
        </div>
       
        <svg onClick={toggle} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' className='w-8 h-8 stroke-zinc-500'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
        </svg>
       
      </div>
      <div className='logo-company text-white bg-blue-500 flex flex-row gap-3 items-center pl-5 mx-2' style={{ height: '100px' }}>
        <h1 className='font-semibold text-lg'>{jobTitle}</h1>
        <h2 className='bg-green-600 rounded-full p-1'>{jobType}</h2>
      </div>
      <div className='mx-10 mt-5'>
        <div className='key-details'>
          <div className='flex flex-row gap-2 items-center'>
            <img src={jobImg} alt='company logo' width={65} />
            <h2 className='font-semibold'>{jobCompany}</h2>
          </div>
          <div className='font-semibold'>Key facts: </div>
          <div className='facts flex flex-row gap-12'>
            <div className='flex flex-col gap-1'>
              <div>Salary:</div>
              <div>{`£${jobSalary}`}</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div>Type: </div>
              <div>{jobType}</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div>Data posted: </div>
              <div>{jobDate}</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div>Skills</div>
              <div className='flex flex-row gap-1'>
                {jobSkills.map((skill) => (
                  <span key={skill.id} className='bg-blue-500 text-white p-1 rounded-lg'>
                    {skill.skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='description mt-2'>
          <h2 className='font-bold'>Job description</h2>
          <p>
            {jobDesc}
          </p>
        </div>
        <div className='flex mt-6 items-center'>
          <button className='bg-green-600 text-white p-2 rounded-lg'>Apply Now</button>
          <button className='ml-auto rounded-lg border-2 p-1 border-zinc-400 text-zinc-400'>Save for later</button>
        </div>
      </div>
      <div className='mt-8 mx-10'>
        <h1 className='text-4xl font-bold mb-4'>Similar Jobs</h1>
      </div>
      <div className='flex flex-row border w-1/4 mx-10 bg-zinc-500 mb-4'>
        <div className='flex gap-2 items-center p-2'>
          <img src={jobImg} alt='company logo' width={100} />
        </div>
        <div className='flex flex-col pt-2 text-white w-1/2 '>
          <h2 className='font-bold text-l mb-2'>{jobTitle}</h2>
          <h2 className='font-bold text-l'>{jobCompany}</h2>
        </div> 
      </div> 
    </div>
  );
};

export default JobModal;
