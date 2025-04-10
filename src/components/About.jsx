import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-12 bg-gradient-to-b from-slate-100 to-slate-50 text-slate-800 py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">
            About Me
          </h2>
        </div>
        <p className="text-xl mt-10">
          I'm a motivated and detail-oriented graduate with a Bachelor of
          Science degree in information Technology. I have a passion for
          creating clean, responsive web applications that solve real-world
          problems.
        </p>
        <br />
        <p className="text-xl">
          Throughout my academic journey, I've developed proficiency in modern
          programming languages and tools, with hands-on experience in
          collaborative web development projects. I was recognized for academic
          excellence with a final-year scholarship bursary.
        </p>
        <br />
        <p className="text-xl">
          As a Student Support Mentor, I enjoyed guiding peers through technical
          challenges, which has strengthened my communication skills and
          deepened my understanding of web development concepts.
        </p>
      </div>
    </section>
  );
};

export default About;
