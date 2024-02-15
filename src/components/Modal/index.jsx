import { useContext, useEffect, useState } from 'react';
import { JobContext } from '../../context';
import modalContext from '../../context/modalContext';

function JobModal() {
  const {modalID, toggleModal} = useContext(modalContext)
  const [jobTitle, setTitle] = useState('')
  const [jobCompany, setCompany] = useState('')
  const [jobType, setType] = useState('')
  const [jobImg, setImg] = useState('')
  const [jobSalary, setSalary] = useState('')
  const [jobDate, setDate] = useState('')
  const [jobSkills, setSkills] = useState([])
  const [jobDesc, setDesc] = useState('')
  const jobURL = `https://job-search-api.dev.io-academy.uk/jobs/${modalID}`
  console.log(jobURL)
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

  return (
    <section onClick={toggleModal} className='p-2.5 z-10 bg-zinc-500/50 w-full min-h-screen fixed overflow-auto top-0 left-0'>
      <div className='Modal-container px-4 m-2 md:mx-auto md:my-2 w-full md:max-w-screen-md overflow-auto z-20 absolute my-5 bg-white left-1/2 transform -translate-x-1/2'>
        <div className='flex justify-between my-4 ml-2 border-slate-200 border-b-2 pb-4'>
          <div className='flex flex-row gap-2 font-bold'>
            <h2>{`${jobTitle} -`}</h2>
            <h2>{jobCompany}</h2>
          </div>
          <span>
            <svg onClick={toggleModal} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='3' stroke='currentColor' className='w-6 h-6 stroke-blue-500'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
            </svg>
          </span>
        </div>
        <div className='bg-zinc-50'>
          <div className='logo-company text-white bg-blue-500 flex flex-row gap-3 items-center pl-5 py-10'>
            <h1 className='font-semibold text-xl'>{jobTitle}</h1>
            <h2 className='bg-green-600 rounded-full px-1.5 py-0.5 font-bold text-xl'>{jobType}</h2>
          </div>
          <div className='bg-white m-4 p-1'>
            <div className='key-details m-5'>
              <div className='flex flex-row gap-2 items-center'>
                <img src={jobImg} alt='company logo' width={65} />
                <h2 className='font-bold text-xl'>{jobCompany}</h2>
              </div>
              <div className='font-bold text-xl'>Key facts: </div>
                <div className='facts flex flex-row gap-2'>
                  <div className='flex flex-col gap-1 basis-1/4 md:basis-2/12'>
                    <div className='font-bold'>Salary:</div>
                    <div className='py-1.5'>{`£${jobSalary}`}</div>
                  </div>
                  <div className='flex flex-col gap-1 basis-1/4 md:basis-2/12'>
                    <div className='font-bold'>Type: </div>
                    <div className='py-1.5'>{jobType}</div>
                  </div>
                  <div className='flex flex-col gap-1 basis-1/4 md:basis-2/12'>
                    <div className='font-bold'>Date posted: </div>
                    <div className='py-1.5'>{jobDate}</div>
                  </div>
                  <div className='flex flex-col gap-1 basis-1/4 md:basis-6/12'>
                    <div className='font-bold'>Skills:</div>
                      <div className='flex flex-row gap-1 flex-wrap'>
                        {jobSkills.map((skill) => (
                        <span key={skill.id} className='bg-teal-400 text-white font-semibold text-sm px-2.5 py-1.5 rounded-lg'>
                          {skill.skill}
                        </span>
                      ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='description m-2 p-1'>
                  <h2 className='font-bold'>Job description</h2>
                  <p>{jobDesc}</p>
                </div>
                <div className='flex my-6 mx-2 p-1 items-center'>
                  <button className='bg-green-600 text-white p-2 rounded-lg'>Apply Now</button>
                  <button className='ml-auto rounded-lg border-2 p-1 border-zinc-400 text-zinc-400'>Save for later</button>
                </div>
              </div>
          {/* <div className='mt-8 mx-10'>
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
              </div>  */}
        </div>
      </div>
    </section>
  );
};

export default JobModal;
