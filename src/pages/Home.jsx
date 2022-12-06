import Landing from "./Landing"
import About from "./About"
import Skills from './Skills'
import Projects from './Projects'
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
    </div>
    )
}



export default Home