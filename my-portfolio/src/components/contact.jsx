import React from 'react'

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-4 text-slate-800 py-16'
    >
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-500'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form 
            action='https://getform.io/f/bzywleka'
            method='POST'
            className='flex flex-col w-full md:w-1/2'
          >
            <input 
              type="text"
              name='name'
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-blue-500'
            />
            <input 
              type="text"
              name='email'
              placeholder='Enter your email'
              className='my-4 p-2 bg-transparent border-2 border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-blue-500'
            />
            <textarea 
              name="message" 
              placeholder='Enter your message'
              rows='10'
              className='p-2 bg-transparent border-2 border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-blue-500'
            ></textarea>

            <button className='text-white bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact