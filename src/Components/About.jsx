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
            BCIT Graduate of Computer Systems Technology
          </p>
          <p className="text-4xl pb-2 font-bold md:text-5xl">
            Hi! I am Andy Tran.
          </p>
          <p className="tracking-wide text-md pt-4 ">
            <b>Who am I?</b> I'm an innovative Full Stack Developer who has a
            passion for transforming designs and visions into pratical
            applications that can improve people's lives.
          </p>
          <p className="tracking-wide text-md pt-4">
            My journey in the tech world began with an interest in building a
            computer from scratch. From there I dove deeper into what I can do
            with computers and learned to love being able to craft a solution to
            problems. After earning my BCIT Diploma in Computer Systems
            Technology, I embarked on a path as a Full Stack Developer. From
            building my first website to collaborating on complex projects with
            clients, each step has been a rewarding learning experience.
          </p>
          <p className="tracking-wide text-md pt-4">
            As a Full Stack Developer, I have a deep understanding of front-end
            technologies such as HTML, CSS, JavaScript, React and coupled with a
            strong command of back-end technologies like C# and .NET along with
            experience working with databases, RESTful APIs, and cloud platforms
            helps me to deliver quality and efficient applications
          </p>
          <p className="tracking-wide text-md pt-4">
            I find joy coding as I can take ideas from concept to reality and
            craft applications that have a purpose and will leave a positive
            impact on people's lives. Aside from coding, I love being active
            whether it be golf, climbing, or volleyball!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
