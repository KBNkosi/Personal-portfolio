import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import python from '../assets/python.png'
import aws from '../assets/aws.png'
import mysql from '../assets/mysql.png'

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "Python",
      icon: python,
      level: 85,
      color: "bg-blue-600"
    },
    {
      id: 2,
      name: "JavaScript",
      icon: javascript,
      level: 80,
      color: "bg-yellow-500"
    },
    {
      id: 3,
      name: "React.js",
      icon: reactImage,
      level: 85,
      color: "bg-blue-400"
    },
    {
      id: 4,
      name: "HTML",
      icon: html,
      level: 90,
      color: "bg-orange-500"
    },
    {
      id: 5,
      name: "CSS",
      icon: css,
      level: 85,
      color: "bg-blue-500"
    },
    {
      id: 6,
      name: "Tailwind CSS",
      icon: tailwind,
      level: 90,
      color: "bg-cyan-500"
    },
    {
      id: 7,
      name: "Git & GitHub",
      icon: github,
      level: 75,
      color: "bg-gray-700"
    },
    {
      id: 8,
      name: "AWS Fundamentals",
      icon: aws,
      level: 70,
      color: "bg-orange-400"
    }
  ];

  const otherSkills = [
    "MySQL",
    "SQLite",
    "Flask",
    "REST APIs",
    "Problem-solving",
    "Communication",
    "Teamwork",
    "Attention to Detail"
  ];
    
  return (
    <section
      id='skills'
      className='bg-gradient-to-b from-slate-50 to-slate-100 w-full text-slate-800 py-16'
    >
      <div className='max-w-screen-lg p-4 mx-auto'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-blue-500'>Skills</h2>
          <p className='py-6'>These are the technologies and skills I've developed</p>
        </div>

        {/* Primary skills with progress bars */}
        <div className='grid sm:grid-cols-2 gap-8 mb-12'>
          {skills.map(({ id, name, icon, level, color }) => (
            <div 
              key={id} 
              className='bg-white rounded-lg p-5 shadow-lg shadow-slate-200 hover:shadow-xl transition-shadow duration-300'
            >
              <div className='flex items-center gap-4 mb-3'>
                <img src={icon} alt={name} className='w-10 h-10 object-contain' />
                <h3 className='text-lg font-medium'>{name}</h3>
              </div>
              
              <div className='w-full bg-slate-100 rounded-full h-2.5'>
                <div 
                  className={`h-2.5 rounded-full ${color}`} 
                  style={{ width: `${level}%` }}
                ></div>
              </div>
              <div className='flex justify-end mt-1'>
                <span className='text-sm text-slate-500'>{level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills */}
        <div className='mt-8'>
          <h3 className='text-2xl font-semibold mb-4'>Additional Expertise</h3>
          <div className='flex flex-wrap gap-3'>
            {otherSkills.map((skill, index) => (
              <span 
                key={index} 
                className='px-4 py-2 bg-white text-slate-700 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;