import TopSection from "../components/TopSection";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Footer from "../components/Footer";
import Social from "../components/Social";
import WorkIntro from "../components/WorkIntro";
import FAQ from "../components/FAQ";
import Photo from "../components/Photo";
import Latest from "../components/Latest";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <Photo />
      <Latest />
      <TopSection />
      <WorkIntro />
      <Projects />
      <Services />
      <Testimonials />
      <FAQ />
      <About />
      <Social />
      <Footer />
    </>
  );
};

export default MainPage;
