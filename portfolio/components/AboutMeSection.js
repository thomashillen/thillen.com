import React from 'react';

const AboutMeSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="images/about-me.jpeg"
              alt="Your Name"
              className="rounded-md shadow-md"
            />
          </div>
          <div className="text-lg">
            <p>
              My name is Thomas Hillenmeyer and I am a software engineer with a passion for building web applications that are functional, efficient, and visually appealing.
            </p>
            <h2 className="text-xl font-bold mt-8">Background</h2>
            <p>
              I have a background in computer science and have worked on various projects both in academia and industry, ranging from mobile app development to full-stack web development.
            </p>
            <h2 className="text-xl font-bold mt-8">Education</h2>
            <p>
              I received my bachelor's degree in computer science from New York University, where I developed a strong foundation in algorithms, data structures, and software engineering principles. 
            </p>
            <h2 className="text-xl font-bold mt-8">Experience</h2>
            <p>
              Over the years, I have gained valuable experience working with various programming languages, frameworks, and tools, including JavaScript, React, Node.js, Next.js, Three.js and Git. I have also worked with various databases, including MongoDB, MySQL, and Microsoft SQL Server. These experiences have allowed me to develop a strong understanding of the software development process and have given me the skills necessary to build high-quality web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
