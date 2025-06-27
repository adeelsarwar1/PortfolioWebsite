import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 border-t border-dark-700 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="text-center md:text-left mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400">
              © 2024 Muhammad Adeel. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Built with React, Tailwind CSS & Framer Motion
            </p>
          </motion.div>
          
          <motion.button
            onClick={scrollToTop}
            className="text-primary-500 hover:text-primary-400 transition-colors duration-300 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;