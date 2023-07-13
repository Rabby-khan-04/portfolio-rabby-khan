"use client";

import Banner from "@/components/Home/Banner/Banner";
import Project from "@/components/Home/Project/Project";
import Process from "@/components/Home/Process/Process";
import Contact from "@/components/Home/Contact/Contact";
import About from "@/components/Home/About/About";
import { motion } from "framer-motion";

const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
    >
      <Process />
      <Banner />
      <About />
      <Project />
      <Contact />
    </motion.div>
  );
};

export default PortfolioPage;
