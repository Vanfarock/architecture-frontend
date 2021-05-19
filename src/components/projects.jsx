import React from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from './../service/projectsService';
import commonStyles from './util/commonStyles';
import Image from './common/image';
import SectionHeader from './common/sectionHeader';
import Grid from './common/grid';

const Projects = () => {
  const projects = getProjects();
  
  const formatProjects = () => {
    return projects.map(project => ({
      content: () => (
        <Link key={project._id} to={`/projetos/${project._id}`}>
          <Image src={project.mainImage}
                 description={project.description}
                 descriptionClass="text-xl" />
        </Link>
      )
    }))
  };

  return (
    <div className={`${commonStyles.responsiveWidth} ${commonStyles.responsiveMargin}`}>
      <SectionHeader className="mb-5">Projetos</SectionHeader>
      <Grid items={formatProjects()} />
    </div>
  );
};

export default Projects;