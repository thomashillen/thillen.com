const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white text-center p-4">
      &copy; {new Date().getFullYear()} Thomas Hillenmeyer. All rights reserved.
    </footer>
  );
};

export default Footer;
