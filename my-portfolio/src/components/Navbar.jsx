import React from 'react'
import {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    
    const [nav,setNav]=useState(false)

    const links=[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'experience'
        },
        {
            id:5,
            link:'contact'
        }
    ];


  return (
    <div className='flex justify-between items-center px-4 bg-gray-800 w-full h-20 text-white fixed'>
        <div>
           <h1 className='text-5xl font-signature ml-2'>Kenny Nkosi</h1>
        </div>

        <ul className='hidden md:flex'>

           {links.map(({id, link}) =>(
            
            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-white  hover:text-gray-500 hover:scale-105 duration-200'>
             {link}
           </li>

           ))}
        </ul>

        <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 hover:text-gray-500 md:hidden'>
           {nav ? <FaTimes size={20} /> :  <FaBars size={20} />}
        </div>

        {nav &&(
             <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
             bg-gradient-to-b from-black to-gray-800'>
                 {links.map(({id,link})=>(
                   <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                      {link}
                   </li>
                 ))}
     
             </ul>
        )}

        
    </div>
  )
}

export default Navbar