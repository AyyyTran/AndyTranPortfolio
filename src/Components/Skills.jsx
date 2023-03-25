import React from 'react';

const Skills = () => {
  return (
    <div>
      <div className="text-4xl font-semibold text-white text-center py-4">
        Technical Skills:
      </div>
      <div className="grid grid-cols-2 place-items-center gap-4 md:flex md:justify-center ">
        <div className=" w-[175px] rounded-xl bg-gray-300 shadow-md lg:max-w-lg">
          <img
            className="flex pt-4 justify-center w-full h-[100px]"
            src=".\src\Images\css.svg"
            alt="CSS"
          />
          <h3 className=" flex justify-center items-center text-2xl font-semibold">
            CSS
          </h3>
        </div>
        <div className="w-[175px] rounded-xl bg-gray-300 shadow-md lg:max-w-lg">
          <img
            className="flex pt-4 justify-center w-full h-[100px]"
            src=".\src\Images\js.svg"
            alt="JS"
          />
          <h3 className=" flex justify-center items-center text-xl font-semibold">
            JavaScript
          </h3>
        </div>
        <div className="w-[175px] rounded-xl bg-gray-300 shadow-md lg:max-w-lg">
          <img
            className="flex pt-4 justify-center w-full h-[100px]"
            src=".\src\Images\html.svg"
            alt="HTML"
          />
          <h3 className=" flex justify-center items-center text-xl font-semibold">
            HTML
          </h3>
        </div>
        <div className="w-[175px] rounded-xl bg-gray-300 shadow-md lg:max-w-lg">
          <img
            className="flex pt-4 justify-center w-full h-[100px]"
            src=".\src\Images\figma.svg"
            alt="Figma"
          />
          <h3 className=" flex justify-center items-center text-xl font-semibold">
            Figma
          </h3>
        </div>
        <div className="w-[175px] rounded-xl bg-gray-300 shadow-md lg:max-w-lg">
          <img
            className="flex pt-4 justify-center w-full h-[100px]"
            src=".\src\Images\react.svg"
            alt="React"
          />
          <h3 className=" flex justify-center items-center text-xl  font-semibold">
            React
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
