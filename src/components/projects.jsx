import React from 'react';
import commonStyles from './util/commonStyles';
import HoverableImage from './common/hoverableImage';
import { getProjects } from './../service/projectsService';
import { Link } from 'react-router-dom';
import SectionHeader from './common/sectionHeader';

const Projects = () => {
  const projects = getProjects();

  return (
    <div className={`${commonStyles.responsiveWidth} ${commonStyles.responsiveMargin} mt-10`}>
      <SectionHeader className="mb-5">Projetos</SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {projects.map(project => (
          <Link key={project._id} to={`/projetos/${project._id}`}>
            <HoverableImage image={project.mainImage}
                            description={project.description}
                            descriptionClass="text-xl" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;