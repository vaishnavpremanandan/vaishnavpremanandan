import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is vaishnav premanandan, I'm MERN stack developer based in Bangalore,India. 
          I have deployed many types of front-ends from portfolio website to data-finance website.
         
        </p>

        <br />

        <p className="text-xl">
        i m passionate about front-end desgining of websites. <br/>
        I have fair knowledge on MongoDB, ExpressJS, ReactJS, NodeJS, Tailwind-CSS, Bootstrap.
        </p>
      </div>
    </div>
  );
};

export default About;
