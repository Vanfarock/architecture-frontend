import React from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from './../service/projectsService';
import commonStyles from './util/commonStyles';
import Image from './common/image';
import SectionHeader from './common/sectionHeader';

const Projects = () => {
  const projects = getProjects();

  return (
    <div className={`${commonStyles.responsiveWidth} ${commonStyles.responsiveMargin}`}>
      <SectionHeader className="mb-5">Projetos</SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {projects.map(project => (
          <Link key={project._id} to={`/projetos/${project._id}`}>
            <Image image={project.mainImage}
                            description={project.description}
                            descriptionClass="text-xl" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;