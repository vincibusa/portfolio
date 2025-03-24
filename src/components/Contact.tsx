import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaUser, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            {t("contact me")}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Per collaborazioni o informazioni, non esitare a contattarmi. Sarò lieto di rispondere al più presto.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1 text-white"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                Info di Contatto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl">
                    <FaMapMarkerAlt className="text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-200 mb-1">Indirizzo</h4>
                    <p className="text-white/80">Palermo, Italia</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl">
                    <FaEnvelope className="text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-200 mb-1">Email</h4>
                    <p className="text-white/80">vincibusa@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl">
                    <FaPhoneAlt className="text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-200 mb-1">Telefono</h4>
                    <p className="text-white/80">+39 XXX XXX XXXX</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute left-4 top-4">
                      <FaUser className="text-blue-300" />
                    </div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-12 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute left-4 top-4">
                      <FaEnvelope className="text-blue-300" />
                    </div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-12 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {t("send message")}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 