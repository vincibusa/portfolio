import { useState, } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showCVOptions, setShowCVOptions] = useState(false);




  const handleDownloadCV = (language: string) => {
    const cvUrl = language === "english" 
      ? "/CvInglese.pdf"
      : "/CvItaliano.pdf";
    
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = cvUrl.split('/').pop() || 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav 
      className="sticky top-0 z-50 bg-[#1f2937]/90 backdrop-blur-md shadow-lg transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-white text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.div>
          <div className="hidden md:flex space-x-6 md:items-center">
            {["home", "about", "portfolio", "services", "testimonials", "contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-white hover:text-[#3b82f6] cursor-pointer transition-colors relative group"
                >
                  {t(item)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button 
                onClick={() => setShowCVOptions(!showCVOptions)}
                className="inline-flex items-center justify-center px-5 py-2.5 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
              >
                Download CV
                <IoMdArrowDropdown className="ml-2 -mr-1 h-5 w-5" />
              </motion.button>
              <AnimatePresence>
                {showCVOptions && (
                  <motion.div 
                    className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-lg shadow-xl ring-1 ring-black/5 overflow-hidden"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-1">
                      <motion.button
                        onClick={() => {
                          handleDownloadCV("english");
                          setShowCVOptions(false);
                        }}
                        className="w-full px-4 py-3 text-sm text-white hover:bg-white/20 transition-colors text-left"
                        whileHover={{ x: 5 }}
                      >
                        English CV
                      </motion.button>
                      <motion.button
                        onClick={() => {
                          handleDownloadCV("italian");
                          setShowCVOptions(false);
                        }}
                        className="w-full px-4 py-3 text-sm text-white hover:bg-white/20 transition-colors text-left"
                        whileHover={{ x: 5 }}
                      >
                        Italian CV
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          <motion.button
            className="md:hidden text-white text-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            ☰
          </motion.button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-[#1f2937]/90 backdrop-blur-md rounded-xl p-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-4">
                {["home", "about", "portfolio", "services", "contact"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="text-white hover:text-[#3b82f6] cursor-pointer transition-colors block py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {t(item)}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex flex-col space-y-2 pt-2 border-t border-white/10">
                  <motion.button
                    onClick={() => handleDownloadCV("english")}
                    className="text-white hover:text-[#3b82f6] cursor-pointer transition-colors text-left py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Download English CV
                  </motion.button>
                  <motion.button
                    onClick={() => handleDownloadCV("italian")}
                    className="text-white hover:text-[#3b82f6] cursor-pointer transition-colors text-left py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Download Italian CV
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 