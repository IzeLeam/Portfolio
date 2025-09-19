import Hero from "../components/about/hero";
import Contact from "../components/contact";
import About from "../components/about/about";
import Education from "../components/about/education";
import Experience from "../components/about/experience";

export default function AboutPage() {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex flex-col gap-4 w-1/2">
        <Hero />
        <About />
      </div>
      <div className="flex flex-col gap-4 w-1/2">
        <Education />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
