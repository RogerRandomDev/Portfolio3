import Landing from "./Landing"
import About from "./About"
import Skills from './Skills'
import Projects from './Projects'
import Resume from './Resume'
function Home(){
    return (
    <div class="bg-stone-900  -mt-[50vh] pb-4" style={{'overflow':'hidden'}}>
    <Landing />
    <hr/>
    <About />
    <hr/>
    <Skills />
    <hr/>
    <Projects />
    <hr/>
    <Resume />
    </div>
    )
}



export default Home