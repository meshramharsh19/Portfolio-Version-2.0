import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './NavBar_Light.css';
import './NavBar_dark.css'
import './MediaQueries.css'
import { useTheme } from '../Themes/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Get theme state & toggle function
  const [isVisible, setIsVisible] = useState(true);
  const [activeItem, setActiveItem] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (targetId) => {
    if (targetId === 'download CV') {
      window.open('https://drive.google.com/file/d/1AI7Wk5TLEQy1LpfOTvHZvmyWsxa3DRbg/view?usp=sharing', '_blank'); // Replace with your actual Google Drive link
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      setActiveItem(targetId);
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    let lastScroll = 0;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(currentScrollY < lastScroll || currentScrollY < 100);
          lastScroll = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }

      const sections = ['home', 'projects', 'resume', 'contact', 'download'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveItem(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">
      <div className={`navbar-container ${isVisible ? 'visible' : 'hidden'}`}>
        <nav className={`navbar ${isDarkMode ? 'dark:bg-gray-900 text-white' : 'bg-white text-black'}`}>
          <div className="logo">
            <span className="logo-text">Harsh's Portfolio</span>
            <div className="logo-underline"></div>
          </div>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {['home', 'projects', 'resume', 'contact', 'download CV'].map((item) => (
              <li
                key={item}
                className={`nav-item ${activeItem === item ? 'active' : ''}`}
                onClick={() => handleNavigation(item)}
              >
                <span className="nav-text">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
                <div className="nav-item-underline"></div>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle Button */}
          <button
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun className="icon" /> : <Moon className="icon" />}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
