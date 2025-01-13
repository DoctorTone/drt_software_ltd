import TopSection from "../components/TopSection";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Footer from "../components/Footer";
import Social from "../components/Social";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <TopSection />
      <Projects />
      <Services />
      <Testimonials />
      <About />
      <Social />
      <Footer />
    </>
  );
};

export default MainPage;
