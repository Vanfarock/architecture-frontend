import React from 'react';
import { getProject } from './../service/projectsService';
import SectionHeader from './common/sectionHeader';
import Image from './common/image';
import commonStyles from './util/commonStyles';

const Project = ({ match }) => {
  const project = getProject(match.params.id);

  return (
    <div className={`${commonStyles.responsiveWidth} ${commonStyles.responsiveMargin}`}>
      <SectionHeader className="mb-5">{project.description}</SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {project.images.map((image, index) => (
          <Image key={index} hover={false} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Project;