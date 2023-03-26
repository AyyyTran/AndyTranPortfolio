import React from 'react';
import CardComponent from './CardComponent';

const Projects = () => {
  return (
    <div className="bg-text-base mt-[50px] h-full pt-24" id="projects">
      <div className="text-4xl font-bold text-secondary text-center py-4">
        My Projects
      </div>
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
};

export default Projects;
