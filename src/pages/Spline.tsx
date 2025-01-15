import { useEffect } from "react";
import SubNavBar from "../components/SubNavBar";
import SplineProjects from "../components/SplineProjects";
import Footer from "../components/Footer";
import Social from "../components/Social";
import About from "../components/About";

const Spline = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SubNavBar />
      <SplineProjects />
      <About />
      <Social />
      <Footer />
    </>
  );
};

export default Spline;
