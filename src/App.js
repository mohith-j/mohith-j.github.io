import NavBar from "./components/navbar.js";
import ProfileImage from "./components/profileimage.js";

function App() {
  return (
    <section className="bg-white px-10 mx-20">
      <NavBar className="min-h-screen"/>
      <ProfileImage/>
      
    </section>
  );
}

export default App;
