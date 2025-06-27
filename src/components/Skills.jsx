import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiPython, SiNextdotjs, 
  SiTailwindcss, SiJavascript, SiTensorflow, SiGit, SiDocker 
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, level: 85, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#47A248' },
    { name: 'Python', icon: SiPython, level: 85, color: '#3776AB' },
    { name: 'Next.js', icon: SiNextdotjs, level: 80, color: '#000000' },
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Project Management',
    'Communication',
    'Adaptability',
    'Critical Thinking'
  ];

  return (
    <section id="skills" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-gradient">Skills</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-primary-400">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-dark-800 p-6 rounded-xl card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <skill.icon 
                          className="text-2xl" 
                          style={{ color: skill.color }}
                        />
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + 0.1 * index }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-primary-400">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="bg-dark-800 p-4 rounded-xl text-center card-hover"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-medium text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Specializations */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-primary-400">
                  Specializations
                </h4>
                <div className="space-y-3">
                  {[
                    'Full Stack Web Development',
                    'Machine Learning Integration',
                    '3D Rendering & Visualization',
                    'API Development & Integration',
                    'Database Design & Management'
                  ].map((spec, index) => (
                    <motion.div
                      key={spec}
                      className="flex items-center gap-3 text-gray-300"
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                      <span>{spec}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;