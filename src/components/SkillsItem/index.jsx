
function SkillsItem({ skills }) {

    return (
        <>
            {skills.map(skill =>
                <>
                    <p className='text-sm text-white bg-teal-400 rounded-xl p-1'>{skill.skill}</p>

                </>

            )}

        </>
    )
}

export default SkillsItem