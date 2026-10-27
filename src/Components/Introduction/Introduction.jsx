import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Code, Mail } from 'lucide-react';
import './Introduction_Light.css';
import './Introduction_dark.css';
import './MediaQueries.css';
import ProfileImage from "../images/Profile picture.webp";
import { useTheme } from '../Themes/ThemeContext';

const PortfolioHomePage = ({ onScroll }) => {
  const { isDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const observerRef = useRef(null);

  const sections = [
    {
      icon: <User className="w-8 h-8" />,
      title: 'About Me',
      preview: 'Full Stack & GIS Developer',
      content: 'Hi, I’m Harsh Meshram, a Software Engineer at Cojag Smart Technology. I specialize in React.js frontends, Node.js/PHP backends, and real-time systems, with a strong focus on GIS software development. I love turning complex problems into fast, reliable products.'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Experience',
      preview: '~2 years, production systems',
      content: 'I\'m a Junior Software Engineer at Cojag Smart Technology, where I built an emergency-dispatch engine (45x faster), a WebSocket alert system (250x improvement for 200+ concurrent users), and led frontend architecture for a GIS 3D visualization suite used by a 9-member team.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Skills',
      preview: 'React, Node.js, Python, GIS',
      content: 'React.js, Node.js, Express.js, Python, PHP, MySQL, MongoDB, WebSocket, Leaflet.js, CesiumJS, AWS, Docker — building full-stack products end-to-end, from database design to 3D geospatial visualization.'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Contact',
      preview: 'Let\'s build something together',
      content: 'Open to new opportunities and collaborations. Reach out at meshram.harsh05@gmail.com, or scroll down to the Contact section to send a message directly.'
    }
  ];

  // Reset activeSection when theme changes
  useEffect(() => {
    setActiveSection(null); // Reset active section
  }, [isDarkMode]); // Trigger when isDarkMode changes

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onScroll();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observerRef.current = observer;

    const target = document.querySelector('.portfolio-home-page');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [onScroll]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`${isDarkMode ? 'dark:bg-gray-900' : 'bg-white'}`}>
      <div id='home' className="portfolio-home-page">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="portfolio-card"
        >
          <div className="content">
            <motion.div
              className="image-container"
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: isImageLoaded ? 1 : 0,
                rotate: 0
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.5
              }}
            >
              <motion.img
                src={ProfileImage}
                alt="Profile"
                className="profile-image"
                onLoad={() => setIsImageLoaded(true)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,0,0,0.2)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>

            <div className="text-content">
              <motion.h1
                className="name"
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                Harsh Meshram
              </motion.h1>
              <motion.p
                className="title"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Software Engineer - Cojag Smart Technology
              </motion.p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="sections"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveSection(activeSection === index ? null : index)}
                className={`section ${activeSection === index ? 'active' : ''}`}
              >
                <motion.div
                  className="icon-container"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {section.icon}
                </motion.div>
                <h2 className="section-title">{section.title}</h2>
                <p className="section-preview">{section.preview}</p>
                <AnimatePresence>
                  {activeSection === index && (
                    <motion.p
                      className="section-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {section.content}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioHomePage;