function JobCard ({salary, type, title, company,logo, skills}) {

    return (
        <div className="flex p-5 justify-between items-start bg-zinc-700 w-full">
            <div className="flex gap-5 items-start">
                <img  className="h-20 w-20" src={logo} />
                <div className="flex flex-col">
                    <p className="text-2xl text-white">{title}</p>
                    <p className="text-xl text-white">{company}</p>
                </div>
            </div>
            <button className="bg-blue-500 rounded-xl p-1">
                <p className="text-sm text-white">{type}</p>
            </button>
            <p className="text-base text-white">{`£ ${salary}`}</p>
            <button className="bg-teal-400 rounded-xl p-1">
                <p className="text-sm text-white">{skills}</p>
            </button>
        </div>
    )
}
export default JobCard