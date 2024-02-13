function SkillsItem({ skills }) {

    return (
        <>
            {skills.map(skill =>
                <p>{skill.skill}</p>
            )}

        </>
    )
}

export default SkillsItem