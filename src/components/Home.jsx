import React from 'react'
import heroImage from '../assets/hero-image.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section id='home' className='h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 flex items-center'>

      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-8'>
        <div className='flex flex-col justify-center md:w-1/2'>
          <h1 className='text-4xl sm:text-6xl font-bold text-slate-800 leading-tight'>Kenny Nkosi</h1>
          <h2 className='text-2xl sm:text-3xl font-semibold text-blue-600 mt-2'>Information Technology Graduate & Web Developer</h2>
          <p className='text-slate-600 py-4 text-lg'>
          Building responsive web applications with modern technologies
          </p>

          <div>
            <Link 
              to='portfolio'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
              bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all'
            >
              Projects
              <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardArrowRight size={20} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>

        <div className='md:w-1/2 flex justify-center'>
          <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl'>
            <img 
              src={heroImage}
              alt="Professional headshot"
              className='absolute inset-0 w-full h-full object-cover' 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home