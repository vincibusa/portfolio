import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Project } from "../models/ProjectModel";
import misterFishImage from "../assets/images/mr-fish-screen.png";
import portfolioImage from "../assets/images/portfolio-screen.png";
import fermentoImage from "../assets/images/fermento.png";
import bassiImage from "../assets/images/bassi.png";
import { FaLink,  FaGithub } from "react-icons/fa";

const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: 1,
      title: t("projects.mr-fish.title"),
      description: t("projects.mr-fish.description"),
      image: misterFishImage,
      tech: ["React", "Node.js", "Firebase"],
      link: "mister-fish.it"
    },
    {
      id: 2,
      title: t("projects.portfolio.title"),
      description: t("projects.portfolio.description"),
      image: portfolioImage,
      tech: ["React", "Tailwind CSS"],
      link: ""
    },
    {
      id: 3,
      title: t("projects.fermento.title"),
      description: t("projects.fermento.description"),
      image: fermentoImage,
      tech: ["React", "Tailwind CSS", "Firebase", "React Native/Expo"],
      link: "www.fermentocefalu.it"
    },
    {
      id: 4,
      title: t("projects.bassi.title"),
      description: t("projects.bassi.description"),
      image: bassiImage,
      tech: ["React", "Tailwind CSS", "Firebase", "React Native/Expo"],
      link: "bassifondenti.it"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            {t("my projects")}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Esplora i progetti che ho sviluppato utilizzando tecnologie web moderne e design UI/UX avanzati
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={`${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      {project.link && (
                        <motion.a
                          href={`https://${project.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaLink className="text-white" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-7">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-5 line-clamp-3">{project.description}</p>
                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-600 font-medium flex items-center gap-2 hover:text-purple-600 transition-colors"
                    onClick={() => project.link && window.open(`https://${project.link}`, "_blank")}
                  >
                    Visita {project.link ? "il sito" : "il progetto"}
                    <FaLink className="text-sm" />
                  </motion.button>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-gray-800 transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 