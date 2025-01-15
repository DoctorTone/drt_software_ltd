import { useEffect } from "react";
import About from "../components/About";
import DataProjects from "../components/DataProjects";
import Footer from "../components/Footer";
import Social from "../components/Social";
import SubNavBar from "../components/SubNavBar";

const DataViz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SubNavBar />
      <DataProjects />
      <About />
      <Social />
      <Footer />
    </>
  );
};

export default DataViz;
