"use client";

import Banner from "@/components/Home/Banner/Banner";
import Project from "@/components/Home/Project/Project";
import Process from "@/components/Home/Process/Process";
import Contact from "@/components/Home/Contact/Contact";
import About from "@/components/Home/About/About";
import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: -100, rotateX: 90, transition: { duration: 0.6 } }}
      style={{ perspective: "1000px" }}
    >
      <About />
      <Banner />
      <Project />
      <Process />
      <Contact />
    </motion.div>
  );
};

export default ResumePage;
