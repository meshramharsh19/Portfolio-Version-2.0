import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Download, Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import './Resume_Light.css';
import './Resume_dark.css';
import './MediaQueries.css'
import { useTheme } from '../Themes/ThemeContext';
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
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Software Engineer</h1>
          <p className="hero-description">
            Passionate about creating innovative solutions with modern technologies.
            Specializing in full-stack development with expertise in React, Python, Database and UX Development.
          </p>

          <div className="contact-links">
            <a href="mailto:meshram.harsh05@gmail.com" className="contact-link">
              <Mail className="contact-icon" />
              meshram.harsh05@gmail.com
            </a>
            <a href="tel:+917499288828" className="contact-link">
              <Phone className="contact-icon" />
              (+91) 7499288828
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/meshramharsh19" target="_blank" className="social-link">
              <Github className="social-icon" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/harsh-meshram-5b8271258/" target="_blank" className="social-link">
              <Linkedin className="social-icon" />
              LinkedIn
            </a>
            <a href="https://drive.google.com/file/d/1AI7Wk5TLEQy1LpfOTvHZvmyWsxa3DRbg/view?usp=sharing" target="_blank" rel="noopener noreferrer">
  <button className="download-button">
    <Download className="download-icon" />
    Download CV
  </button>
</a>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navigation Tabs */}
        <div className="navigation-tabs">
          <TabButton id="experience" label="Experience" icon={Briefcase} />
          <TabButton id="education" label="Education" icon={GraduationCap} />
          <TabButton id="skills" label="Skills" icon={Code} />
          <TabButton id="achievements" label="Achievements" icon={Award} />
        </div>

        {/* Content Sections */}
        <div className="content-section">
          {activeTab === 'experience' && (
            <div className="experience-section">
              <h2 className="section-title">Professional Experience</h2>

              <div className="experience-item">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">Software Engineer Intern</h3>
                    <p className="experience-company">Cojag Smart Technologies</p>
                  </div>
                  <span className="experience-duration">Dec 2024 - Present</span>
                </div>
                <ul className="experience-description">
                  <li>• Designed and developed GIS software with 3D/2D mapping using CesiumJS and Leaflet</li>
                  <li>• Implemented support for KML, KMZ, and .obj file formats</li>
                  <li>• Implemented secure authentication with role-based access controls</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">Web Development Intern</h3>
                    <p className="experience-company">MotionCuts</p>
                  </div>
                  <span className="experience-duration">Dec 2023 - Jan 2024</span>
                </div>
                <ul className="experience-description">
                  <li>• Developed user-friendly login page with authentication functionality</li>
                  <li>• Designed with a user-centric approach for intuitive experience</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="education-section">
              <h2 className="section-title">Education</h2>

              <div className="education-item">
                <div className="education-header">
                  <div>
                    <h3 className="education-title">Bachelor of Technology (BTech)</h3>
                    <p className="education-details">Information Technology Engineering</p>
                    <p className="education-institution">JD College Of Engineering And Management, Nagpur</p>
                  </div>
                  <div className="education-duration">
                    <p className="duration">2020 - 2025</p>
                    <p className="cgpa">CGPA: 8.4</p>
                  </div>
                </div>
              </div>

              <div className="education-item">
                <div className="education-header">
                  <div>
                    <h3 className="education-title">12th Maharashtra State Board</h3>
                    <p className="education-institution">SFS college seminary hills, Nagpur</p>
                  </div>
                  <div className="education-duration">
                    <p className="duration">2020</p>
                    <p className="percentage">86.4%</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="skills-section">
              <h2 className="section-title">Technical Skills</h2>

              <div className="skills-grid">
                <div className="skill-item">
                  <h3 className="skill-title">Programming Languages</h3>
                  <div className="skill-tags">
                    {['Python', 'JavaScript', 'C', 'C++', 'SQL', 'Java'].map(skill => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="skill-item">
                  <h3 className="skill-title">Web Technologies</h3>
                  <div className="skill-tags">
                    {['ReactJS', 'NodeJS', 'ExpressJS', 'HTML', 'CSS', 'Bootstrap', 'Tailwind'].map(skill => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="skill-item">
                  <h3 className="skill-title">Databases</h3>
                  <div className="skill-tags">
                    {['MongoDB', 'SQL'].map(skill => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="skill-item">
                  <h3 className="skill-title">Tools</h3>
                  <div className="skill-tags">
                    {['Git', 'GitHub', 'Figma', 'Cesium ion', 'Xampp'].map(skill => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="achievements-section">
              <h2 className="section-title">Achievements & Soft Skills</h2>

              <div className="achievements-list">
                <ul className="achievements-description">
                  <li className="achievement-item">
                    <Award className="achievement-icon" />
                    HackerRank 5-Star Badge in Python
                  </li>
                  <li className="achievement-item">
                    <Award className="achievement-icon" />
                    Strong ability to convey ideas and collaborate effectively within teams
                  </li>
                  <li className="achievement-item">
                    <Award className="achievement-icon" />
                    Ability to work in a team, learn quickly, apply analytical thinking, and pay attention to detail
                  </li>
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
        </div>
      </div>
    </div>
    </div>
  );
};

export default ResumePage;
