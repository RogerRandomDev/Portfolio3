//html logo https://cdn-icons-png.flaticon.com/512/1216/1216733.png
//itch.io logo https://bevyengine.org/assets/itchio-textless.svg
//github logo https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png
//javascript logo https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png
const projectList=[
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash","https://bevyengine.org/assets/itchio-textless.svg"],
    ["Arcade Mega-Mash REPO","Godot","https://github.com/RogerRandomDev/MegaMash","https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png"],
    ["JS Engine","JavaScript","https://rogerrandomdev.github.io/jsengine1/","https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"],
    ["HTML ENGINE 2","HTML","https://rogerrandomdev.github.io/html_engine_2/","https://cdn-icons-png.flaticon.com/512/1216/1216733.png"],
    ["HTML ENGINE","HTML","https://rogerrandomdev.github.io/html_engine/","https://cdn-icons-png.flaticon.com/512/1216/1216733.png"],
    ["HTML GAME","HTML","https://rogerrandomdev.github.io/html_game/","https://cdn-icons-png.flaticon.com/512/1216/1216733.png"],
    
]




function Projects(){
    return (
        <div>
            <h1 className="mx-auto w-fit text-5xl font-bold text-gray-300 mb-3" id="Projects">Projects</h1>
            <p className="mx-auto w-fit sm:max-w-[75vw] text-xl text-center text-gray-300">
                A collection of the projects I am more proud of having accomplished.
            </p>
            <div className="flex flex-row flex-wrap sm:flex-nowrap flex-auto mx-auto sm:overflow-y-hidden overflow-y-auto justify-center sm:justify-start justify-items-stretch w-full md:w-fit sm:max-w-[95vw] gap-4 sm:overflow-x-auto rounded-xl border-4 border-gray-600" id="roundScrollBottom">
                {projectList.map((project)=>{
                    return <a href={project[2]} className="max-w-[45vw] flex-grow h-full w-full shadow-xl hover:-translate-y-1 hover:sm:translate-y-1 border-solid rounded-xl w-fit max-w-[10rem] sm:max-w-full sm:w-0 sm:min-w-[16.666vw] bg-gray-400 border-gray-600 flex flex-col" style={{"aspect-ratio":"3/4"}}>
                        <h1 className=" text-md md:text-[1rem] lg:text-lg text-center flex-none bg-gray-700 rounded-t-lg text-gray-200 border-b-gray-800 border-b-2 h-11 justify-center justify-self-start">{project[0]}</h1>
                        <div className="justify-self-center flex-grow flex overflow-hidden m-auto">
                            <img src={project[3]} className="mx-auto object-cover h-[5rem] max-w-[40vw] h-fit max-w-full" style={{"aspect-ratio":"1 / 1"}}/>
                        </div>
                        
                        <p className="text-center justify-self-end bg-gray-700 border-solid border-t-gray-800 border-t-2 rounded-b-lg text-gray-300">Made With: {project[1]}</p>

                    </a>
                })}
            </div>
        </div>
    )
    
}


export default Projects