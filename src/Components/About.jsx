import React from 'react';
import Dog from '../Images/dog.svg';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <Fade left>
          <img
            className="w-[500px] mx-auto my-4 md: px-4"
            src={Dog}
            alt="dog"
          />
        </Fade>
        <div className="flex flex-col">
          <p className="text-4xl font-bold text-gray-800">Hi! I am Andy.</p>
          <p className="text-xl font-mono py-4">
            Computer Systems Technology Graduate at British Columbia Institute
            of Technology.
          </p>
          <p className="tracking-wide text-md ">
            At BCIT, I gained valuable experience in a variety of development
            roles, including front-end, back-end, quality assurance, database
            engineer and full-stack.
            <p className="tracking-wide text-md pt-4">
              I was fortunate to have the opportunity to work in these roles by
              participating in hackathons and working on personal and academic
              projects.
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
