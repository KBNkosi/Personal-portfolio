import React from 'react'

const Skills = () => {
 
    const getSkills=()=>[
    "React.js",
    "Python (Flask)",
    "JavaScript",
    "SQLite",
    "AWS Fundamentals",
    "Git & GitHub",
    "TailwindCSS",
    "REST APIs"
    ]

    
    return (
        <div
        name='skills'
        className='bg-gradient-to-b from-slate-50 to-slate-100 w-full text-slate-800 py-16'
      >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-500'>Skills</p>
            <p className='py-6'>These are the technologies I've worked with</p>
          </div>
  
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {getSkills().map((skill, index) => (
              <div 
                key={index} 
                className='shadow-lg shadow-slate-300 rounded-lg p-4 hover:scale-105 duration-200 bg-white'
              >
                <p className='text-center'>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Skills