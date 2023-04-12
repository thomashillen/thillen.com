import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.remove(theme === 'light' ? 'dark' : 'light');
    body.classList.add(theme);
  }, [theme]);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
