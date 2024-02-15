import { useContext, useState } from "react";
import modalContext from "../../context/modalContext";
import { JobContext } from "../../context";

function JobCard({ salary, type, title, company, logo, skills, url }) {
  const {modal, toggleModal} = useContext(modalContext)
  const {jobType, setJobType} = useContext(JobContext)
  
  function handleJobTypeClick(jobType) {
    setJobType(jobType);
  }

  
  console.log(jobType)
  return ( 
    <div className='flex flex-col even:bg-zinc-700 odd:bg-zinc-500 w-full'>
      <div className='flex py-5 px-2 justify-between items-start'>
        <div className='flex gap-2 w-[45%] pr-2' id={url} onClick={toggleModal}>
          <img className='h-20 w-20 hidden md:block' src={logo} />
          <div className='flex flex-col'>
            <p className='text-2xl text-white'>{title}</p>
            <p className='text-xl text-white'>{company}</p>
          </div>
        </div>
        <div className='w-[15%]'>
          <span className='font-semibold text-sm text-white px-1.5 py-0.5 bg-blue-500 rounded-lg' id={type} onClick={() => handleJobTypeClick(type)}>{type}</span>
        </div>
        <p className='text-base text-white w-[15%]' id={url} onClick={toggleModal}>{`£${salary}`}</p>
        <span className='flex gap-2 items-center justify-start w-[25%] flex-wrap'>{skills}</span>
      </div>
    </div>
  )
}
export default JobCard;
