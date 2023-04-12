import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('nav')) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownOpen]);

  const scrollToSection = (event, id) => {
    event.preventDefault();
    closeDropdown();

    if (router.pathname === '/') {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/').then(() => {
        setTimeout(() => {
          const section = document.getElementById(id);
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    }
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 p-4">
      <div className="flex justify-between items-center">
        <button
          className="text-white lg:hidden"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={toggleTheme}
        >
          <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
        </button>
      </div>
      <ul
        className={`${dropdownOpen ? 'block' : 'hidden'
          } lg:flex lg:justify-around transition duration-300`}
      >
        <li>
          <Link href="/" passHref>
            <span className="text-white cursor-pointer" onClick={closeDropdown}>
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <span className="text-white cursor-pointer" onClick={closeDropdown}>
              About
            </span>
          </Link>
        </li>
        <li>
          <Link href="/projects" passHref>
            <span className="text-white cursor-pointer" onClick={closeDropdown}>
              Projects
            </span>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <span className="text-white cursor-pointer" onClick={closeDropdown}>
              Contact
            </span>
          </Link>
        </li>
        <li>
          <Link href="/blog" passHref>
            <span className="text-white cursor-pointer" onClick={closeDropdown}>
              Blog
            </span>
          </Link>
        </li>
        <li className="hidden lg:block">
          <button
            className="text-white focus:outline-none"
            onClick={toggleTheme}
          >
            <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
