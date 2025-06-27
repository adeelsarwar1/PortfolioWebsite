import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <div className="w-full h-96 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
    <img
      src="/images/Portfolio.jpg"
      alt="Muhammad Adeel"
      className="rounded-2xl object-cover w-full h-full"
    />
  </div>
</motion.div>

            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gradient">
                Passionate MERN Stack Developer
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                I'm a dedicated software developer currently pursuing my BSIT degree 
                (2021-2025) at Bahria University Islamabad. I specialize in building 
                scalable web applications using modern technologies like React, Node.js, 
                MongoDB, and Python.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                My passion lies in creating innovative solutions that solve real-world 
                problems. I have experience in machine learning integration, 3D rendering, 
                and building complex web applications with seamless user experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary-400">Education</h4>
                  <p className="text-sm text-gray-400">BSIT, Bahria University Islamabad</p>
                  <p className="text-sm text-gray-400">2021 - 2025</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary-400">Focus</h4>
                  <p className="text-sm text-gray-400">Full Stack Development</p>
                  <p className="text-sm text-gray-400">Machine Learning Integration</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;