import { motion } from "framer-motion";
import { FaReact, FaAngular, FaNodeJs, FaPython, FaBriefcase, } from "react-icons/fa";
import { SiMongodb, SiPostgresql } from "react-icons/si";
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  const skills = [
    { name: "React", icon: <FaReact className="text-4xl text-blue-500" /> },
    { name: "Angular", icon: <FaAngular className="text-4xl text-red-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" /> },
    { name: "Python", icon: <FaPython className="text-4xl text-yellow-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-blue-400" /> },
    { name: "React Native/Expo", icon: <FaReact className="text-4xl text-blue-500" /> }
  ];

  const experiences = [
    {
      company: "StdoutSrl",
      role: "Junior Front-End Developer",
      period: "2023-2024"
    },
    {
      company: "Mister Fish",
      role: "Full Stack Developer",
      period: "2024-2024"
    },
    {
      company: "Catanzaro & Partners",
      role: "Full Stack Developer",
      period: "2025-present"
    }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#f3f4f6] to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              {t("about me")}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t("description")}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10 mt-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600 relative z-10">
                {t("skills")}
              </h3>
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-6 relative z-10"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-br from-blue-50 to-purple-50 transform hover:-translate-y-1 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.icon}
                    <span className="text-sm font-medium mt-3 text-gray-700">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-amber-100 to-red-100 rounded-full opacity-50 blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-6 text-amber-500 flex items-center gap-2 relative z-10">
                <FaBriefcase className="text-2xl" />
                {t("experience")}
              </h3>
              <motion.ul 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6 relative z-10"
              >
                {experiences.map((exp, index) => (
                  <motion.li 
                    key={index}
                    variants={item}
                    className="bg-gray-50 p-5 rounded-xl border-l-4 border-amber-400 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <FaBriefcase className="text-xl text-amber-500 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800">{exp.role}</h4>
                        <p className="text-gray-700">{exp.company}</p>
                        <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 