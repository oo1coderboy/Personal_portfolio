import React from 'react';
import proj from '../../assets/project.png';

const projects = [
  {
    title: 'Dragon Game',
    date: 'June 2022',
    link: 'https://darling-frangollo-b9b68d.netlify.app/',
    description:
      'Created a game using HTML, CSS / JavaScript. It utilizes concepts of DOM manipulation and basic JavaScript functions like the time function.',
  },
  {
    title: 'Food Serving Website',
    date: 'Sept 2022',
    link: 'https://foods-1da9f.firebaseapp.com/',
    description:
      'Created a simple food ordering website using React.js. Users can choose their meals based on their preferences. The site is live on Firebase.',
  },
  {
    title: 'Covid Fighter Game',
    date: 'Dec 2022',
    description:
      'Created a game for kids using HTML and JavaScript. Utilized the canvas element for rendering graphics.',
  },
];

const ProjectCard = ({ title, date, link, description }) => {
  const gradientColors = [
    'from-purple-400 to-pink-500',
    'from-green-400 to-blue-500',
    'from-yellow-400 to-red-500',
  ];

  const getRandomGradient = () => {
    const randomIndex = Math.floor(Math.random() * gradientColors.length);
    return gradientColors[randomIndex];
  };

  return (
    <div
      className={`bg-gradient-to-r ${getRandomGradient()} text-white rounded-lg overflow-hidden shadow-md p-6 mb-6`}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-100 mb-2">{date}</p>
      <p className="text-gray-200 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-100 hover:underline"
        >
          View Project
        </a>
      )}
    </div>
  );
};

const ProjectPage = () => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="grid place-items-center sm:mt-20">
        <img className="sm:w-96 w-48" src={proj} alt="image2" />
      </div>

      <div className="max-w-2xl mx-auto text-center mt-16 text-lg font-serif">
        <h1 className="text-2xl sm:text-5xl font-medium mb-6">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
