import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink, Github, Plus, X, Users, Award } from 'lucide-react';
import './Project_Light.css';
import './MediaQueries.css'
import { useTheme } from '../Themes/ThemeContext';

// import images
import ISE from "./Images/img-search-engine.png";
import ISE2 from "./Images/img-search-engine2.png";
import ISE3 from "./Images/img-search-engine3.png";
import ISE4 from "./Images/img-search-engine4.png";

import NewsApp from "./Images/newsapp.png";
import TextSpeech from "./Images/Text-to-Speak.png";
import TextEditor from "./Images/TextUtils.png";

import Edicity from "./Images/pragyan-forum.png";
import Edicity2 from "./Images/pragyan-forum2.png";
import Edicity3 from "./Images/pragyan-forum3.png";
import Edicity4 from "./Images/pragyan-forum4.png";
import Edicity5 from "./Images/pragyan-forum5.png";
import Edicity6 from "./Images/pragyan-forum6.png";

import PhotoEditor from "./Images/photo-editor.png";
import Weather from "./Images/weather app.png";

// import videos
import ImageSearchEngineVideo from './Videos/ImageSearchEngine.mp4'
import TextSpeechVideo from './Videos/Text-To-Speech.mp4'
import TextUtilsVideo from './Videos/TextUtils.mp4'
import EdicityVideo from './Videos/Pragyan.mp4'
import WeatherVideo from "./Videos/Weather.mp4";

const Project = () => {
  const { isDarkMode } = useTheme();
  const [activeProject, setActiveProject] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  // Refs for scroll animations
  const sectionRefs = useRef([]);

  const projects = [
    {
      title: "Text to Speech",
      year: "2023",
      category: "Web Technologies",
      description: "Text-to-Speech: Converts written text into natural-sounding speech, enhancing accessibility and user interaction across various applications and devices.",
      media: [
        { type: 'image', src: TextSpeech },
        { type: 'video', src: TextSpeechVideo }
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind","API"],
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
      technologies: ["React", "HTML", "CSS", "JavaScript" ],
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
        live: "https://howstheweathers.netlify.app/   ",
        github: "https://github.com/meshramharsh19/Weather-App",
        case_study: "#"
      }
    },
  ];

  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Trigger when 10% of the element is visible
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target); // Unobserve after animation
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="projects" className={`project-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Header */}
      <header className="project-header">
        <div className="header-buttons">
        </div>
        <h1 className="project-title">PROJECTS</h1>
      </header>

      {/* Main Grid */}
      <div className="main-grid">
        {/* Left Panel - Project List */}
        <div className="project-list" ref={el => sectionRefs.current[0] = el}>
          <div className="project-list-items">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-item ${activeProject === index ? 'active' : 'inactive'}`}
                onClick={() => setActiveProject(index)}
              >
                {/* Project header content */}
                <div className="project-header-content">
                  <h2 className="project-name">{project.title}</h2>
                  <span className="project-year">{project.year}</span>
                </div>
                <div className="project-category">
                  <span className="project-category-text">{project.category}</span>
                  <ArrowRight className="project-arrow" />
                </div>
                <div className="project-divider"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Project Details */}
        <div className={`project-details ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          {/* Section Navigation */}
          <div className="section-navigation">
            {['overview', 'gallery'].map((section) => (
              <button
                key={section}
                className={`section-button ${activeSection === section ? 'active' : ''}`}
                onClick={() => setActiveSection(section)}
              >
                {section.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Dynamic Content Based on Section */}
          <div className="dynamic-content" ref={el => sectionRefs.current[1] = el}>
            {activeSection === 'overview' && (
              <div className="overview-content">
                {projects[activeProject].media[0].type === 'image' ? (
                  <img
                    src={projects[activeProject].media[0].src}
                    alt={projects[activeProject].title}
                    className="project-media"
                  />
                ) : (
                  <video
                    src={projects[activeProject].media[0].src}
                    controls
                    className="project-media"
                  />
                )}
                <p className="project-description">
                  {projects[activeProject].description}
                </p>
                <div className="project-info">
                  <div className="project-team">
                    <Users className="project-icon" />
                    <span>{projects[activeProject].team}</span>
                  </div>
                  <div className="project-technologies">
                    <h3 className="technologies-title">TECHNOLOGIES</h3>
                    <div className="technologies-list">
                      {projects[activeProject].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="technology-tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'gallery' && (
              <div className="gallery-content">
                {projects[activeProject].media.map((media, index) => (
                  <div
                    key={index}
                    className="gallery-item"
                    onClick={() => {
                      setActiveImage(index);
                      setIsGalleryOpen(true);
                    }}
                  >
                    {media.type === 'image' ? (
                      <img
                        src={media.src}
                        alt={`Project image ${index + 1}`}
                        className="gallery-media"
                      />
                    ) : (
                      <video
                        src={media.src}
                        className="gallery-media"
                      />
                    )}
                    <div className="gallery-overlay">
                      <Plus className="gallery-icon" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="project-links">
              <a
                href={projects[activeProject].links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <ExternalLink className="project-icon" />
                VIEW PROJECT
              </a>
              <a
                href={projects[activeProject].links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-border"
              >
                <Github className="project-icon" />
                SOURCE CODE
              </a>
            </div>
          </div>
        </div>

        {/* Gallery Modal */}
        {isGalleryOpen && (
          <div className="gallery-modal">
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="modal-close-button"
            >
              <X className="modal-close-icon" />
            </button>
            <div className="modal-content">
              {projects[activeProject].media[activeImage].type === 'image' ? (
                <img
                  src={projects[activeProject].media[activeImage].src}
                  alt={`Gallery image ${activeImage + 1}`}
                  className="modal-media"
                />
              ) : (
                <video
                  src={projects[activeProject].media[activeImage].src}
                  controls
                  className="modal-media"
                />
              )}
              <div className="modal-indicators">
                {projects[activeProject].media.map((_, index) => (
                  <button
                    key={index}
                    className={`modal-indicator ${activeImage === index ? 'active' : ''}`}
                    onClick={() => setActiveImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
