import React from "react";
import Introduction from "./Components/Introduction";
import Projects from "./Components/Projects";
import About from "./Components/About";
import SideProject from "./Components/SideProject";
const Home: React.FC = () => {
  return (
    <div className="pb-5">
      <Introduction />
      <About />
      <Projects />
      <SideProject />
    </div>
  );
};

export default Home;
