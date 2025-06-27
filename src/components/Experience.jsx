import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiBriefcase, HiCode } from 'react-icons/hi';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      type: 'education',
      title: 'Bachelor of Science in Information Technology',
      company: 'Bahria University Islamabad',
      period: '2021 - 2025',
      description: 'Pursuing BSIT with focus on software development, web technologies, and computer science fundamentals. Maintained strong academic performance while working on practical projects.',
      icon: HiAcademicCap,
      color: 'bg-blue-500'
    },
    {
      type: 'project',
      title: 'Final Year Project - AutoModel Insight',
      company: 'Academic Project',
      period: '2024 - Present',
      description: 'Developed a comprehensive web and mobile application featuring car detection through ML, 3D model rendering, and dynamic data fetching. Integrated TensorFlow for image recognition and implemented credit-based user system.',
      icon: HiCode,
      color: 'bg-green-500'
    },
    {
      type: 'freelance',
      title: 'Full Stack Developer',
      company: 'Freelance Projects',
      period: '2023 - Present',
      description: 'Worked on various client projects including e-commerce platforms, task management systems, and portfolio websites. Gained experience in client communication and project delivery.',
      icon: HiBriefcase,
      color: 'bg-purple-500'
    },
    {
      type: 'learning',
      title: 'Self-Directed Learning',
      company: 'Personal Development',
      period: '2021 - Present',
      description: 'Continuously learning new technologies and frameworks. Completed various online courses in MERN stack development, machine learning, and modern web development practices.',
      icon: HiAcademicCap,
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-gradient">Journey</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-700"></div>
              
              {/* Experience Items */}
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start gap-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 p-3 rounded-full ${exp.color} shadow-lg`}>
                      <exp.icon className="text-white text-xl" />
                    </div>
                    
                    {/* Content */}
                    <motion.div
                      className="flex-1 bg-dark-800 p-6 rounded-xl shadow-lg card-hover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <span className="text-primary-400 font-medium text-sm">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-primary-300 font-semibold mb-3">
                        {exp.company}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills Gained */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-400">
              Skills Gained Through Experience
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Full Stack Development',
                'Project Management',
                'Client Communication',
                'Problem Solving',
                'Team Collaboration',
                'Code Review',
                'Testing & Debugging',
                'Database Design',
                'API Development',
                'UI/UX Design'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="bg-dark-700 text-gray-300 px-4 py-2 rounded-full text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: '#3b82f6', color: 'white' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;