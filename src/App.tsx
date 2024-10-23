import TopSection from "./components/TopSection";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
function App() {
  return (
    <>
      <NavBar />
      <TopSection />
      <Projects />
      <Services />
      <Testimonials />
      <About />
    </>
  );
}

export default App;
