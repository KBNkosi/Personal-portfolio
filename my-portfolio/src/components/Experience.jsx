import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'


const Experience = () => {

    const technologies=[
        {
            id:1,
            img:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            img:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id: 3,
            img: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
          },
        {
            id:4,
            img:reactImage,
            title:'React',
            style:'shadow-blue-600'
        },
        {
            id:5,
            img:nextjs,
            title:'Next JS',
            style:'shadow-white'
        },
        {
            id:6,
            img:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:7,
            img:graphql,
            title:'GraghQL',
            style:'shadow-pink-400'
        },
        {
            id:8,
            img:github,
            title:'GitHub',
            style:'shadow-gray-400'
        },
        
    ];

  return (
    <div 
      name='experience'
      className='bg-gradient-to-b from-slate-100 to-slate-50 w-full  min-h-12  py-16'
    >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-slate-800'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-blue-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technologies I have worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {technologies.map(({id,img,title,style})=>(
            <div
              key={id}
              className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-white'
            >
              <img src={img} alt='tech logo' className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience