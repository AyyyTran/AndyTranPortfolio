import React from 'react';
import Dog from '../Images/dog.svg';

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 " src={Dog} alt="dog" />
        <div className="flex flex-col">
          <p>WHO AM I?</p>
          <h1>Hi I am andy</h1>
          <p>
            lorem ipsuma sdlfjlk fj lksjdf jdsl kjfalsj jal jl jfaldj lk jdsf
            dsfadsf a dsf sd fa dsf as fas f af
            asdffffffffffffffffffffffffffffffffffffff fdafadff asdfadf f
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
