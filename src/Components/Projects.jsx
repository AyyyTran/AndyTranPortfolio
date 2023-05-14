import React from 'react';
import CardComponent from './CardComponent';
import ProjectData, {ProjectData2} from '../Data/ProjectData';

const Projects = () => {
  return (
    <div className="bg-text-base mt-[50px] h-full pt-24 pb-12" id="projects">
      <div className="text-4xl font-bold text-secondary text-center py-4">
        My Projects
      </div>
      <CardComponent
        imageURL={ProjectData.imageURL}
        heading={ProjectData.heading}
        description={ProjectData.description}
        imageDesc={ProjectData.imageDesc}
        demoLink={ProjectData.demoLink}
        codeLink={ProjectData.codeLink}
      />
      <CardComponent
        imageURL={ProjectData2.imageURL}
        heading={ProjectData2.heading}
        description={ProjectData2.description}
        imageDesc={ProjectData2.imageDesc}
        demoLink={ProjectData2.demoLink}
        codeLink={ProjectData2.codeLink}
      />
      <CardComponent
        imageURL={ProjectData.imageURL}
        heading={ProjectData.heading}
        description={ProjectData.description}
        imageDesc={ProjectData.imageDesc}
        demoLink={ProjectData.demoLink}
        codeLink={ProjectData.codeLink}
      />
    </div>
  );
};

export default Projects;
