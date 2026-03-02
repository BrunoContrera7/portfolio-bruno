import { FaGithub } from "react-icons/fa";

function Projects() {
  // Ejemplo de proyectos falsos para estructura inicial
  const projects = [
    {
      id: 1,
      title: "Holiness Parfum - Online Catalog",
      image: "./images/holiness.jpg",
      description:
        "An online product catalog developed for Holiness Parfum. Built with React, Tailwind, and JSON File for product management and modern UI design.",
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com/BrunoContrera7/pagina-web-holiness",
      demo: "https://holinessparfum.shop/"
    },
    {
      id: 2,
      title: "Golden Boy - Online Shopping",
      image: "./images/botines.jpg",
      description:
        "A website with a product catalog where you can order your soccer cleats via WhatsApp by selecting your size. It also includes sections for brands, about us, and contact information.",
      tech: ["Node.js", "Express", "Sqlite", "HTML", "CSS"],
      github: "https://github.com/BrunoContrera7/BotinesGoldenBoy",
    },
    {
      id: 3,
      title: "Panel de Administrador - E-commerce",
      image: "./images/project3.jpg",
      description:
        "An administrator panel with a CRUD to manage the products with db in supabase, connected to a frontend in react to display the products in a catalog.",
      tech: ["NodeJS", "Express", "Supabase", "React"],
      github: "https://github.com/BrunoContrera7/project-panel-holiness",
    },
    {
      id: 4,
      title: "App Pizarra 11",
      image: "./images/app.jpg",
      description:
        "Application for creating 11-a-side football formations, with selection from a list of names. It includes a whiteboard for drawing and moving pieces on a board, with backup of previous formations.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/BrunoContrera7/app-futbol",
    },
    {
      id: 5,
      title: "Panel Catalog - E-commerce",
      image: "./images/panel.jpg",
      description:
        "A PHP-based panel for a perfume catalog, allowing users to add, modify, and delete products. Username and password required.",
      tech: ["PHP", "CSS", "React"],
      github: "https://github.com/BrunoContrera7/panel-holines-new",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-20 py-24 bg-[#0a0a0a] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#111] rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition transform duration-300"
          >
            {/* Imagen */}
            <div className="h-48 w-full bg-gray-800 flex items-center justify-center">
              {/* Si aún no agregás imagen, mostramos un placeholder */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-gray-500 italic">Image coming soon...</span>
              )}
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col justify-between h-[250px]">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link a GitHub */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition text-sm font-medium"
              >
                <FaGithub />
                View on GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-teal-300 transition"
                >
                  🔗 View Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
