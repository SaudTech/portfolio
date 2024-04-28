import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { HeroHighlight } from "./components/ui/hero-highlight";
import Footer from "./components/Footer/Footer";

const DefaultLayout: React.FC = () => {
  return (
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
        className="text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto"
      >
        <div className="z-20 relative max-w-[150rem] mx-auto">
          <Outlet />
        </div>
        <Footer />
      </motion.h1>
    </HeroHighlight>
  );
};

export default DefaultLayout;
