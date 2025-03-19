import React from 'react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Career Recommendation System Project",
      company: "Richfield Graduate Institute of Technology",
      period: "Jul 2024 - Oct 2024",
      description: "Collaborated with a team to design and develop a career guidance web application with personalized recommendations.",
      achievements: [
        "Developed a personality test feature for personalized career recommendations",
        "Analyzed 50+ courses and universities, improving student satisfaction by 20%",
        "Implemented responsive design principles for optimal user experience across devices"
      ],
      skills: ["React.js", "Python (Flask)", "SQLite", "TailwindCSS", "REST APIs"]
    },
    {
      id: 2,
      role: "Student Support Volunteer",
      company: "ALX Africa",
      period: "May 2024 - Jun 2024",
      description: "Provided technical support and guidance to fellow students in a high-pressure learning environment.",
      achievements: [
        "Provided IT support to 10+ learners, troubleshooting software issues",
        "Achieved 100% course completion rate among mentees",
        "Enhanced teamwork and technical guidance skills"
      ],
      skills: ["Technical Support", "Problem-solving", "Communication", "Teamwork"]
    },
    {
      id: 3,
      role: "AWS Cloud Foundations Certification",
      company: "Amazon Web Services",
      period: "Jul 2024",
      description: "Completed comprehensive training in cloud computing fundamentals and security best practices.",
      achievements: [
        "Mastered cloud computing concepts and AWS service offerings",
        "Developed understanding of security best practices in cloud environments",
        "Applied knowledge to practical scenarios and use cases"
      ],
      skills: ["AWS", "Cloud Computing", "Security", "Infrastructure"]
    }
  ];

  return (
    <section 
      id='experience'
      className='bg-gradient-to-b from-slate-100 to-slate-50 w-full py-16'
    >
      <div className='max-w-screen-lg mx-auto p-4 text-slate-800'>
        <div className='mb-10'>
          <h2 className='text-4xl font-bold border-b-4 border-blue-500 p-2 inline'>Experience</h2>
          <p className='py-6'>My professional journey and achievements</p>
        </div>

        <div className='relative'>
          {/* Timeline center line */}
          <div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200'></div>
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className='absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 z-10 mt-1'></div>
              
              {/* Content */}
              <div className='md:w-5/12 ml-8 md:ml-0'>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='text-xl font-bold text-blue-600'>{exp.role}</h3>
                    <span className='text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full'>
                      {exp.period}
                    </span>
                  </div>
                  <h4 className='text-lg font-medium mb-3'>{exp.company}</h4>
                  <p className='text-slate-600 mb-4'>{exp.description}</p>
                  
                  <h5 className='font-semibold mb-2 text-slate-800'>Key Achievements:</h5>
                  <ul className='list-disc pl-5 mb-4 text-slate-700 space-y-1'>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  
                  <div className='flex flex-wrap gap-2 mt-3'>
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className='px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className='mt-12 text-center'>
          <a 
            href="/CV.pdf" 
            target="_blank"
            className='px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors inline-flex items-center gap-2'
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
            </svg>
            Download Full CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;