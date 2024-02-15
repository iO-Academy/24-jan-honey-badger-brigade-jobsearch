import { useContext } from "react";
import { JobContext } from "../../context";

function SkillBoxes () {
const { skillList, setSkillID, skillID } = useContext(JobContext);

function handleSkill(id) {
    setSkillID(id);
  }
console.log(skillID)
    return (
        <>
        <section className='bg-blue-500 mt-5'>
            <div className='py-10 px-2.5 mx-auto w-4/5 lg:max-w-screen-lg'>
                <h3 className='text-4xl mb-2'>Browse Skills</h3>
                <div className='py-2.5 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-3'>
                    {skillList.map(skill =>
                        <div key={skill.id} onClick={() => handleSkill(skill.id)} className='border border-zinc-700 py-3 px-1.5'>
                        <p className='text-4xl lg:text-center text-white mb-5'>{skill.skill}</p>
                        <p className='text-sm lg:text-center'>{skill.job_count} jobs</p>
                    </div> 
                    )}
                </div>
            </div>
        </section>
        </>
    )
} 
export default SkillBoxes;