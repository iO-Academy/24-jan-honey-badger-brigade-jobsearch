function RecentCompanies() {
  return (
    <section className='py-10 px-2.5 mx-auto w-4/5 lg:max-w-screen-lg'>
      <h3 className='text-4xl mb-2'>Recent Companies</h3>
      <div className='py-2.5 grid grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-2'>
          <div className='bg-zinc-500 py-3 px-1.5 flex flex-col lg:flex-row lg:items-center'>
            <img className='mx-auto h-20 w-20' src='src/assets/Red_square.png' alt='company logo'></img>
            <p className='text-white text-center pt-1.5'>Company</p>
          </div>
            {/* delete these 5 divs and put a map on the top one? */}
            <div className='bg-zinc-500 py-3 px-1.5 flex flex-col lg:flex-row lg:items-center'>
            <img className='mx-auto h-20 w-20' src='src/assets/Red_square.png' alt='company logo'></img>
            <p className='text-white text-center pt-1.5'>Company</p>
          </div>
          <div className='bg-zinc-500 py-3 px-1.5 flex flex-col lg:flex-row lg:items-center'>
            <img className='mx-auto h-20 w-20' src='src/assets/Red_square.png' alt='company logo'></img>
            <p className='text-white text-center pt-1.5'>Company</p>
          </div>
          <div className='bg-zinc-500 py-3 px-1.5 flex flex-col lg:flex-row lg:items-center'>
            <img className='mx-auto h-20 w-20' src='src/assets/Red_square.png' alt='company logo'></img>
            <p className='text-white text-center pt-1.5'>Company</p>
          </div>
          <div className='bg-zinc-500 py-3 px-1.5 flex flex-col lg:flex-row lg:items-center'>
            <img className='mx-auto h-20 w-20' src='src/assets/Red_square.png' alt='company logo'></img>
            <p className='text-white text-center pt-1.5'>Company</p>
          </div>
          <div className='bg-zinc-500 py-3 px-1.5 flex flex-col lg:flex-row lg:items-center'>
            <img className='mx-auto h-20 w-20' src='src/assets/Red_square.png' alt='company logo'></img>
            <p className='text-white text-center pt-1.5'>Company</p>
          </div>
        </div>
    </section>
  )
}
export default RecentCompanies;
