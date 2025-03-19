import React from 'react'
import careerRecommendation from '../assets/portfolio/career-recommedation.jpg'
import landingPage from '../assets/portfolio/landing-page.png'
import translator from '../assets/portfolio/translator.jpg'
import ecommerce from '../assets/portfolio/ecommerce.jpg'
import coffeePage from '../assets/portfolio/coffee-page.jpg'
import PropTypes from 'prop-types'

const ProjectCard = ({ id, src, name, demo, code, description, techStack }) => (
  <div key={id} className='shadow-lg shadow-slate-300 rounded-lg overflow-hidden h-full flex flex-col'>
    <img 
      src={src} 
      alt={name}
      className='w-full h-48 object-cover rounded-t-md duration-200 hover:scale-105'
    />
    <div className='p-4 flex flex-col flex-grow'>
      <h3 className='text-xl font-semibold mb-2'>{name}</h3>
      <p className='text-slate-600 mb-3 line-clamp-2 flex-shrink-0'>{description}</p>
      
      <div className='flex flex-wrap gap-2 mb-4 mt-auto'>
        {techStack.map((tech, index) => (
          <span 
            key={index} 
            className='px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full'
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className='flex items-center justify-between mt-auto'>
        <a 
          href={demo} 
          target="_blank" 
          rel="noopener noreferrer"
          className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'
        >
          Demo
        </a>
        <a 
          href={code} 
          target="_blank" 
          rel="noopener noreferrer"
          className='px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors'
        >
          Code
        </a>
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Career Recommendation System",
      src: careerRecommendation,
      demo: 'https://career-recommendation-system.vercel.app',
      code: 'https://github.com/KBNkosi/Career-Recommendation-System.git',
      description: "A personality test-based career guidance system that provides personalized recommendations to students.",
      techStack: ['React.js', 'Python (Flask)', 'SQLite', 'TailwindCSS', 'JWT', 'REST APIs']
    },
    {
      id: 2,
      name: "Landing Page",
      src: landingPage,
      demo: 'https://kbnkosi.github.io/Home-Page-Project/',
      code: 'https://github.com/KBNkosi/Home-Page-Project.git',
      description: "Landing page with light and dark mode functionality.",
      techStack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 3,
      name: "Coffee List Page",
      src: coffeePage,
      demo: 'https://kbnkosi.github.io/Coffee-list-Project/',
      code: 'https://github.com/KBNkosi/Coffee-list-Project.git',
      description: "Coffee listing page with filtering capabilities for product availability.",
      techStack: ['React', 'Tailwind CSS', 'Vite']
    },
    {
      id: 4,
      name: "Translator App",
      src: translator,
      demo: 'https://kbnkosi.github.io/Translator-App//',
      code: 'https://github.com/KBNkosi/Translator-App.git',
      description: "Modern translator application using the MyMemory Translation API.",
      techStack: ['React', 'Tailwind CSS', 'REST API']
    },
    {
      id: 5,
      name: "E-commerce Application",
      src: ecommerce,
      demo: 'https://e-commerce-application-rust.vercel.app/',
      code: 'https://github.com/KBNkosi/E-commerce-Application.git',
      description: "Modern, responsive e-commerce application with product catalog and cart functionality.",
      techStack: ['React', 'Vite', 'Tailwind CSS', 'Vercel']
    }
   
  ];

  return (
    <section
      id='portfolio'
      className='bg-gradient-to-b from-slate-50 to-slate-100 w-full text-slate-800 py-16'
    >
      <div className='max-w-screen-lg p-4 mx-auto'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-blue-500'>Projects</h2>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;