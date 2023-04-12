import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-8">Contact</h1>
          <p className="text-lg">
            {/* Add a contact form and/or links to social media profiles and email */}
            <ContactForm />
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;
