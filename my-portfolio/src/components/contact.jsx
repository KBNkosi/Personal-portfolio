import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: false, message: 'Sending message...' });
    
    try {
      const response = await fetch('https://getform.io/f/bzywleka', {
        method: 'POST',
        body: new FormData(e.target)
      });
      
      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <section
      id='contact'
      className='w-full bg-gradient-to-b from-slate-50 to-slate-100 py-16'
    >
      <div className='max-w-screen-lg mx-auto px-4'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-blue-500'>Contact</h2>
          <p className='py-6'>Let's connect! Fill out the form below to get in touch.</p>
        </div>

        <div className='grid md:grid-cols-2 gap-10'>
          {/* Contact Form */}
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-2xl font-semibold mb-4 text-blue-600'>Send Me a Message</h3>
            
            {formStatus.submitted && (
              <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form 
              onSubmit={handleSubmit}
              action='https://getform.io/f/bzywleka'
              method='POST'
              className='flex flex-col'
            >
              <div className='mb-4'>
                <label htmlFor='name' className='block text-sm font-medium text-slate-700 mb-1'>Name</label>
                <input 
                  type="text"
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Your name'
                  required
                  className='w-full p-3 bg-slate-50 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                />
              </div>
              
              <div className='mb-4'>
                <label htmlFor='email' className='block text-sm font-medium text-slate-700 mb-1'>Email</label>
                <input 
                  type="email"
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='your.email@example.com'
                  required
                  className='w-full p-3 bg-slate-50 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                />
              </div>
              
              <div className='mb-4'>
                <label htmlFor='subject' className='block text-sm font-medium text-slate-700 mb-1'>Subject</label>
                <input 
                  type="text"
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='What is this regarding?'
                  className='w-full p-3 bg-slate-50 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                />
              </div>
              
              <div className='mb-4'>
                <label htmlFor='message' className='block text-sm font-medium text-slate-700 mb-1'>Message</label>
                <textarea 
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Your message here...'
                  rows='6'
                  required
                  className='w-full p-3 bg-slate-50 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none'
                ></textarea>
              </div>

              <button 
                type='submit'
                disabled={formStatus.submitted && formStatus.success}
                className='text-white bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 mt-2 rounded-md hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center'
              >
                {formStatus.submitted && formStatus.success ? 'Message Sent' : 'Send Message'}
                {!formStatus.success && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className='bg-white rounded-lg shadow-lg p-6 mb-6'>
              <h3 className='text-2xl font-semibold mb-4 text-blue-600'>Contact Information</h3>
              <div className='space-y-4'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-blue-100 p-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-lg font-medium'>Email</h4>
                    <a href="mailto:nkosikenny9@mail.com" className='text-blue-500 hover:underline'>nkosikenny9@mail.com</a>
                  </div>
                </div>
                
                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-blue-100 p-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-lg font-medium'>Location</h4>
                    <p className='text-slate-600'>Johannesburg, SA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h3 className='text-2xl font-semibold mb-4 text-blue-600'>Connect With Me</h3>
              <p className='mb-4 text-slate-600'>Follow me on social media or check out my work on these platforms:</p>
              <div className='flex space-x-4'>
                <a href="https://github.com/KBNkosi" target="_blank" rel="noopener noreferrer" className='bg-slate-800 text-white p-3 rounded-full hover:bg-slate-700 transition-colors'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/kenny-nkosi" target="_blank" rel="noopener noreferrer" className='bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className='bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;