function JobCard({ salary, type, title, company, logo, skills }) {
  return (
    <div className='flex py-5 px-2 justify-between items-start'>
      <div className='flex gap-1 items-start' style={{ minWidth: '350px' }}>
        <img className='h-20 w-20' src={logo} />
        <div className='flex flex-col'>
          <p className='text-2xl text-white'>{title}</p>
          <p className='text-xl text-white'>{company}</p>
        </div>
      </div>
      <button className='bg-blue-500 rounded-xl p-1 '>
        <p className='text-sm text-white'>{type}</p>
      </button>
      <p className='text-base text-white'>{`£${salary}`}</p>
      <div className='bg-teal-400 rounded-xl p-1 mr-16'>
        <p className='text-sm text-white'>{skills}</p>
      </div>
    </div>
  );
}
export default JobCard;
