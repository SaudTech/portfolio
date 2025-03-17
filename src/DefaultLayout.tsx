import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { HeroHighlight } from "./components/ui/hero-highlight";
import Footer from "./components/Footer/Footer";
import { Link } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <>
      <Link to="https://dev.to/saudtech/ultimate-guide-securing-your-expressjs-app-for-maximum-protection-3khe" target="_blank" className="md:block hidden">
        <div className="py-2 w-full hover:cursor-pointer bg-gray-900 text-white">
          <div className=" text-lg flex w-full items-center justify-center gap-3 hover:scale-95 transition-all duration-300">
            <span className="text-sm opacity-70">Latest Blog:</span> Ultimate
            Guide: Securing Your Express.js App for Maximum Protection
          </div>
        </div>
      </Link>
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto flex flex-col min-h-screen"
        >
          <div className="z-20 relative max-w-[150rem] mx-auto flex-grow">
            <Outlet />
          </div>
          <Footer />
        </motion.h1>
      </HeroHighlight>
    </>
  );
};

export default DefaultLayout;
