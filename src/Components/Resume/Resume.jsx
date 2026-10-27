import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, Github, Linkedin, Download, Briefcase,
  GraduationCap, Award, Code, Terminal, Cpu, FileCode,
  Braces, Database, Coffee, Globe, Layers, Server,
  Layout, Palette, Wind, Box, GitBranch, Monitor,
  Figma, Wrench, HardDrive, Table, ChevronDown, ExternalLink
} from 'lucide-react';
import './Resume_Light.css';
import './Resume_dark.css';
import './MediaQueries.css';
import { useTheme } from '../Themes/ThemeContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" }
  })
};

const experiences = [
  {
    title: "Junior Software Engineer",
    company: "Cojag Smart Technology Pvt. Ltd.",
    companyUrl: "https://cojag.in/",
    location: "Nagpur",
    duration: "Jul 2025 - Present",
    roles: [
      {
        subtitle: "Firefighter Emergency Response Platform (React.js + PHP/Node.js backend, 200+ concurrent users)",
        bullets: [
          "Rebuilt nearest-vehicle dispatch engine with Geohash spatial indexing over live positions; Mappls routing API executes only on nearby candidates instead of all vehicles, reducing latency from ~3 minutes to 3-4 seconds (45x faster).",
          "Replaced 5-second database polling for incident alerts with WebSocket push architecture, reducing alert latency from 5,000ms to ~20ms (250x improvement), enabling real-time notification without performance degradation.",
          "Optimized Dijkstra-based routing algorithm for drone and fire-vehicle navigation from 20-30 second computation to under 5 seconds through indexed graph queries, improving route calculation efficiency by 85%.",
          "Built live drone video-feed module (React.js frontend + PHP REST APIs) streaming 6 concurrent 720p feeds simultaneously for real-time visual incident assessment.",
          "Engineered a role-based access control (RBAC) system from scratch with 3 authorization tiers (admin, operator, viewer) and per-tenant session isolation.",
          "Designed and optimized a MySQL schema supporting real-time ingestion of ~5,000 telemetry and incident records per minute, reducing data retrieval latency from 2 seconds to 150ms (13x faster), and built a production-grade activity logging microservice tracking 100K+ daily events.",
        ]
      },
      {
        subtitle: "GIS Application & 3D Visualization — led a 9-member team building a geospatial suite with multi-format KML/KMZ/TIF support; drove frontend architecture.",
        bullets: [
          "Extended the GIS Viewer with 3D visualization (CesiumJS integration) for KML, KMZ, .glb and .tif files, supporting layer management for 50,000+ geographic features with zero page reload — eliminating the need for desktop GIS software.",
          "Delivered a GIS 3D visualization pipeline converting drone survey data into navigable terrain models in ~20 second render time (vs. 45+ seconds in the legacy system), with optimized WebGL performance for smooth interaction on 4GB RAM devices.",
          "Shipped a weather module with click-anywhere map lookup and real-time weather data, serving 500+ daily weather queries with under 1 second response latency.",
        ]
      }
    ],
    tech: "React.js, PHP, Node.js, MySQL, WebSocket, Leaflet.js, CesiumJS, AWS EC2, Docker, Git"
  },
  {
    title: "Software Engineer Intern",
    company: "Cojag Smart Technology Pvt. Ltd.",
    companyUrl: "https://cojag.in/",
    location: "Nagpur",
    duration: "Dec 2024 - Jun 2025",
    roles: [
      {
        bullets: [
          "Built a GIS File Viewer Tool supporting .kml, .kmz, .tif and standard GIS raster/vector formats, eliminating the need for third-party format conversion tools.",
          "Optimized multi-format zoom rendering: KMZ archives with intelligent zoom level logic (0-22 scale) achieve crisp detail at zoom 15+ while maintaining 60 FPS at lower levels; TIF raster imagery calculates per-zoom pixel density for efficient rendering of 2GB+ satellite files.",
          "Engineered a multi-format zoom-aware renderer that intelligently switches between vector layer zoom (KML) and raster tile zoom (TIF), reducing memory footprint by 40% and improving load time from 8 seconds to 2.5 seconds (68% faster).",
        ]
      }
    ],
    tech: "React.js (JavaScript), Python, Leaflet.js, CesiumJS, MongoDB, Docker, Git"
  },
  {
    title: "Web Development Intern",
    company: "MotionCuts",
    companyUrl: "https://motioncut.in/",
    location: "",
    duration: "Dec 2023 - Jan 2024",
    roles: [
      {
        bullets: [
          "Developed user-friendly login page with authentication functionality.",
          "Designed with a user-centric approach for intuitive experience.",
        ]
      }
    ]
  }
];

const education = [
  {
    title: "Bachelor of Technology (BTech)",
    details: "Information Technology Engineering",
    institution: "JD College Of Engineering And Management, Nagpur",
    institutionUrl: "https://www.jdcoem.ac.in/",
    university: "Dr. Babasaheb Ambedkar Technological University (DBATU)",
    universityUrl: "https://dbatu.ac.in/",
    duration: "2020 - 2025",
    score: "CGPA: 8.45"
  },
  {
    title: "12th Maharashtra State Board",
    institution: "SFS College Seminary Hills, Nagpur",
    duration: "2020",
    score: "86.4%"
  }
];

const skillGroups = [
  {
    title: "Languages",
    skills: ['JavaScript (ES6+)', 'Python', 'PHP', 'SQL'],
    icons: [<Terminal className="w-5 h-5" />, <FileCode className="w-4 h-4" />, <Cpu className="w-4 h-4" />, <Database className="w-4 h-4" />]
  },
  {
    title: "Frontend",
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Leaflet.js', 'Responsive UI'],
    icons: [<Globe className="w-5 h-5" />, <Layout className="w-4 h-4" />, <Palette className="w-4 h-4" />, <Wind className="w-4 h-4" />, <Box className="w-4 h-4" />, <Monitor className="w-4 h-4" />, <Layers className="w-4 h-4" />]
  },
  {
    title: "Backend",
    skills: ['Node.js', 'Express.js', 'PHP', 'REST API Design', 'WebSocket', 'Microservices', 'OAuth 2.0', 'RBAC', 'Geohash Indexing', 'Mappls API'],
    icons: [<Server className="w-5 h-5" />, <Braces className="w-4 h-4" />, <Code className="w-4 h-4" />, <Code className="w-4 h-4" />, <Code className="w-4 h-4" />, <Layers className="w-4 h-4" />, <Code className="w-4 h-4" />, <Code className="w-4 h-4" />, <Code className="w-4 h-4" />, <Code className="w-4 h-4" />]
  },
  {
    title: "Databases",
    skills: ['MySQL', 'MongoDB', 'Schema Design', 'Indexing', 'Query Optimization'],
    icons: [<HardDrive className="w-5 h-5" />, <Table className="w-4 h-4" />, <Database className="w-4 h-4" />, <Code className="w-4 h-4" />, <Code className="w-4 h-4" />]
  },
  {
    title: "Cloud & DevOps",
    skills: ['AWS (EC2)', 'Docker', 'CI/CD', 'Git', 'GitHub', 'Postman', 'Linux'],
    icons: [<GitBranch className="w-5 h-5" />, <Box className="w-4 h-4" />, <Code className="w-4 h-4" />, <GitBranch className="w-4 h-4" />, <Monitor className="w-4 h-4" />, <Wrench className="w-4 h-4" />, <Terminal className="w-4 h-4" />]
  },
  {
    title: "Practices",
    skills: ['Code Reviews', 'Performance Optimization', 'Debugging', 'Technical Documentation'],
    icons: [<Wrench className="w-5 h-5" />, <Code className="w-4 h-4" />, <Cpu className="w-4 h-4" />, <FileCode className="w-4 h-4" />]
  }
];

const achievements = [
  "Generative AI Fundamentals — Google",
  "Programming for Everybody (Python) — Coursera",
  "Figma UI/UX Design Essentials",
  "HackerRank 5-Star Badge in Python",
  "Led a 9-member team building a production GIS 3D visualization suite",
  "Strong ability to convey ideas and collaborate effectively within teams",
];

const SkillCategory = ({ title, skills, icons, index }) => (
  <motion.div
    className="skill-item"
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <h3 className="skill-title flex items-center gap-2">
      {icons[0]}
      {title}
    </h3>
    <div className="skill-tags">
      {skills.map((skill, index) => (
        <span key={skill} className="skill-tag flex items-center gap-2">
          {icons[index + 1] || <Code className="w-4 h-4" />}
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const VISIBLE_BULLETS = 3;

const RoleBullets = ({ bullets }) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = bullets.length > VISIBLE_BULLETS;
  const visibleBullets = expanded ? bullets : bullets.slice(0, VISIBLE_BULLETS);

  return (
    <>
      <ul className="experience-description">
        {visibleBullets.map((b, bi) => <li key={bi}>{b}</li>)}
      </ul>
      {hasMore && (
        <button className="show-more-button" onClick={() => setExpanded((v) => !v)}>
          {expanded ? 'Show less' : `Show ${bullets.length - VISIBLE_BULLETS} more`}
          <ChevronDown className={`show-more-icon ${expanded ? 'rotated' : ''}`} />
        </button>
      )}
    </>
  );
};

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    className="timeline-item"
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
  >
    <div className="timeline-marker" />
    <div className="experience-header">
      <div>
        <h3 className="experience-title">{exp.title}</h3>
        <p className="experience-company">
          {exp.companyUrl ? (
            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="entity-link">
              {exp.company} <ExternalLink className="entity-link-icon" />
            </a>
          ) : exp.company}
          {exp.location && ` · ${exp.location}`}
        </p>
      </div>
      <span className="experience-duration">{exp.duration}</span>
    </div>

    {exp.roles.map((role, ri) => (
      <div key={ri}>
        {role.subtitle && <p className="experience-subtitle">{role.subtitle}</p>}
        <RoleBullets bullets={role.bullets} />
      </div>
    ))}

    {exp.tech && <p className="experience-tech">Tech: {exp.tech}</p>}
  </motion.div>
);

const ResumePage = () => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('experience');

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`tab-button ${activeTab === id ? 'active' : ''}`}
    >
      <Icon className="tab-icon" />
      {label}
    </button>
  );

  return (
    <div className={`${isDarkMode ? 'dark:bg-gray-900' : 'bg-white'}`}>
      <div id='resume' className="resume-page">
        {/* Hero Section */}
        <motion.div
          className="hero-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="hero-content">
            <h1 className="hero-title">Software Engineer</h1>
            <p className="hero-description">
              Full Stack Developer with ~2 years shipping production web applications end-to-end.
              Specialized in React.js frontends, Node.js/PHP backends, and real-time systems — built an
              emergency-dispatch engine (45x faster), a WebSocket alert system (250x improvement for
              200+ concurrent users), and a GIS 3D visualization suite.
            </p>

            <div className="contact-links">
              <a href="mailto:meshram.harsh05@gmail.com" className="contact-link">
                <Mail className="contact-icon" />
                meshram.harsh05@gmail.com
              </a>
              <a href="tel:+919130259099" className="contact-link">
                <Phone className="contact-icon" />
                (+91) 9130259099
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/meshramharsh19"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
              >
                <Github className="social-icon" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-meshram-5b8271258/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <Linkedin className="social-icon" />
                LinkedIn
              </a>
              <a
                href="https://drive.google.com/file/d/1AI7Wk5TLEQy1LpfOTvHZvmyWsxa3DRbg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="download-button"
              >
                <Download className="download-icon" />
                Download CV
              </a>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="main-content">
          {/* Navigation Tabs */}
          <motion.div
            className="navigation-tabs"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <TabButton id="experience" label="Experience" icon={Briefcase} />
            <TabButton id="education" label="Education" icon={GraduationCap} />
            <TabButton id="skills" label="Skills" icon={Code} />
            <TabButton id="achievements" label="Achievements" icon={Award} />
          </motion.div>

          {/* Content Sections */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="content-section"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {activeTab === 'experience' && (
                <div className="experience-section">
                  <h2 className="section-title-resume">Professional Experience</h2>
                  <div className="timeline">
                    {experiences.map((exp, i) => (
                      <ExperienceCard key={exp.title + exp.duration} exp={exp} index={i} />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="education-section">
                  <h2 className="section-title-resume">Education</h2>
                  <div className="timeline">
                    {education.map((edu, i) => (
                      <motion.div
                        key={edu.title}
                        className="timeline-item"
                        custom={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <div className="timeline-marker" />
                        <div className="education-header">
                          <div>
                            <h3 className="education-title">{edu.title}</h3>
                            {edu.details && <p className="education-details">{edu.details}</p>}
                            <p className="education-institution">
                              {edu.institutionUrl ? (
                                <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="entity-link">
                                  {edu.institution} <ExternalLink className="entity-link-icon" />
                                </a>
                              ) : edu.institution}
                            </p>
                            {edu.university && (
                              <p className="education-university">
                                <a href={edu.universityUrl} target="_blank" rel="noopener noreferrer" className="entity-link">
                                  {edu.university} <ExternalLink className="entity-link-icon" />
                                </a>
                              </p>
                            )}
                          </div>
                          <div className="education-duration">
                            <p className="duration">{edu.duration}</p>
                            <p className="cgpa">{edu.score}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="skills-section">
                  <h2 className="section-title-resume">Technical Skills</h2>
                  <div className="skills-grid">
                    {skillGroups.map((group, i) => (
                      <SkillCategory key={group.title} title={group.title} skills={group.skills} icons={group.icons} index={i} />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="achievements-section">
                  <h2 className="section-title-resume">Achievements & Soft Skills</h2>
                  <div className="achievements-list">
                    <ul className="achievements-description">
                      {achievements.map((a, i) => (
                        <motion.li
                          key={a}
                          className="achievement-item"
                          custom={i}
                          variants={fadeUp}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                        >
                          <Award className="achievement-icon" />
                          {a}
                        </motion.li>
                      ))}
                      <li className="achievement-item">
                        <button
                          className='Certifications'
                          onClick={() => window.open('https://drive.google.com/drive/folders/1GEofBkkhsQ_qW-QjzJH47qV_pF79S_3f?usp=sharing', '_blank')}
                        >
                          View Certifications
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
