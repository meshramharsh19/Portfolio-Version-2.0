import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Plus, X, Users, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import './Project_Light.css';
import './MediaQueries.css'
import { useTheme } from '../Themes/ThemeContext';

// import images
import ISE from "./Images/img-search-engine.webp";
import ISE2 from "./Images/img-search-engine2.webp";
import ISE3 from "./Images/img-search-engine3.webp";
import ISE4 from "./Images/img-search-engine4.webp";

import NewsApp from "./Images/newsapp.webp";
import TextSpeech from "./Images/Text-to-Speak.webp";
import TextEditor from "./Images/TextUtils.webp";

import Edicity from "./Images/pragyan-forum.webp";
import Edicity2 from "./Images/pragyan-forum2.webp";
import Edicity3 from "./Images/pragyan-forum3.webp";
import Edicity4 from "./Images/pragyan-forum4.webp";
import Edicity5 from "./Images/pragyan-forum5.webp";
import Edicity6 from "./Images/pragyan-forum6.webp";

import PhotoEditor from "./Images/photo-editor.webp";
import Weather from "./Images/weather app.webp";
import EyeOJobs from "./Images/eyeojobs.webp";

// import videos
import ImageSearchEngineVideo from './Videos/ImageSearchEngine.mp4'
import TextSpeechVideo from './Videos/Text-To-Speech.mp4'
import TextUtilsVideo from './Videos/TextUtils.mp4'
import EdicityVideo from './Videos/Pragyan.mp4'
import WeatherVideo from "./Videos/Weather.mp4";

const projects = [
  {
    title: "EyeOJobs",
    year: "2025",
    category: "Full Stack Development",
    description: "EyeOJobs: An AI-powered job application tracker that syncs your Gmail via OAuth 2.0 and auto-classifies job-application emails at ~97% accuracy, surfacing every application's company, role, applied date and status on a React.js dashboard. Live now on eyeojob.in.",
    media: [
      { type: 'image', src: EyeOJobs }
    ],
    technologies: ["React", "Node.js", "Gmail API", "OAuth 2.0", "Docker"],
    team: "Solo Developer",
    links: {
      live: "https://eyeojob.in/login",
      github: "https://github.com/meshramharsh19/eyeOjob",
    }
  },
  {
    title: "Text to Speech",
    year: "2023",
    category: "Web Technologies",
    description: "Text-to-Speech: Converts written text into natural-sounding speech, enhancing accessibility and user interaction across various applications and devices.",
    media: [
      { type: 'image', src: TextSpeech },
      { type: 'video', src: TextSpeechVideo }
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind", "API"],
    team: "Lead Developer",
    links: {
      live: "https://texttospeakprompt.netlify.app/",
      github: "https://github.com/meshramharsh19/Text-to-Speak",
    }
  },
  {
    title: "TextUtils",
    year: "2024",
    category: "Web Development",
    description: "TextUtils: A versatile text manipulation tool in React, offering essential features like formatting, analysis, and efficient editing capabilities.",
    media: [
      { type: 'image', src: TextEditor },
      { type: 'video', src: TextUtilsVideo }
    ],
    technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap"],
    team: "Lead Developer",
    links: {
      live: "https://textutils-harsh.netlify.app/",
      github: "https://github.com/meshramharsh19/TextUtils",
    }
  },
  {
    title: "Edusity",
    year: "2024",
    category: "Web Development",
    description: "Educity is a modern and responsive front-end prototype for a college and school website. Designed with clean aesthetics and user-friendly navigation.",
    media: [
      { type: 'image', src: Edicity },
      { type: 'image', src: Edicity2 },
      { type: 'image', src: Edicity3 },
      { type: 'image', src: Edicity4 },
      { type: 'image', src: Edicity5 },
      { type: 'image', src: Edicity6 },
      { type: 'video', src: EdicityVideo }
    ],
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    team: "Lead Developer",
    links: {
      live: "https://educitycollege.netlify.app/",
      github: "https://github.com/meshramharsh19/Edusity",
    }
  },
  {
    title: "Image Search Engine",
    year: "2023",
    category: "Web Development",
    description: "Image Search Engine: Explore vast collections with AI-powered precision, finding visuals quickly for creative projects and information retrieval",
    media: [
      { type: 'image', src: ISE },
      { type: 'image', src: ISE2 },
      { type: 'image', src: ISE3 },
      { type: 'image', src: ISE4 },
      { type: 'video', src: ImageSearchEngineVideo }
    ],
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    team: "Lead Developer",
    links: {
      live: "https://searcimage.netlify.app/",
      github: "https://github.com/meshramharsh19/Image-Search-Engine",
    }
  },
  {
    title: "News Monkey",
    year: "2023",
    category: "Web Technologies",
    description: "News Monkey: Your go-to app for breaking news, in-depth stories, and personalized updates, delivered instantly and reliably.",
    media: [
      { type: 'image', src: NewsApp }
    ],
    technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap"],
    team: "Lead Developer",
    links: {
      live: "#",
      github: "https://github.com/meshramharsh19/News.Monkey",
    }
  },
  {
    title: "Photo Editor",
    year: "2024",
    category: "Web Development",
    description: "Image Editor is a fully functional tool designed to elevate your photo editing experience. With features like cropping, resizing, filters, and more.",
    media: [
      { type: 'image', src: PhotoEditor }
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    team: "Lead Developer",
    links: {
      live: "https://imagewillimaging.netlify.app/",
      github: "https://github.com/meshramharsh19/Image_editor",
    }
  },
  {
    title: "Check Weather Condition",
    year: "2022",
    category: "Web Development",
    description: "Weather App: Real-time forecasts with intuitive UI, providing accurate weather updates for planning activities with ease and reliability.",
    media: [
      { type: 'image', src: Weather },
      { type: 'video', src: WeatherVideo }
    ],
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    team: "Lead Developer",
    links: {
      live: "https://howstheweathers.netlify.app/",
      github: "https://github.com/meshramharsh19/Weather-App",
    }
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }
  })
};

const ProjectCard = ({ project, index, onOpen }) => (
  <motion.div
    className="project-card"
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ y: -8 }}
    onClick={() => onOpen(index)}
  >
    <div className="project-card-media">
      {project.media[0].type === 'image' ? (
        <img src={project.media[0].src} alt={project.title} loading="lazy" decoding="async" />
      ) : (
        <video src={project.media[0].src} muted preload="none" />
      )}
      <div className="project-card-overlay">
        <span className="project-card-cta">
          <Plus className="w-5 h-5" /> View Details
        </span>
      </div>
      <span className="project-card-year">{project.year}</span>
    </div>
    <div className="project-card-body">
      <div className="project-card-heading">
        <h3 className="project-card-title">{project.title}</h3>
        <span className="project-card-category">{project.category}</span>
      </div>
      <div className="project-card-tags">
        {project.technologies.slice(0, 4).map((tech) => (
          <span key={tech} className="project-card-tag">{tech}</span>
        ))}
        {project.technologies.length > 4 && (
          <span className="project-card-tag project-card-tag-more">+{project.technologies.length - 4}</span>
        )}
      </div>
      <div className="project-card-links" onClick={(e) => e.stopPropagation()}>
        <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label="Live project">
          <ExternalLink className="w-4 h-4" />
        </a>
        <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="Source code">
          <Github className="w-4 h-4" />
        </a>
      </div>
    </div>
  </motion.div>
);

const ExpandableText = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const pRef = React.useRef(null);

  useEffect(() => {
    const el = pRef.current;
    if (el) {
      setIsClamped(el.scrollHeight > el.clientHeight + 1);
    }
  }, [text]);

  return (
    <div>
      <p ref={pRef} className={`project-description ${expanded ? '' : 'clamped'}`}>
        {text}
      </p>
      {(isClamped || expanded) && (
        <button className="show-more-button" onClick={() => setExpanded((v) => !v)}>
          {expanded ? 'Show less' : 'Show more'}
          <ChevronDown className={`show-more-icon ${expanded ? 'rotated' : ''}`} />
        </button>
      )}
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const [activeMedia, setActiveMedia] = useState(0);

  useEffect(() => {
    setActiveMedia(0);
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  const media = project.media;
  const current = media[activeMedia];

  const nextMedia = (e) => {
    e.stopPropagation();
    setActiveMedia((i) => (i + 1) % media.length);
  };
  const prevMedia = (e) => {
    e.stopPropagation();
    setActiveMedia((i) => (i - 1 + media.length) % media.length);
  };

  return (
    <motion.div
      className="project-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="project-modal"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-button" onClick={onClose} aria-label="Close">
          <X className="w-6 h-6" />
        </button>

        <div className="project-modal-media">
          {current.type === 'image' ? (
            <img src={current.src} alt={project.title} />
          ) : (
            <video src={current.src} controls autoPlay />
          )}
          {media.length > 1 && (
            <>
              <button className="modal-nav modal-nav-prev" onClick={prevMedia} aria-label="Previous media">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="modal-nav modal-nav-next" onClick={nextMedia} aria-label="Next media">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="modal-indicators">
                {media.map((_, i) => (
                  <button
                    key={i}
                    className={`modal-indicator ${activeMedia === i ? 'active' : ''}`}
                    onClick={(e) => { e.stopPropagation(); setActiveMedia(i); }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="project-modal-details">
          <div className="project-modal-heading">
            <div>
              <h2 className="project-modal-title">{project.title}</h2>
              <span className="project-card-category">{project.category} · {project.year}</span>
            </div>
            <div className="project-team">
              <Users className="project-icon" />
              <span>{project.team}</span>
            </div>
          </div>

          <ExpandableText text={project.description} />

          <div className="technologies-list">
            {project.technologies.map((tech) => (
              <span key={tech} className="technology-tag">{tech}</span>
            ))}
          </div>

          <div className="project-links">
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link">
              <ExternalLink className="project-icon" />
              VIEW PROJECT
            </a>
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link-border">
              <Github className="project-icon" />
              SOURCE CODE
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Project = () => {
  const { isDarkMode } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div id="projects" className={`project-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <motion.header
        className="project-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="project-title">PROJECTS</h1>
        <p className="project-subtitle">A selection of things I've built — personal projects and experiments.</p>
      </motion.header>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} onOpen={setSelectedIndex} />
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <ProjectModal
            project={projects[selectedIndex]}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
