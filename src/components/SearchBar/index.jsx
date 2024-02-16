import { useContext, useState } from 'react';
import { JobContext } from '../../context';
import NavBarSkillsItems from '../NavBarSkillItems';

function SearchBar({ toggle }) {
  const [searchJob, setSearchJob] = useState('');

  const { setSearch, setJobType, setTypes2, setTypes3, types2, types3, jobType, allJobs } = useContext(JobContext);

  //we map through all of the jobs and store the skills in a variable called jobSkills
  const jobSkills = allJobs.map((job) => job.skills);
  //we create a new Map called skillsOccurrences
  const skillsOccurrences = new Map();
  //we create one large array of all skills and for each skill we create a new object with the id and  name and count the occurances
  jobSkills.flat().forEach((skill) => {
    const { id } = skill;
    if (skillsOccurrences.has(id)) {
      skillsOccurrences.get(id).count++;
    } else {
      skillsOccurrences.set(id, { count: 1, skill });
    }
  });
  //we convert the Map to an array and sort the array by the count in descending order
  const occurrenceArray = Array.from(skillsOccurrences.values());
  occurrenceArray.sort((a, b) => b.count - a.count);

  //we store the top 3 skills in a variable called topSkills
  const topSkills = occurrenceArray.slice(0, 3);

  function submitSearch(e) {
    e.preventDefault();
    setSearch(searchJob);
  }

  function handleFullTimeClick() {
    setJobType((prevJobType) => (prevJobType === 'Full time' ? null : 'Full time'));
    if (types2 && types3) {
      setTypes2(null);
      setTypes3(null);
    }
  }

  function handlePartTimeClick() {
    setTypes2((prevTypes2) => (prevTypes2 === 'Part time' ? null : 'Part time'));
    if (jobType && types3) {
      setJobType(null);
      setTypes3(null);
    }
  }

  function handleContractClick() {
    setTypes3((prevTypes3) => (prevTypes3 === 'Contract' ? null : 'Contract'));
    if (jobType && types2) {
      setJobType(null);
      setTypes2(null);
    }
  }

  return (
    <form onSubmit={submitSearch}>
      <div className="bg-[url('/src/assets/JobSearchHeaderBG.jpg')] bg-cover bg-center">
        <div className='flex flex-col gap-3 px-2.5 md:py-20 py-10 mx-auto w-full md:max-w-screen-md'>
          <h1 className='text-white text-5xl pb-5'>Find your perfect job</h1>
          <input className='rounded p-2 px-2.5 mx-auto w-full md:max-w-screen-md' onChange={(e) => setSearchJob(e.target.value)} type='text' id='search' placeholder='developer' />

          <div className='flex justify-between items-center'>
            <div className='flex gap-3'>
              <div className='flex gap-1 items-center'>
                <input type='checkbox' id='full-time' onChange={() => handleFullTimeClick('Full time')} />
                <label className='text-white text-sm' htmlFor='full-time'>
                  Full time
                </label>
              </div>
              <div className='flex gap-1 items-center'>
                <input type='checkbox' id='part-time' onChange={() => handlePartTimeClick('Part time')} />
                <label className='text-white text-sm' htmlFor='part-time'>
                  Part time
                </label>
              </div>
              <div className='flex gap-1 items-center'>
                <input type='checkbox' id='contract' onChange={() => handleContractClick('Contract')} />
                <label className='text-white text-sm' htmlFor='contract'>
                  Contract
                </label>
              </div>
            </div>

            <div>
              <p className='text-white text-xs'>Popular skills:</p>
              <div className='flex gap-2'>
                {/* <SkillsItems skills={topSkillNames.map((skillName) => ({ skill: skillName }))} /> */}
                {/* <SkillsItems skills={topSkills} /> */}
                <NavBarSkillsItems skills={topSkills} />
              </div>
            </div>
          </div>

          <div>
            <input className='bg-blue-500 py-2 px-3 rounded text-white cursor-pointer' onClick={toggle} type='submit' value='Search' />
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
