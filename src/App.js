import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="text-white w-full h-screen snap-y snap-mandatory">
      <Header />

      <section id="home" className="max-w-7xl mx-auto px-2 h-[90%] snap-center">
        <Home />
      </section>

      <section
        id="projects"
        className="max-w-7xl mx-auto px-2 h-[90%] snap-center"
      >
        <Projects />
      </section>
    </div>
  );
}

export default App;
