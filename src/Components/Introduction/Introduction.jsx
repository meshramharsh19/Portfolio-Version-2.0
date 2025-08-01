import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Code, Mail } from 'lucide-react';
import './Introduction_Light.css';
import './Introduction_dark.css';
import './MediaQueries.css';
import ProfileImage from "../images/Profile picture.png";
import { useTheme } from '../Themes/ThemeContext';

const PortfolioHomePage = ({ onScroll }) => {
  const { isDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const observerRef = useRef(null);

  const sections = [
    {
      icon: <User className="w-12 h-12 text-gray-800" />,
      title: 'About Me',
      content: 'Hi, I’m Harsh Meshram, a passionate Junior Developer at Cojag Smart Technology. I specialize in Full Stack MERN Development and Python Development, with a keen interest in GIS Software Development. I love creating innovative solutions that make a difference.'
    },
    {
      icon: <Briefcase className="w-12 h-12 text-gray-800" />,
      title: 'Experience',
      content: 'I have 6 months of experience as a Software Developer Intern at Cojag Smart Technologies, where I worked on GIS tools and satellite imagery reporting. Currently, I’m a Junior Software Developer at Ashmi Logistics, building logistics modules like Billing and Vehicle Tracking, and contributing to full-stack development and real-time workflow design.'
    },
    {
      icon: <Code className="w-12 h-12 text-gray-800" />,
      title: 'Skills',
      content: 'Full Stack MERN Development, Python Development, Database engineer, GIS Software Developer, UI designer and UX developer'
    },
    {
      icon: <Mail className="w-12 h-12 text-gray-800" />,
      title: 'Contact',
      content: 'Let\’s create something amazing together! Move your cursor to the Contact section.'
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
          animate={{ opacity: 1, y: 0 }}
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
                Junior Developer - Cojag Smart Technology
              </motion.p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="sections"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  backgroundColor: isDarkMode ? "rgba(26, 32, 44, 0.9)" : "rgba(255,255,255,0.9)"
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
                  {activeSection === index && (
                    <motion.p
                      className="section-content"
                      initial={{ opacity: 1, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 1, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {section.content}
                    </motion.p>
                  )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioHomePage;