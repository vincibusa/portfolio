import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';
import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  
  return (
    <section ref={targetRef} id="home" className="min-h-screen relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </motion.div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          className="text-center px-6 max-w-4xl"
          style={{ opacity, y }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-xl md:text-2xl font-light text-blue-300 uppercase tracking-wider mb-2">
              Full Stack Developer & UI/UX Designer
            </h2>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-10 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Vincenzo Busalacchi
            </span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Creazione di esperienze digitali straordinarie con tecnologie web moderne e design intuitivo
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="portfolio"
                smooth={true}
                duration={800}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 inline-flex items-center gap-2 font-medium text-lg"
              >
                {t("view my work")}
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={800}
                className="bg-transparent border-2 border-white/30 text-white px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 inline-block font-medium text-lg"
              >
                Contattami
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <Link to="about" smooth={true} duration={800} className="cursor-pointer">
            <FaArrowDown className="text-white text-2xl animate-pulse" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 