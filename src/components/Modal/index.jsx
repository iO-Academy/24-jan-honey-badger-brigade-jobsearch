import { useContext } from 'react';
import { JobContext } from '../../context';

const JobModal = () => {
  const { recentJobs } = useContext(JobContext);
  const job = recentJobs[0];
  console.log(job);
  return (
    <div className='Modal-container px-2 border-2 border-slate-400'>
      <div className='flex my-4 border-slate-400 border-b-2 pb-2'>
        <div className='flex flex-row gap-2'>
          <h2>{`${job.job_title} -`}</h2>
          <h2>{job.company}</h2>
        </div>
        <button className='ml-auto'>X</button>
      </div>
      <div className='logo-company text-white bg-blue-500 flex flex-row gap-3 items-center pl-5 mx-2' style={{ height: '100px' }}>
        <h1 className='font-semibold text-lg'>Junior Software Engineer</h1>
        <h2 className='bg-green-600 rounded-full p-1'>Job type</h2>
      </div>
      <div className='mx-10 mt-5'>
        <div className='key-details'>
          <div className='flex flex-row gap-2 items-center'>
            <img src={job.logo} alt='company logo' width={65} />
            <h2 className='font-semibold'>{job.company}</h2>
          </div>
          <div className='font-semibold'>Key facts: </div>
          <div className='facts flex flex-row gap-12'>
            <div>
              <div>Salary:</div>
              <div>{`$${job.salary}`}</div>
            </div>
            <div>
              <div>Type: </div>
              <div>Full time</div>
            </div>
            <div>
              <div>Data posted: </div>
              <div>{'2024.05.25'}</div>
            </div>
            <div>
              <div>Skills</div>
              <div className='flex flex-row gap-1'>
                <p>php</p>
                <p>react</p>
                <p>JavaScript</p>
              </div>
            </div>
          </div>
        </div>
        <div className='description mt-2'>
          <h2 className='font-bold'>Job description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quod velit modi voluptatum quibusdam quis iure, iste quia atque sint mollitia nostrum eos fugit! Recusandae nemo doloremque
            nam non illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quod velit modi voluptatum quibusdam quis iure, iste quia atque sint mollitia nostrum eos fugit! Recusandae
            nemo doloremque nam non illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quod velit modi voluptatum quibusdam quis iure, iste quia atque sint mollitia nostrum eos
            fugit! Recusandae nemo doloremque nam non illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quod velit modi voluptatum quibusdam quis iure, iste quia atque sint
            mollitia nostrum eos fugit! Recusandae nemo doloremque nam non illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quod velit modi voluptatum quibusdam quis iure, iste
            quia atque sint mollitia nostrum eos fugit! Recusandae nemo doloremque nam non illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quod velit modi voluptatum quibusdam
            quis iure, iste quia atque sint mollitia nostrum eos fugit! Recusandae nemo doloremque nam non illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quod velit modi
            voluptatum quibusdam quis iure, iste quia atque sint mollitia nostrum eos fugit! Recusandae nemo doloremque nam non illo.
          </p>
        </div>
        <div className='flex mt-3 items-center'>
          <button className='bg-green-600 text-white p-2 rounded-lg'>Apply Now</button>
          <button className='ml-auto rounded-lg border-2 p-1 border-zinc-400 text-zinc-400'>Save for later</button>
        </div>
      </div>
      <div>Similar jobs</div>
    </div>
  );
};

export default JobModal;
