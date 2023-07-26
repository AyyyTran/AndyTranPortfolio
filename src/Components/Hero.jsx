import {React} from 'react';
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';
import AndyTranCV from '../Assets/AndyTranCV.pdf';
import LinkedIn from '../Images/linkedin.svg';
import Github from '../Images/github.svg';
import Carousel from './Carousel';

const Hero = () => {
  return (
    <div
      className="text-white flex flex-col justify-center items-center h-screen lg:flex-row"
      id="hero"
    >
      <div className="min-w-[700px] mt-[2rem] lg:mt-[-4rem] pt-36 w-2/5 h-[30vh] flex flex-col justify-center items-center  ">
        <div className="flex justify-center">
          <p className=" text-3xl pr-2 font-bold md:text-6xl">I'm</p>
          <Typed
            className="uppercase text-3xl pl-2 font-bold text-primary md:text-6xl "
            strings={[
              ' Andy Tran.',
              ' A Developer.',
              ' A Golfer.',
              ' A Climber.',
            ]}
            typeSpeed={125}
            backSpeed={100}
            loop
          />
        </div>
        <Fade bottom>
          <div className="flex pt-4 justify-center">
            <p className="text-xl font-mono pl-4 pr-2">Developer.</p>
            <p className="text-xl font-mono pr-2">Golfer.</p>
            <p className="text-xl font-mono pr-2">Climber.</p>
          </div>
        </Fade>
        <div className="pt-4 flex justify-center">
          <a
            className="pr-2 flex items-center"
            href="https://www.linkedin.com/in/ayyytran/"
            target="_blank"
          >
            <img className="w-5 h-5 fill-white" src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            className="flex items-center"
            href="https://github.com/AyyyTran"
            target="_blank"
          >
            <img className="w-5 h-5 fill-white" src={Github} alt="GitHub" />
          </a>
          <button className="ml-10 bg-primary text-text-base font-bold py-2 px-4 rounded-full hover:bg-text-base hover:text-secondary">
            <a href={AndyTranCV} download="AndyTranCV">
              Download CV
            </a>
          </button>
        </div>
      </div>
      <Fade right>
        <Carousel />
      </Fade>
    </div>
  );
};

export default Hero;
