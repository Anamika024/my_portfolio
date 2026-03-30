import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Projects from "./Projects";

export default function MainContent({ activeSection, setActiveSection }) {
  return (
    <div className="flex-1 p-10 border border-blue-900/40 p-6 rounded-2xl">

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

        {activeSection === "about" && <About />}
        {activeSection === "resume" && <Resume />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact" && <Contact />}

    </div>
  );
}