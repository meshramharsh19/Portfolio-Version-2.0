import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink, Github, Plus, Moon, Sun, X, ArrowDown, Calendar, Users, Award } from 'lucide-react';
import './Project_Light.css';
import './MediaQueries.css'
import { useTheme } from '../Themes/ThemeContext';
import ISE from "./Images/img-search-engine.png";
import NewsApp from "./Images/newsapp.png";
import TextSpeech from "./Images/Text-to-Speak.png";
import TextEditor from "./Images/TextUtils.png";
import Edicity from "./Images/pragyan-forum.png";
import PhotoEditor from "./Images/photo-editor.png";
import Weather from "./Images/weather app.png";

const MonochromePortfolio = () => {
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
      images: [
        TextSpeech
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
      images: [
        TextEditor
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
      images: [
        Edicity
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
      images: [
        ISE
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
      images: [
        NewsApp
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
      images: [
        PhotoEditor
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
      images: [
        Weather
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
      threshold: 0.1, // 10% visibility trigger
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    
    <div id="projects"className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      

      {/* Header */}
      <header className="pt-16 px-8 relative transition-all duration-500">
        <div className="absolute right-8 top-8 flex space-x-4">
          
        </div>
        <h1 className="text-8xl font-bold tracking-tighter mb-4 transition-transform duration-500">
          PROJECTS
        </h1>
        <div className={`h-px w-full ${isDarkMode ? 'bg-white' : 'bg-black'} opacity-20`}></div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left Panel - Project List */}
        <div className="p-8" ref={el => sectionRefs.current[0] = el}>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-500 transform ${
                  activeProject === index ? 'opacity-100 scale-105' : 'opacity-40 hover:opacity-70'
                }`}
                onClick={() => setActiveProject(index)}
              >
                {/* Project header content */}
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold tracking-tight">{project.title}</h2>
                  <span className="text-sm opacity-60">{project.year}</span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-sm mr-4">{project.category}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                </div>
                <div className={`h-px w-full ${isDarkMode ? 'bg-white' : 'bg-black'} opacity-20 mt-8`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Project Details */}
        <div className={`transition-colors duration-300 p-8 ${
          isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
        }`}>
          {/* Section Navigation */}
          <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
  {['overview', 'gallery'].map((section) => (
    <button
      key={section}
      onClick={() => setActiveSection(section)}
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '9999px', // Fully rounded
        transition: 'all 0.3s',
        backgroundColor: activeSection === section 
          ? isDarkMode 
            ? 'black' 
            : 'white' 
          : 'transparent',
        color: activeSection === section 
          ? isDarkMode 
            ? 'white' 
            : 'black' 
          : 'inherit',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = activeSection === section 
          ? isDarkMode 
            ? 'black' 
            : 'white' 
          : 'rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = activeSection === section 
          ? isDarkMode 
            ? 'black' 
            : 'white' 
          : 'transparent';
      }}
    >
      {section.toUpperCase()}
    </button>
  ))}
</div>


          {/* Dynamic Content Based on Section */}
          <div className="space-y-8" ref={el => sectionRefs.current[1] = el}>
            {activeSection === 'overview' && (
              <div className="space-y-8">
                <img
                  src={projects[activeProject].images[0]}
                  alt={projects[activeProject].title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <p className="text-lg leading-relaxed">
                  {projects[activeProject].description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>{projects[activeProject].team}</span>
                  </div>
                  <div className='space-y-4'>
                    <h3 className="text-sm font-bold mb-2">TECHNOLOGIES</h3>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeProject].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 text-sm ${
                            isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
                          }`}
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
              <div className="grid grid-cols-2 gap-4">
                {projects[activeProject].images.map((image, index) => (
                  <div
                    key={index}
                    className="relative cursor-pointer group"
                    onClick={() => {
                      setActiveImage(index);
                      setIsGalleryOpen(true);
                    }}
                  >
                    <img
                      src={image}
                      alt={`Project image ${index + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <Plus className="w-8 h-8 opacity-0 group-hover:opacity-100 text-white transition-all duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            )}


<div className="flex space-x-4 mt-8">
  <a
    href={projects[activeProject].links.live}
    target="_blank"
    rel="noopener noreferrer"
    className={`px-6 py-3 flex items-center transition-all duration-300 ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
    } hover:scale-105`}
  >
    <ExternalLink className="w-4 h-4 mr-2" />
    VIEW PROJECT
  </a>
  <a
    href={projects[activeProject].links.github}
    target="_blank"
    rel="noopener noreferrer"
    className={`px-6 py-3 border flex items-center transition-all duration-300 ${
      isDarkMode ? 'border-black' : 'border-white'
    } hover:scale-105`}
  >
    <Github className="w-4 h-4 mr-2" />
    SOURCE CODE
  </a>
</div>
          </div>
        </div>

        {/* Gallery Modal */}
        {isGalleryOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 text-white hover:opacity-75 transition-opacity"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full max-w-4xl">
              <img
                src={projects[activeProject].images[activeImage]}
                alt={`Gallery image ${activeImage + 1}`}
                className="w-full h-auto"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {projects[activeProject].images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeImage === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
                    }`}
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

export default MonochromePortfolio;
