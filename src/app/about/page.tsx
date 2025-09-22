"use client";

import Hero from "./components/hero";
import Contact from "../components/contact";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex gap-4 items-start"
    >
      <div className="flex flex-col gap-4 w-1/2">
        <Hero />
        <About />
        <Education />
      </div>
      <div className="flex flex-col gap-4 w-1/2">
        <Experience />
        <Contact />
      </div>
    </motion.div>
  );
}
