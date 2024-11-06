import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs, FaPython,  FaAngular, FaBriefcase, FaFigma } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Project } from "../models/ProjectModel";

import { SiMongodb, SiPostgresql } from "react-icons/si";
import misterFishImage from "../assets/images/mr-fish-screen.png";
import { useTranslation } from 'react-i18next';
import { IoMdArrowDropdown } from "react-icons/io";
import portfolioImage from "../assets/images/portfolio-screen.png";
const Home: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showCVOptions, setShowCVOptions] = useState(false);
  const projects: Project[] = [
    {
      id: 1,
      title: t("projects.mr-fish.title"),
      description: t("projects.mr-fish.description"),
      image: misterFishImage,
      tech: ["React", "Node.js", "Firebase"],
      link:"mister-fish.it"
    },
    {
      id: 2,
      title: t("projects.portfolio.title"),
      description: t("projects.portfolio.description"),
      image: portfolioImage,
      tech: ["React", "Tailwind CSS"],
      link:""
    }
  ];

  // const testimonials: Testimonial[] = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     role: "CEO, Tech Corp",
  //     content: "Exceptional work and great communication throughout the project.",
  //     image: "images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     role: "Product Manager",
  //     content: "Delivered high-quality work ahead of schedule. Highly recommended!",
  //     image: "images.unsplash.com/photo-1494790108377-be9c29b29330"
  //   }
  // ];

  const services = [
    {
      id: 1,
      title: t("servicesDesc.web-development.title"),
      description: t("servicesDesc.web-development.description"),
      icon: <FaReact className="text-4xl mb-4 text-blue-500" />
    },
    {
      id: 2,
      title: t("servicesDesc.web-design.title"),
      description: t("servicesDesc.web-design.description"),
      icon: <FaFigma className="text-4xl mb-4 text-green-500" />
    },
    {
      id: 3,
      title: t("servicesDesc.mobile-cross.title"),
      description: t("servicesDesc.mobile-cross.description"),
      icon: <FaReact className="text-4xl mb-4 text-amber-500" />
    }
  ];

  const skills = [
    { name: "React", icon: <FaReact className="text-4xl text-blue-500" /> },
    { name: "Angular", icon: <FaAngular className="text-4xl text-red-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" /> },
    { name: "Python", icon: <FaPython className="text-4xl text-yellow-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-blue-400" /> },
    { name: "React Native/Expo", icon: <FaReact className="text-4xl text-blue-500" /> }
  ];
const handleDownloadCV = (language: string) => {
  const cvUrl = language === "english" 
    ? "../assets/CvInglese.pdf"
    : "../assets/CvItaliano.pdf";
  
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = cvUrl.split('/').pop() || 'CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  return (
    <div className="bg-[#f3f4f6] min-h-screen font-inter">
      {/* Navbar */}
      <nav className="sticky top-0 bg-[#1f2937] z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold">Portfolio</div>
            <div className="hidden md:flex space-x-6 md:items-center">
            {["home", "about", "portfolio", "services", "testimonials", "contact"].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-white hover:text-[#3b82f6] cursor-pointer transition-colors"
                >
                 {t(item)}
                </Link>
              ))}
                 <div className="relative">
                <button 
                  onClick={() => setShowCVOptions(!showCVOptions)}
                  className="inline-flex items-center justify-center px-4 py-2 text-white bg-[#3b82f6] rounded-md hover:bg-blue-600 transition-colors"
                >
                  Download CV
                  <IoMdArrowDropdown className="ml-2 -mr-1 h-5 w-5" />
                </button>
                {showCVOptions && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <button
                        onClick={() => {
                          handleDownloadCV("english");
                          setShowCVOptions(false);
                        }}
                        className="w-full px-4 py-2 text-sm text-gray-900 hover:bg-[#3b82f6] hover:text-white transition-colors text-left"
                      >
                        English CV
                      </button>
                      <button
                        onClick={() => {
                          handleDownloadCV("italian");
                          setShowCVOptions(false);
                        }}
                        className="w-full px-4 py-2 text-sm text-gray-900 hover:bg-[#3b82f6] hover:text-white transition-colors text-left"
                      >
                        Italian CV
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4"
              >
                <div className="flex flex-col space-y-4">
                {["home", "about", "portfolio", "services", "contact"].map((item) => (
                    <Link
                      key={item}
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="text-white hover:text-[#3b82f6] cursor-pointer transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                     {t(item)}
                    </Link>
                  ))}
                    <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => handleDownloadCV("english")}
                      className="text-white hover:text-[#3b82f6] cursor-pointer transition-colors text-left"
                    >
                      Download English CV
                    </button>
                    <button
                      onClick={() => handleDownloadCV("italian")}
                      className="text-white hover:text-[#3b82f6] cursor-pointer transition-colors text-left"
                    >
                      Download Italian CV
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="min-h-screen relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen bg-gradient-to-r from-transparent to-transparent">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <motion.h1 
              className="text-6xl font-bold text-white mb-6 shadow-text"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Vincenzo Busalacchi
            </motion.h1>
            <p className="text-2xl text-white mb-8 shadow-text">Full Stack Developer & UI/UX Designer</p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="bg-[#3b82f6] text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer inline-block shadow-lg text-lg"
              >
                 {t("view my work")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <div className="bg-[#f3f4f6] min-h-screen font-inter">
      <section id="about" className="py-20 bg-[#f3f4f6]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-center text-[#1f2937] mb-12"> {t("about me")}</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-[#4b5563] mb-6">
              {t("description")}
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-[#1f2937]"> {t("skills")}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col items-center justify-center p-2"
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill.icon}
                        <span className="text-sm mt-2 text-[#4b5563]">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-[#1f2937]">
                    <span className="flex items-center gap-2">
                      <FaBriefcase className="text-2xl text-amber-500" />
                      {t("experience")}
                    </span>
                  </h3>
                  <ul className="space-y-2 text-[#4b5563]">
                    <li className="flex items-center gap-2">
                      <FaBriefcase className="text-lg text-amber-500" />
                      Junior Front-End Developer at StdoutSrl (2023-2024)
                    </li>
                    <li className="flex items-center gap-2">
                      <FaBriefcase className="text-lg text-amber-500" />
                      Full Stack Developer at Mister Fish (2024-present)
                    </li>
                
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#1f2937] mb-12"> {t("my projects")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.05 }}
                className="bg-[#f3f4f6] rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => window.open(`https://${project.link}`, "_blank")}
              >
                <img
                  src={`${project.image}`}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1f2937]">{project.title}</h3>
                  <p className="text-[#4b5563] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#3b82f6] text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-[#1f2937]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12"> {t("services")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 shadow-lg text-center"
              >
                {service.icon}
                <h3 className="text-xl font-bold mb-4 text-[#1f2937]">{service.title}</h3>
                <p className="text-[#4b5563]">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>

      {/* Testimonials */}
      {/* <section id="testimonials" className="py-20 bg-[#f3f4f6]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#1f2937] mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={`https://${testimonial.image}`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-[#1f2937]">{testimonial.name}</h3>
                    <p className="text-[#9ca3af]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-[#4b5563]">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-b from-[#1f2937] to-[#111827]">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center text-white mb-12"
          >
            {t("contact me")}
          </motion.h2>
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent transition-all duration-300"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent transition-all duration-300"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </motion.div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white py-3 rounded-lg font-semibold shadow-lg hover:from-[#2563eb] hover:to-[#3b82f6] transition-all duration-300 transform hover:-translate-y-1"
              >
                {t("send message")}
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white mb-4 md:mb-0">© 2024 Vincenzo Busalacchi. All rights reserved.</p>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href="https://github.com/vincibusa" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-[#3b82f6] transition-colors"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a 
              
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/vincenzo-busalacchi-6936b6221/" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-[#3b82f6] transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href="#" 
                className="text-white hover:text-[#3b82f6] transition-colors"
              >
                <FaTwitter size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;