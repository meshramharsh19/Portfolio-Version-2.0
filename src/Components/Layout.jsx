import { useTheme } from './Themes/ThemeContext';
import Navbar from './Navbar/NavBar';

const Layout = ({ children }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
