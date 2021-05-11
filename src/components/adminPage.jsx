import React from 'react';
import commonStyles from './util/commonStyles';
import ProjectsForm from './projectsForm';

const AdminPage = () => {
  return (
    <div className={`${commonStyles.responsiveWidth} ${commonStyles.responsiveMargin}`}>
      <ProjectsForm />
    </div>
  );
};

export default AdminPage;