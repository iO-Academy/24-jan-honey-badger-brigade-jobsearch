import { useContext } from "react";
import { JobContext } from "../../context";

function SkillsItems({ skills }) {
    const {skillID, setSkill} = useContext(JobContext)
  
    function handleSkillClick(id) {
        setSkill(id);
      }

    return (
        <>
            {skills.map(skills =>
                <span key={skills.id} className='font-semibold text-sm text-white px-1.5 py-0.5 bg-teal-400 rounded-lg' onClick={() => handleSkillClick(skills.id)}>{skills.skill}</span>
            )}
            {console.log(skillID)}
        </>
    )
}

export default SkillsItems

