import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { PiCertificateDuotone } from "react-icons/pi";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-8 md:px-20 bg-[#0a0a0a] text-white"
    >
      {/* ---- Left side ---- */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
        {/* Social icons */}
        <div className="flex gap-4 mb-6 text-2xl">
          <a
            href="https://github.com/BrunoContrera7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-contrera-75741a297/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:brunocontrera2004@gmail.com"
            className="hover:text-teal-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://discord.com/users/bruno.7_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            <FaDiscord />
          </a>
        </div>

        {/* Text */}
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Hey 👋, I'm <span className="text-teal-400">Bruno Contrera</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
          <ReactTyped
            strings={[
              "Software Developer",
              "Programmer",
              "Technical Superior in Programming",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h2>

        {/* Resume button */}
        <div className="flex gap-3">
          <a
          href="/Resume-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-gray-500 hover:border-teal-400 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition"
        >
          <span className="text-sm font-medium">
            <FaFilePdf className="inline mr-2" />
            Resume</span>
        </a>
        <a
          href="./images/certificado.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-gray-500 hover:border-teal-400 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition"
        >
          <span className="text-sm font-medium">
            <PiCertificateDuotone className="inline mr-2" />
            Certificated</span>
        </a>
        </div>
      </div>

      {/* ---- Right side (photo) ---- */}
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg">
        <img
          src="./images/bruno.jpg"
          alt="Bruno Contrera"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default About;