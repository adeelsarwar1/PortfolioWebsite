import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink, HiCode, HiEye } from 'react-icons/hi';
import { SiReact, SiNodedotjs, SiMongodb, SiPython, SiTensorflow, SiNextdotjs } from 'react-icons/si';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'AutoModel Insight',
      description: 'A comprehensive web and mobile application that detects cars through images, fetches detailed vehicle information, and allows users to interact with dynamic 3D models. Features include ML-powered car recognition, credit-based access system, and real-time 3D rendering.',
      image: 'https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      ],
      features: [
        'Car Recognition using ML',
        'Real-time 3D Model Rendering',
        'Credit-based System',
        'Dynamic Vehicle Data Fetching',
        'User Authentication with Clerk',
        'Responsive Design'
      ],
      githubUrl: 'https://github.com/adeelsarwar1/AutoModelInsight',
      liveUrl: 'https://github.com/adeelsarwar1/AutoModelInsight',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js and MongoDB. Features include product management, shopping cart, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: [
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      ],
      features: [
        'Product Catalog',
        'Shopping Cart',
        'Payment Integration',
        'Admin Dashboard',
        'User Authentication',
        'Order Management'
      ],
      githubUrl: '#',
      liveUrl: 'https://enchanting-phoenix-7248dd.netlify.app/',
      featured: false
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.',
      image: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      ],
      features: [
        'Real-time Collaboration',
        'Project Tracking',
        'Team Management',
        'Task Scheduling',
        'Progress Analytics',
        'File Attachments'
      ],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  project.featured ? 'lg:gap-12' : ''
                } ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Project Image */}
                <motion.div
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                </motion.div>
                
                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gradient">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary-400">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2 bg-dark-700 px-3 py-2 rounded-lg"
                        >
                          <tech.icon style={{ color: tech.color }} />
                          <span className="text-sm">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary-400">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveUrl}
                      className="btn-primary flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <HiEye />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="btn-secondary flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <HiCode />
                      View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;