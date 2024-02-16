import { useContext } from 'react';
import { JobContext } from '../../context';

function NavBarSkillsItems({ skills }) {
  const { setSkill } = useContext(JobContext);
  const handleSkillClick = (id) => {
    // Call the setSkill function with id and skillName
    setSkill(id);
  };

  return (
    <>
      {skills.map(({ skill }) => (
        <p key={skill.id} onClick={() => handleSkillClick(skill.id)} className='font-semibold text-sm cursor-pointer text-white px-1.5 py-0.5 bg-teal-400 rounded-lg'>
          {skill.skill}
        </p>
      ))}
    </>
  );
}

export default NavBarSkillsItems;
