import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white scroll-smooth">
      <Navbar />
      <main>
        <section id="about" className="scroll-mt-20"><About /></section>
        <section id="projects" className="scroll-mt-20"><Projects /></section>
        <section id="skills" className="scroll-mt-20 py-32"><Skills /></section>
        <section id="contact" className="scroll-mt-20 py-32"><Contact /></section>
        <section id="footer"><Footer /></section>
      </main>
    </div>
  );
}

export default App;

