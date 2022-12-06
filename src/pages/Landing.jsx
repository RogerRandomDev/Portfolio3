import backdrop from '../images/backdrop.jpg';

const links = [
    ['About',
    'Skills'],
    ['Projects']
]

function Landing(){
    
    return <div class="w-full h-screen max-h-screen py-0 pb-[50vh]">
    <img src={backdrop} class="absolute min-w-full min-h-full h-full object-cover max-h-full"/>
    <div class="z-10 flex flex-col gap-3 px-3 container mx-auto w-min mt-[50vh] text-center">
        
        <p class="z-10 text-6xl sm:text-8xl font-bold mt-[30vh]">Roger Grange</p>
        {links.map((linkSet)=>{
            return <div class="z-10 flex w-fit mx-auto gap-x-2 object-center">
                {linkSet.map((link)=>{
                    return <a href={"#"+link} class="font-bold text-3xl px-1 grow bg-gray-500 rounded-md border-2 border-solid border-gray-700 border-t-gray-100 border-l-gray-100 hover:bg-gray-300 focus:bg-gray-600">{link}</a>
                })}
            </div>
        
        })}
    </div>
    </div>
}


export default Landing