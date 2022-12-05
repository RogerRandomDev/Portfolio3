import backdrop from '../images/backdrop.jpg';
const links = [
    ['About',
    'test2'],
    ['test3']
]

function Landing(){
    
    return <div class="w-full h-screen max-h-screen py-0 pb-[50vh]">
    <img src={backdrop} class="absolute min-w-full min-h-full h-full object-cover max-h-full"/>
    <div class="z-10 flex flex-col gap-3 px-3 container mx-auto w-min mt-[50vh] text-center">
        
        <p class="z-10 text-xl font-bold mt-[40vh]">Roger Grange</p>
        {links.map((linkSet)=>{
            return <div class="z-10 flex w-fit mx-auto gap-x-2 object-center">
                {linkSet.map((link)=>{
                    return <a href={"#"+link} class="text-lg px-1 grow bg-stone-600 rounded-md border-2 border-solid border-stone-800 border-t-stone-300 border-l-stone-300">{link}</a>
                })}
            </div>
        
        })}
    </div>
    </div>
}


export default Landing