const projectList=[
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash"],
]




function Projects(){
    return (
        <div>
            <h1 className="mx-auto w-fit text-5xl font-bold text-gray-300 mb-3" id="Projects">Projects</h1>
            <div className=" mx-auto flex flex-wrap sm:flex-nowrap justify-center sm:justify-start justify-items-stretch w-fit sm:max-w-[95vw] flex-row gap-4 sm:overflow-x-auto rounded-xl border-4 border-gray-600" id="roundScrollBottom">
                {projectList.map((project)=>{
                    return <a href={project[2]} className="border-solid rounded-xl w-fit max-w-[10rem] sm:max-w-full sm:w-0 sm:min-w-[16.666vw] bg-gray-400 border-gray-600 flex flex-col" style={{"aspect-ratio":"3/4"}}>
                        <h1 className="text-center flex-none bg-gray-700 rounded-t-lg text-gray-200 border-b-gray-800 border-b-2 h-11 justify-center justify-self-start">{project[0]}</h1>
                        <div className="justify-self-center flex-grow flex">
                            <img src="https://static-00.iconduck.com/assets.00/itch-io-icon-512x512-wwio9bi8.png" className="mx-auto " style={{"aspect ratio":"1/1"}}/>
                        </div>
                        
                        <p className="text-center justify-self-end bg-gray-700 border-solid border-t-gray-800 border-t-2 rounded-b-lg text-gray-300">Made With: {project[1]}</p>

                    </a>
                })}
            </div>
        </div>
    )
    
}


export default Projects