import React from 'react';
import CardComponent from './CardComponent';
import ProjectData, {
  ProjectData2,
  ProjectData3,
  ProjectData4,
} from '../Data/ProjectData';

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
        tech={ProjectData.tech}
      />
      <CardComponent
        imageURL={ProjectData2.imageURL}
        heading={ProjectData2.heading}
        description={ProjectData2.description}
        imageDesc={ProjectData2.imageDesc}
        demoLink={ProjectData2.demoLink}
        codeLink={ProjectData2.codeLink}
        tech={ProjectData2.tech}
      />
      <CardComponent
        imageURL={ProjectData3.imageURL}
        heading={ProjectData3.heading}
        description={ProjectData3.description}
        imageDesc={ProjectData3.imageDesc}
        demoLink={ProjectData3.demoLink}
        codeLink={ProjectData3.codeLink}
        tech={ProjectData3.tech}
      />
      <CardComponent
        imageURL={ProjectData4.imageURL}
        heading={ProjectData4.heading}
        description={ProjectData4.description}
        imageDesc={ProjectData4.imageDesc}
        demoLink={ProjectData4.demoLink}
        codeLink={ProjectData4.codeLink}
        tech={ProjectData4.tech}
      />
      {/* <CardComponent
        imageURL={ProjectData5.imageURL}
        heading={ProjectData5.heading}
        description={ProjectData5.description}
        imageDesc={ProjectData5.imageDesc}
        demoLink={ProjectData5.demoLink}
        codeLink={ProjectData5.codeLink}
        tech={ProjectData5.tech}
      /> */}
    </div>
  );
};

export default Projects;
