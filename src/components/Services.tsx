import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import {  FaFigma, FaMobile, FaCode } from "react-icons/fa";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  gradient: string;
  iconBg: string;
}

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services: Service[] = [
    {
      id: 1,
      title: t("servicesDesc.web-development.title"),
      description: t("servicesDesc.web-development.description"),
      icon: <FaCode className="text-4xl" />,
      gradient: "from-blue-500 to-cyan-400",
      iconBg: "bg-blue-500"
    },
    {
      id: 2,
      title: t("servicesDesc.web-design.title"),
      description: t("servicesDesc.web-design.description"),
      icon: <FaFigma className="text-4xl" />,
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-500"
    },
    {
      id: 3,
      title: t("servicesDesc.mobile-cross.title"),
      description: t("servicesDesc.mobile-cross.description"),
      icon: <FaMobile className="text-4xl" />,
      gradient: "from-amber-500 to-orange-500",
      iconBg: "bg-amber-500"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            {t("services")}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Offro soluzioni digitali complete, dal design all'implementazione, con focus sulla qualità e l'esperienza utente
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group z-10"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-gradient-to-br ${service.gradient} opacity-10 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:opacity-20`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center text-white ${service.iconBg} shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 text-sm font-medium flex items-center gap-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                >
                  Scopri di più
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 