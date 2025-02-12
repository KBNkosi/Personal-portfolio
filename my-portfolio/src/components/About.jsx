import React from "react";

const About = () => {
  return (
    <div 
      name='about'
      className='w-full min-h-12 bg-gradient-to-b from-slate-100 to-slate-50 text-slate-800 py-16'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-500'>About</p>
        </div>
        <p className='text-xl mt-10'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deleniti
          ratione explicabo obcaecati a id praesentium at earum, officia sit
          inventore quibusdam autem odio fuga ut sapiente est, cum adipisci
          eligendi! Earum quaerat unde dolorem velit laborum praesentium minima
          obcaecati, laudantium rem, doloribus eveniet eius accusantium quam
          sint! Praesentium, quis!
        </p>
        <br />
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          deserunt modi amet consectetur deleniti necessitatibus, dolore
          corrupti labore expedita placeat quos sapiente eum facilis corporis
          dignissimos accusantium, beatae dicta vitae atque? Quae at beatae
          quaerat atque omnis eius id magni, laborum dolore itaque libero
          nostrum. Hic necessitatibus veniam officia perspiciatis.
        </p>
      </div>
    </div>
  );
};

export default About;
