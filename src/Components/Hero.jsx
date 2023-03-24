import React from 'react';
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center md:items-start items-center">
        <div className="flex justify-center">
          <p className=" text-4xl pr-2 font-bold md:text-6xl">I'm</p>
          <Typed
            className="uppercase text-4xl pl-2 font-bold text-[#b5c2b7] md:text-6xl "
            strings={[' Andy Tran.', ' A Developer.', ' A 3 HEX CLIMBER.']}
            typeSpeed={125}
            backSpeed={100}
            loop
          />
        </div>
        <Fade bottom>
          <div className="flex pt-4 justify-center">
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
