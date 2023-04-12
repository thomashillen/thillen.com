import React, { useState } from 'react';

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    alert('Please fill out all fields.');
    return;
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormValues({ name: '', email: '', message: '' });
    } else {
      alert('An error occurred. Please try again.');
    }
  } catch (error) {
    alert('An error occurred. Please try again.');
  }
};


const validateForm = () => {
  if (
    formValues.name.trim() === '' ||
    formValues.email.trim() === '' ||
    formValues.message.trim() === ''
  ) {
    return false;
  }
  return true;
};



const ContactForm = () => {
  // Component logic and JSX go here

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  return (
    <section id="contact" className="container mx-auto my-12">
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 p-2 w-full"
            value={formValues.name}
            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 p-2 w-full"
            value={formValues.email}
            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="border border-gray-300 p-2 w-full"
            value={formValues.message}
            onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Send Message
        </button>
      </form>
    </section>
  );

};



export default ContactForm;
