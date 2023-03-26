import React from 'react';
import Dog from '../Images/dog.svg';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div
      className=" w-full h-full mt-[50px] bg-text-base pb-16 px-4 pt-32 "
      id="about"
    >
      <div className="flex flex-col text-center items-center max-w-[1240px] mx-auto md:text-left md:grid md:grid-cols-2 ">
        <Fade left>
          <img
            className="w-[300px] mx-auto my-4 md:px-4 md:w-[500px]"
            src={Dog}
            alt="dog"
          />
        </Fade>
        <div className="flex flex-col text-secondary">
          <p className="text-4xl font-bold text-secondary md:text-5xl">
            Hi! I am Andy.
          </p>
          <p className="text-l font-mono py-4 md:text-xl">
            Computer Systems Technology Graduate at British Columbia Institute
            of Technology.
          </p>
          <p className="tracking-wide text-md ">
            At BCIT, I gained valuable experience in a variety of development
            roles, including front-end, back-end, quality assurance, database
            engineer and full-stack.
            <p className="tracking-wide text-md pt-4">
              I was fortunate to have the opportunity to work in these roles via
              personal projects, academic projects and hackathons!
            </p>
          </p>
          <p className="tracking-wide text-md py-4">
            In my spare time I love to go rock climbing, eat delicious foods and
            workout!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
