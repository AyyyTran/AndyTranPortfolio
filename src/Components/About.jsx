import React from 'react';
import Me from '../Images/me.png';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div
      className="bg-text-base text-grey w-full h-full mt-[50px] pb-16 px-4 pt-32 "
      id="about"
    >
      <div className="text-4xl font-bold text-secondary text-center py-4 ">
        About Me!
      </div>
      <div className="flex flex-col text-center items-center max-w-[1240px] mx-auto md:text-left md:grid md:grid-cols-2 ">
        <Fade left>
          <img
            src={Me}
            alt="Me"
            className="w-64 md:w-96 mx-auto my-4 rounded-xl"
          />
        </Fade>
        <div className="flex flex-col text-start bg-card p-4 rounded-lg pl-8">
          <p className="text-lg text-primary font-bold py-2 md:text-xl">
            BCIT Student in Network Security, Bachelor of Applied Science
          </p>
          <p className="text-4xl pb-2 font-bold md:text-5xl">
            Hi! I am Andy Tran.
          </p>
          <p className="tracking-wide text-md pt-4">
            <b>Who am I?</b> I'm a developer passionate about turning ideas into practical, impactful solutions.
          </p>
          <p className="tracking-wide text-md pt-4">
            My journey in tech began with building computers, which sparked my interest in problem-solving through technology. After earning my diploma in Computer Systems Technology from BCIT, I've worked on a variety of projects, from my first website to collaborating on client solutions. Currently, I’m pursuing a Bachelor of Applied Science in Network Security at BCIT.
          </p>
          <p className="tracking-wide text-md pt-4">
            I have a strong foundation in technologies such as web development, databases, APIs, cloud platforms, and testing. I’ve gained hands-on experience in different stages of software development and enjoy each aspect of the process.
          </p>
          <p className="tracking-wide text-md pt-4">
            I'm now seeking a position where I can continue learning and growing within the tech industry. Let's connect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
