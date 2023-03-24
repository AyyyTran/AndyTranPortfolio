import React from 'react';
import Typed from 'react-typed';

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
        <div className="flex pt-4">
          <p className="text-xl font-bold pr-4">Developer.</p>
          <p className="text-xl font-bold pr-4">Climber.</p>
          <p className="text-xl font-bold pr-4">Foodie.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
