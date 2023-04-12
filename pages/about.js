import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutMeSection from '../components/AboutMeSection';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <AboutMeSection />
      </main>
    </div>
  );
};

export default About;
