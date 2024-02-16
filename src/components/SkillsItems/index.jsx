function SkillsItems({ skills }) {
  return (
    <>
      {skills.map((skills) => (
        <p key={skills.skill} className='font-semibold text-sm text-white items-center px-1.5 py-0.5 bg-teal-400 rounded-lg'>
          {skills.skill}
        </p>
      ))}
    </>
  );
}

export default SkillsItems;
