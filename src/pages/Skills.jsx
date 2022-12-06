//name,percent proficiency
import {useState,useEffect} from "react"
const mySkills=[
    ["JavaScript",90],
    ["Java",70],
    ["Python",60],
    ["CSS",50],
    ["HTML",65],
    ["C++",30],
    ["GDScript",95]
]


function Skills(){
    const [windowSize,setWindowSize] = useState(window.innerWidth)
    window.addEventListener('resize',(e)=>{setWindowSize(window.innerWidth)})
    useEffect(()=>{

    },[windowSize])
return <>
    
    <h1 class="text-4xl font-bold text-white w-fit mx-auto" id="Skills">SKILLS</h1>
    <div class="mx-auto flex flex-row flex-wrap sm:w-[100vw] md:w-[87.5vw] w-fit sm:w-[75vw] gap-0 md:gap-2">
        {mySkills.map((skill)=>{
            return (
            <div className="mx-auto bg-black text-center md:w-[20rem] min-h-[1.5rem]" style={windowSize<768?{'min-height':`11.5rem`}:{'min-width':`20rem`}}>
                <p  className="text-center bg-gray-600 text-white font-bold m] sm:min-w-[2.5rem] text-xs sm:text-md">{skill[0]}</p>
                <div className='bg-gray-800 text-white text-center' style={windowSize<768?{'height':`${skill[1]/10}rem`}:{'width':`${skill[1]/5}rem`}}>{skill[1]}%</div>
                
            </div>
        )})}
    </div> 
    <hr />
</>
}



export default Skills