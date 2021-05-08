import React from 'react';
import commonStyles from './util/commonStyles';
import HoverableImage from './common/hoverableImage';
import { getProjects } from './../service/projectsService';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = getProjects();

  return (
    <div className={`${commonStyles.responsiveWidth} ${commonStyles.responsiveMargin} grid grid-cols-3 gap-3`}>
      {projects.map(project => (
        <Link key={project._id} to={`/projetos/${project._id}`}>
          <HoverableImage image={project.image}
                          description={project.description}
                          descriptionClass="text-xl" />
        </Link>
      ))}
    </div>
  );
};

export default Projects;