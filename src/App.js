import Footer from "./Components/Footer";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="text-white w-full h-screen snap-y snap-mandatory bg-[#0F1624]">
      <Header />
      <section id="home" className="max-w-7xl mx-auto px-2 h-full  snap-center">
        <Home />
      </section>

      <section id="projects" className="w-full h-full snap-center bg-[#0F1624]">
        <Projects />
      </section>

      <section
        id="skills"
        className="w-full h-fit md:h-full  snap-center bg-[#0F1624]"
      >
        <Skills />
      </section>
      <section id="aboutUs" className="w-full h-fit  snap-center bg-[#0F1624]">
        <About />
      </section>
      <div className="bg-[#0F1624] ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
