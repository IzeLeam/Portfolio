import Hero from "./components/home/hero";
import Career from "./components/home/career";
import Skills from "./components/home/skills";
import Expertise from "./components/home/expertise";
import Contact from "./components/home/contact";

export default function Home() {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex flex-col gap-4 w-2/3">
        <Hero />
        <Career />
      </div>
      <div className="flex flex-col gap-4 w-1/3">
        <Skills />
        <Expertise />
        <Contact />
      </div>
    </div>
  );
}
