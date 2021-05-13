import React from 'react';
import { getProject } from './../service/projectsService';
import SectionHeader from './common/sectionHeader';
import Image from './common/image';
import commonStyles from './util/commonStyles';
import Grid from './common/grid';

const Project = ({ match }) => {
  const project = getProject(match.params.id);

  const formatProjectImages = () => {
    return project.images.map((image, index) => (
      {
        content: () => <Image key={index} hover={false} image={image} />
      }
    ));
  }

  return (
    <div className={`${commonStyles.responsiveWidth} ${commonStyles.responsiveMargin}`}>
      <SectionHeader className="mb-5">{project.description}</SectionHeader>
      <Grid items={formatProjectImages()} />
    </div>
  );
};

export default Project;