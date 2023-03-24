import React from 'react';
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center md:items-start sm:items-center">
        <div className="sm: flex">
          <p className="md:text-6xl sm:text-4xl sm:pr-2 text-2xl font-bold">
            I'm
          </p>
          <Typed
            className="uppercase md:text-6xl sm:text-4xl text-2xl font-bold text-[#b5c2b7]"
            strings={[' Andy Tran.', ' A Developer.', ' A 3 HEX CLIMBER.']}
            typeSpeed={125}
            backSpeed={100}
            loop
          />
        </div>
        <Fade bottom>
          <div className="flex pt-4">
            <p className="text-2xl font-mono pr-4">Developer.</p>
            <p className="text-2xl font-mono pr-4">Climber.</p>
            <p className="text-2xl font-mono pr-4">Foodie.</p>
          </div>
        </Fade>
        <div className="pt-4 flex justify-center">
          <a
            className="pr-2 "
            href="https://www.linkedin.com/in/ayyytran/"
            target="_blank"
          >
            <img
              className="w-5 h-5 fill-white"
              src=".\src\Images\linkedin.svg"
              alt="LinkedIn"
            />
          </a>
          <a href="https://github.com/AyyyTran" target="_blank">
            <img
              className="w-5 h-5 fill-white"
              src=".\src\Images/github.svg"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
      {/* ADD DOWNLOAD CV AND A CONTACT BUTTON */}
      {/* ADD LINKEDIN, GITHUB ICONS  */}
    </div>
  );
};

export default Hero;
