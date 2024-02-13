function JobCard({ salary, type, title, company, logo, skills }) {
  return (
    <div className='flex py-5 px-2 justify-between items-start'>
      <div className='flex gap-2 w-[45%] pr-2'>
        <img className='h-20 w-20' src={logo} />
        <div className='flex flex-col'>
          <p className='text-2xl text-white'>{title}</p>
          <p className='text-xl text-white'>{company}</p>
        </div>
      </div>
      <div className='w-[15%]'>
        <span className='bg-blue-500 rounded-xl p-1 text-sm text-white'>{type}</span>
      </div>
      <p className='text-base text-white w-[15%]'>{`£${salary}`}</p>
      <span className='flex gap-2 items-center justify-start w-[25%] flex-wrap'>{skills}</span>
    </div>
  );
}
export default JobCard;
