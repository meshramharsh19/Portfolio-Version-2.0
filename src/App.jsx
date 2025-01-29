import React, { useState } from 'react';
import { ThemeProvider } from './Components/Themes/ThemeContext';
import Layout from './Components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioHomePage from './Components/Introduction/Introduction';
import ProjectShowcase from './Components/Projects/Projects';
import NavBar from './Components/Navbar/NavBar';
import ResumePage from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  const [animateProjects, setAnimateProjects] = useState(false);

  const handleScroll = () => {
    setAnimateProjects(true);
  };

  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <NavBar />
          <PortfolioHomePage/>
          <ProjectShowcase/>
          <ResumePage />
          <Contact />
          <Routes>
              <>
              </>
          </Routes>
          <Footer />
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
