import React from "react";
import Introduction from "./Components/Introduction";
import Projects from "./Components/Projects";
import About from "./Components/About";

const Home: React.FC = () => {
  return (
    <div className="pb-5">
      <Introduction />
      <About />
      <Projects />

      {/* <div className='custom-grid'>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
        <div className="col-span-1 flex flex-col gap-8">
          <FloatingNav noBackButton={true} />
          <div ref={ref} className={`transition-opacity duration-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
      </div>
      <div className='w-full text-center my-20'>
        <Skills />
      </div>
      <div className='custom-grid'>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
        <div className="col-span-1 flex flex-col gap-8">
          <Work />

          <Footer />
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
      </div> */}
    </div>
  );
};

export default Home;
