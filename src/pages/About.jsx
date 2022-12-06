//import portrait from '../images/portrait.jpg'

function About(){
    return <div id="About">
        <h1 class="mx-auto w-fit text-5xl font-bold text-gray-300">About</h1>
        <img src={/*portrait*/ null} alt="IMAGE NOT FOUND" class="mx-auto w-fit"/>
        <p class="mx-auto w-fit break-normal text-gray-300 max-w-xl text-center">
            I am an aspiring backend web-developer who enjoys creating games and trying 
            out new ideas.
        </p>
    </div>
}

export default About;