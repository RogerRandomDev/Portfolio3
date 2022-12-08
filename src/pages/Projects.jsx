//html logo https://cdn-icons-png.flaticon.com/512/1216/1216733.png
//itch.io logo https://bevyengine.org/assets/itchio-textless.svg
//github logo https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg
//javascript logo https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png
const projectList=[
    ["Arcade Mega-Mash","Godot","https://rogerrandom.itch.io/arcade-mega-mash","https://bevyengine.org/assets/itchio-textless.svg"],
    ["JS Engine","JavaScript","https://rogerrandomdev.github.io/jsengine1/","https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"],
    ["HTML ENGINE 2","HTML","https://rogerrandomdev.github.io/html_engine_2/","https://cdn-icons-png.flaticon.com/512/1216/1216733.png"],
    ["HTML ENGINE","HTML","https://rogerrandomdev.github.io/html_engine/","https://cdn-icons-png.flaticon.com/512/1216/1216733.png"],
    ["HTML GAME","HTML","https://rogerrandomdev.github.io/html_game/","https://cdn-icons-png.flaticon.com/512/1216/1216733.png"],
    
]




function Projects(){
    return (
        <div>
            <h1 className="mx-auto w-fit text-5xl font-bold text-gray-300 mb-3" id="Projects">Projects</h1>
            <div className=" mx-auto sm:grid grid-rows-2 flex grid-flow-col flex-wrap sm:flex-nowrap justify-center sm:justify-start justify-items-stretch w-fit sm:max-w-[95vw] flex-row gap-4 sm:overflow-x-auto rounded-xl border-4 border-gray-600" id="roundScrollBottom">
                {projectList.map((project)=>{
                    return <a href={project[2]} className="border-solid rounded-xl w-fit max-w-[10rem] sm:max-w-full sm:w-0 sm:min-w-[16.666vw] bg-gray-400 border-gray-600 flex flex-col" style={{"aspect-ratio":"3/4"}}>
                        <h1 className="text-center flex-none bg-gray-700 rounded-t-lg text-gray-200 border-b-gray-800 border-b-2 h-11 justify-center justify-self-start">{project[0]}</h1>
                        <div className="justify-self-center flex-grow flex">
                            <img src={project[3]} className="mx-auto object-contain" style={{"aspect ratio":"1/1"}}/>
                        </div>
                        
                        <p className="text-center justify-self-end bg-gray-700 border-solid border-t-gray-800 border-t-2 rounded-b-lg text-gray-300">Made With: {project[1]}</p>

                    </a>
                })}
            </div>
        </div>
    )
    
}


export default Projects