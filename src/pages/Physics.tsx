import { useEffect } from "react";
import Footer from "../components/Footer";
import SubNavBar from "../components/SubNavBar";
import About from "../components/About";
import Social from "../components/Social";
import PhysicsProjects from "../components/PhysicsProjects";

const Physics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SubNavBar />
      <PhysicsProjects />
      <About />
      <Social />
      <Footer />
    </>
  );
};

export default Physics;
