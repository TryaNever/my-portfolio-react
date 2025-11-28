import { FaShareSquare } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Réseau Social React/Express",
      description:
        "Application de réseau social full-stack développée durant ma formation React. Interface moderne et intuitive avec un backend Express robuste. Gestion complète des utilisateurs, posts et interactions.",
      link: "https://mini-social-omega.vercel.app",
      tags: ["React", "Tailwind CSS", "React Router"],
    },
    {
      title: "Vacances Méditieux",
      description:
        "Application web pour un projet de vacances, réalisée en première année. Interface dynamique et responsive avec animations. Projet évalué et réalisé en collaboration avec Augustin.",
      link: "https://projet-vancance-meditieux.vercel.app/",
      tags: ["JavaScript", "SCSS"],
    },
    {
      title: "Rent-A-Car",
      description:
        "Application web de location de voitures développée avec Laravel. Système complet avec gestion des utilisateurs, réservations et notifications par email. Projet réalisé en binôme.",
      link: "https://github.com/TryaNever/Rent-A-Car",
      tags: ["Laravel", "PHP", "MySQL", "Composer"],
    },
  ];

  return (
    <section className="mt-12 md:mt-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Mes Projets
      </h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1f1f1f] p-6 md:p-8 rounded-lg border-2 border-gray-800 hover:border-amber-500 transition-colors"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-2">
                <h3 className="text-xl md:text-2xl font-bold">
                  {project.title}
                </h3>

                <FaShareSquare className="ri-external-link-line text-xl text-amber-500 hover:text-amber-400 transition-colors" />
              </div>
              <p className="text-base text-[#b4b4b4] font-medium mb-4">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-amber-500/20 text-amber-500 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
