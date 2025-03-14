import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

  const projects=[
    {
      id:1,
      name: "Career Guidance App",
      src:arrayDestruct,
      demo:'https://arraydestruct.com',
      code:'https://github.com/KBNkosi/CareerGuidance_App.git',
      description: ""
    },
    {
      id:2,
      name: "Home Page",
      src:installNode,
      demo:'https://kbnkosi.github.io/Home-Page-Project/',
      code:'https://github.com/KBNkosi/Home-Page-Project.git',
      description: ""
    },
    {
      id:3,
      name: "Coffee List Page",
      src:navbar,
      demo:'https://kbnkosi.github.io/Coffee-list-Project/',
      code:'https://github.com/KBNkosi/Coffee-list-Project.git',
      description: ""
    },
    {
      id:4,
      name: "Translator App",
      src:reactParallax,
      demo:'https://kbnkosi.github.io/Translator-App//',
      code:'https://github.com/KBNkosi/Translator-App.git',
      description: ""
    },
    {
      id:5,
      name: "E-commerce Application",
      src:reactSmooth,
      demo:'https://kbnkosi.github.io/E-commerce-Application/',
      code:'https://github.com/KBNkosi/E-commerce-Application.git',
      description: ""
    }
  ]
  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-slate-50 to-slate-100 w-full  text-slate-800 py-16'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map(({id,src})=>(
            <div key={id} className='shadow-lg shadow-slate-300 rounded-lg'>
              <img 
                src={src} 
                alt=""
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-blue-600 hover:text-blue-800'>
                  Demo
                </button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-blue-600 hover:text-blue-800'>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio