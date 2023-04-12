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
            <button className="text-white cursor-pointer bg-transparent border border-white rounded-md px-3 py-2 hover:bg-white hover:text-gray-800" onClick={closeDropdown}>
              Home
            </button>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <button className="text-white cursor-pointer bg-transparent border border-white rounded-md px-3 py-2 hover:bg-white hover:text-gray-800" onClick={closeDropdown}>
              About
            </button>
          </Link>
        </li>
        <li>
          <Link href="/projects" passHref>
            <button className="text-white cursor-pointer bg-transparent border border-white rounded-md px-3 py-2 hover:bg-white hover:text-gray-800" onClick={closeDropdown}>
              Projects
            </button>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <button className="text-white cursor-pointer bg-transparent border border-white rounded-md px-3 py-2 hover:bg-white hover:text-gray-800" onClick={closeDropdown}>
              Contact
            </button>
          </Link>
        </li>
        <li>
          <Link href="/blog" passHref>
            <button className="text-white cursor-pointer bg-transparent border border-white rounded-md px-3 py-2 hover:bg-white hover:text-gray-800" onClick={closeDropdown}>
              Blog
            </button>
          </Link>
        </li>
        <li className="hidden lg:block">
          <button
            className="text-white cursor-pointer bg-transparent border border-white rounded-md px-3 py-2 hover:bg-white hover:text-gray-800 focus:outline-none"
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