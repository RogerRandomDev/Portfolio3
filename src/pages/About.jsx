import portrait from '../images/;D.jpg'
const links={
    GitHub:"https://github.com/RogerRandomDev",
    'Itch.io':"https://rogerrandom.itch.io/",
}
function About(){
    return <div id="About" className="mt-[50vh]">
        <h1 class="mx-auto w-fit text-5xl font-bold text-gray-300">About</h1>
        <img src={portrait} alt="IMAGE NOT FOUND" class="mx-auto w-fit"/>
        <p class="mx-auto w-fit break-normal text-gray-300 max-w-xl text-center text-xl">
            I am an aspiring backend web-developer who enjoys creating games and trying 
            out new ideas.
        </p>
        <hr />
        <h1 className="text-gray-300 mx-auto w-fit text-5xl font-bold">Links</h1>
        <p className="mx-auto w-fit sm:max-w-[75vw] text-xl text-center text-gray-300">
            Links to Websites that provide further information
        </p>
        <div className="flex flex-row gap-4 mb-2 sm:mb-8">
            {Object.keys(links).map((website)=>{
                return <a href={links[website]} className="shadow-2xl border-1 border-gray-700 rounded bg-gray-800 hover:bg-gray-600 text-gray-300 mx-auto text-3xl">{website}</a>
            })}
        </div>
    </div>
}

export default About;