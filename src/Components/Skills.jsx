import React from 'react';
import Marquee from 'react-fast-marquee';

const Skills = () => {
  return (
    <div className="h-screen pt-24 " id="skills">
      <div className="text-4xl font-bold text-text-base text-center pt-4 pb-12">
        Technical Skills
      </div>
      <div className="w-auto pt-20">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          <div
            className=" w-[175px] py-4 mx-8 rounded-xl bg-card shadow-md bg-orange-400 bg-opacity-30
  lg:max-w-lg"
          >
            <img
              className="flex pt-4 justify-center w-full h-[100px]"
              src=".\src\Images\css.svg"
              alt="CSS"
            />
            <h3 className=" flex justify-center items-center text-2xl font-semibold">
              CSS
            </h3>
          </div>
          <div
            className="w-[175px] py-4 mx-8 rounded-xl bg-card shadow-md bg-orange-400 bg-opacity-30
 lg:max-w-lg"
          >
            <img
              className="flex pt-4 justify-center w-full h-[100px]"
              src=".\src\Images\js.svg"
              alt="JS"
            />
            <h3 className=" flex justify-center items-center text-xl font-semibold">
              JavaScript
            </h3>
          </div>
          <div
            className="w-[175px] py-4 mx-8 rounded-xl bg-card shadow-md bg-orange-400 bg-opacity-30
 lg:max-w-lg"
          >
            <img
              className="flex pt-4 justify-center w-full h-[100px]"
              src=".\src\Images\html.svg"
              alt="HTML"
            />
            <h3 className=" flex justify-center items-center text-xl font-semibold">
              HTML
            </h3>
          </div>
          <div
            className="w-[175px] py-4 mx-8 rounded-xl bg-card shadow-md bg-orange-400 bg-opacity-30
 lg:max-w-lg"
          >
            <img
              className="flex pt-4 justify-center w-full h-[100px]"
              src=".\src\Images\figma.svg"
              alt="Figma"
            />
            <h3 className=" flex justify-center items-center text-xl font-semibold">
              Figma
            </h3>
          </div>
          <div
            className="w-[175px] py-4 mx-8 rounded-xl bg-card shadow-md bg-orange-400 bg-opacity-30
 lg:max-w-lg"
          >
            <img
              className="flex pt-4 justify-center w-full h-[100px]"
              src=".\src\Images\react.svg"
              alt="React"
            />
            <h3 className=" flex justify-center items-center text-xl  font-semibold">
              React
            </h3>
          </div>
          <div
            className="w-[175px] py-4 mx-8 rounded-xl bg-card shadow-md bg-orange-400 bg-opacity-30
 lg:max-w-lg"
          >
            <img
              className="flex pt-4 justify-center w-full h-[100px]"
              src=".\src\Images\tailwind.svg"
              alt="Tailwind"
            />
            <h3 className=" flex justify-center items-center text-xl  font-semibold">
              Tailwind
            </h3>
          </div>
          <div
            className="w-[175px] py-4 mx-8 rounded-xl bg-card shadow-md bg-orange-400 bg-opacity-30
 lg:max-w-lg"
          >
            <img
              className="flex pt-4 justify-center w-full h-[100px]"
              src=".\src\Images\net.svg"
              alt=".Net"
            />
            <h3 className=" flex justify-center items-center text-xl  font-semibold">
              .Net Core
            </h3>
          </div>
          <div
            className="w-[175px] py-4 mx-8 rounded-xl bg-card shadow-md bg-orange-400 bg-opacity-30
 lg:max-w-lg"
          >
            <img
              className="flex pt-4 justify-center w-full h-[100px]"
              src=".\src\Images\csharp.svg"
              alt="C"
            />
            <h3 className=" flex justify-center items-center text-xl  font-semibold">
              C#
            </h3>
          </div>
          <div
            className=" w-[175px] py-4 mx-8 rounded-xl bg-card shadow-md bg-orange-400 bg-opacity-30
  lg:max-w-lg"
          >
            <img
              className="ml-8 h-[100px]"
              src=".\src\Images\git.svg"
              alt="Git"
            />
            <h3 className=" flex justify-center items-center text-2xl font-semibold">
              Git
            </h3>
          </div>
          <div
            className=" w-[175px] py-4 mx-8 rounded-xl bg-card shadow-md bg-orange-400 bg-opacity-30
  lg:max-w-lg"
          >
            <img
              className="ml-8 h-[100px]"
              src=".\src\Images\docker.svg"
              alt="Docker"
            />
            <h3 className=" flex justify-center items-center text-2xl font-semibold">
              Docker
            </h3>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
