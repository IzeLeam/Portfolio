"use client";

import { motion } from "framer-motion";
import Contributions from "./components/contributions";
import Projects from "./components/projects";
import Contact from "../components/contact";

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex gap-4 items-start"
    >
      <div className="flex flex-col gap-4 w-3/4">
        <Contributions />
        <Projects />
      </div>
      <div className="flex flex-col gap-4 w-1/4">
        <Contact />
      </div>
    </motion.div>
  );
}
