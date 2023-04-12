import { useState } from 'react';
import Image from 'next/image';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4 cursor-pointer" onClick={toggleModal}>
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={200}
        className="rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-1">{project.description}</p>
      {showModal && <ProjectModal project={project} onClose={toggleModal} />}
    </div>
  );
};

export default ProjectCard;