import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <Link to="home" smooth={true} duration={800} className="cursor-pointer">
            <motion.div 
              className="p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-full mb-8 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowUp className="text-white text-xl" />
            </motion.div>
          </Link>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4"
          >
            Vincenzo Busalacchi
          </motion.h2>
          
          <p className="text-gray-400 text-center max-w-md mb-8">
            Realizzo progetti web e mobile con passione per il design e l'esperienza utente, trasformando idee in prodotti digitali di qualità.
          </p>
          
          <div className="flex space-x-6 mb-10">
            <motion.a 
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/vincibusa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-md rounded-full text-blue-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/vincenzo-busalacchi-6936b6221/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-md rounded-full text-blue-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="p-3 bg-white/5 backdrop-blur-md rounded-full text-blue-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              <FaTwitter size={20} />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 mb-4 md:mb-0">© 2024 Vincenzo Busalacchi. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link to="about" smooth={true} duration={500} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors text-sm">
              About
            </Link>
            <Link to="portfolio" smooth={true} duration={500} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors text-sm">
              Portfolio
            </Link>
            <Link to="services" smooth={true} duration={500} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors text-sm">
              Services
            </Link>
            <Link to="contact" smooth={true} duration={500} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 