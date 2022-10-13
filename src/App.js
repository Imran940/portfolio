import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div className="w-full h-screen">
      <Header />

      <div id="home" className="text-white max-w-7xl mx-auto px-2 h-[90%]">
        <Home />
      </div>
    </div>
  );
}

export default App;
