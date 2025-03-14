import React from 'react'
import heroImage from '../assets/heroImage.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='h-[50vh]  w-full bg-gradient-to-b from-slate-50 to-slate-100'>

      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4'>
        <div className='flex flex-col justify-center h-full'>
        <h2 className='text-4xl sm:text-7xl font-bold text-slate-800'>I am a IT Graduate</h2>
        <p className='text-slate-600 py-4 max-w-md'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam magni,
            inventore quasi, dolores nihil natus nobis consequatur aut ex eius
            facere accusamus vitae quam. Est illum porro iusto officiis laudantium.
        </p>

        <div>
            <Link 
             to='portfolio'
             smooth
             duration={500}
            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
             bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500'>
                
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                      <MdKeyboardArrowRight size={20} className='ml-1'/>
                    </span>
                
            </Link>
        </div>
      </div>

      <div>
            <img 
            src={heroImage}
            alt="my profile"
            className='rounded-2xl mx-auto w-2/3 md:w-full' 
             />
        </div>
     </div>
    </div>
  );
};

export default Home