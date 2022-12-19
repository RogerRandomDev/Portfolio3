import backdrop from '../images/backdrop.jpg';

const links = [
    ['About',
    'Skills'],
    ['Projects',"Resume"]
]

function Landing(){
    
    return <div class="w-full h-screen max-h-screen py-0 pb-[50vh]">
    <img src={backdrop} class="absolute min-w-full min-h-full h-full object-cover max-h-full translate-y-[50vh]"/>
    <div class="z-10 flex flex-col gap-3 px-3 container mx-auto w-min sm:landscape:translate-y-[35vh] md:translate-y-[50vh] portrait:translate-y-[50vh] sm:mt-0 text-center">
        
        <p class="z-10 text-6xl sm:text-8xl font-bold mt-[30vh]">Roger Grange</p>
        {links.map((linkSet)=>{
            return <div class="z-10 flex w-fit mx-auto gap-x-2 object-center">
                {linkSet.map((link)=>{
                    return <a targetTo={link} onClick={(e)=>{
                        var to=e.target.attributes.getNamedItem("targetTo").value
                        var d=document.getElementById(to)
                    d.scrollIntoView({behavior: "smooth"})}} class="font-bold p-1 text-3xl px-1 grow shadow-2xl bg-gray-500 rounded-lg border-2 border-solid border-gray-700 border-t-gray-100 border-l-gray-100 hover:bg-gray-300 focus:bg-gray-600">{link}</a>
                })}
            </div>
        
        })}
    </div>
    </div>
}


export default Landing