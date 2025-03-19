import React from "react";

const About = () => {
  return (
    <section 
      id='about'
      className='w-full min-h-12 bg-gradient-to-b from-slate-100 to-slate-50 text-slate-800 py-16'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-blue-500'>About Me</h2>
        </div>
        <p className='text-xl mt-10'>
          IT graduate with a solid foundation in software development, cloud computing, and technical support. 
          Passionate about using technology to solve real-world challenges, optimize performance, and enhance user experiences. 
          Skilled in developing scalable systems and resolving technical issues.
        </p>
        <br />
        <p className='text-xl'>
          I recently earned my Bachelor of Science in Information Technology from Richfield Graduate Institute of Technology
          with a GPA of 3.4. During my studies, I was awarded a merit-based scholarship for outstanding academic performance.
          I'm currently pursuing AWS Cloud Architecting certification to further enhance my skills in designing and deploying
          scalable cloud architectures.
        </p>
      </div>
    </section>
  );
};

export default About;
