import { useContext } from "react";
import { JobContext } from "../../context";

function SkillsItems({ skills }) {
    const {skill, setSkill} = useContext(JobContext)

    function handleSkillClick(id) {
        setSkill(id);
      }

    return (
        <span onClick={() => handleSkillClick('7')}>
            {skills.map(skills =>
                <span key={skills.id} className='font-semibold text-sm text-white px-1.5 py-0.5 bg-teal-400 rounded-lg'>{skills.skill}</span>
            )}
            {console.log(skill)}
        </span>
    )
}

export default SkillsItems

