import NavBar from "./components/navbar.js";
import ProfileImage from "./components/profileimage.js";
import Intro from "./components/intro.js";
import SocialMedia from "./components/socialmedia.js";
import Skills from "./components/skills.js";
import Experience from "./components/experience.js";
import Research from "./components/research.js";
import Projects from "./components/projects.js";
import Contactme from "./components/contactme.js"; 
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <section className="bg-white px-10 mx-20">
      <BrowserRouter>
        <NavBar className="min-h-screen"/>
        <ProfileImage/>
        <Intro/>
        <SocialMedia/>
        <Skills/>
        <Experience/>
        <Research/>
        <Projects/>
        <Contactme/>
      </BrowserRouter>
      
    </section>
  );
}

export default App;
