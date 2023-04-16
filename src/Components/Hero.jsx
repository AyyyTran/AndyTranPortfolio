import {useState, useEffect, useRef, React} from 'react';
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';
import AndyTranCV from '../Assets/AndyTranCV.pdf';

const Hero = () => {
  return (
    <div className="text-white" id="hero">
      <div className="max-w-[1000px] mt-[-3.5rem] pt-32 w-full h-screen mx-auto flex flex-col justify-center md:items-start items-center">
        <div className="flex justify-center">
          <p className=" text-3xl pr-2 font-bold md:text-6xl">I'm</p>
          <Typed
            className="uppercase text-3xl pl-2 font-bold text-primary md:text-6xl "
            strings={[
              ' Andy Tran.',
              ' A Developer.',
              ' A CLIMBER.',
              'a Food Lover.',
            ]}
            typeSpeed={125}
            backSpeed={100}
            loop
          />
        </div>
        <Fade bottom>
          <div className="flex pt-4 justify-center">
            <p className="text-xl font-mono pl-4 pr-2">Developer.</p>
            <p className="text-xl font-mono pr-2">Climber.</p>
            <p className="text-xl font-mono pr-2">Foodie.</p>
          </div>
        </Fade>
        <div className="pt-4 flex justify-center">
          <a
            className="pr-2 flex items-center"
            href="https://www.linkedin.com/in/ayyytran/"
            target="_blank"
          >
            <img
              className="w-5 h-5 fill-white"
              src="/src/Images/linkedin.svg"
              alt="LinkedIn"
            />
          </a>
          <a
            className="flex items-center"
            href="https://github.com/AyyyTran"
            target="_blank"
          >
            <img
              className="w-5 h-5 fill-white"
              src=".\src\Images/github.svg"
              alt="GitHub"
            />
          </a>
          <button className="ml-10 bg-primary text-text-base font-bold py-2 px-4 rounded-full hover:bg-text-base hover:text-secondary">
            <a href={AndyTranCV} download="AndyTranCV">
              Download CV
            </a>
          </button>
        </div>
      </div>
      {/* ADD DOWNLOAD CV AND A CONTACT BUTTON */}
      {/* ADD LINKEDIN, GITHUB ICONS  */}
    </div>
  );
};

export default Hero;
