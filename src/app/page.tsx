"use client";

import { motion } from "framer-motion";

import Hero from "./components/home/hero";
import Career from "./components/home/career";
import Skills from "./components/home/skills";
import Expertise from "./components/home/expertise";
import Contact from "./components/contact";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex items-start gap-4"
    >
      <div className="flex flex-col gap-4 w-2/3">
        <Hero />
        <Career />
      </div>
      <div className="flex flex-col gap-4 w-1/3">
        <Skills />
        <Expertise />
        <Contact />
      </div>
    </motion.div>
  );
}
