const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-md p-4 max-w-2xl w-full">
        <button
          className="absolute top-2 right-2 text-gray-800 dark:text-gray-200 focus:outline-none"
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </button>
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.details}</p>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={onClose}
      >
        Close
      </button>
    </div>
</div >
);
};

export default ProjectModal;
