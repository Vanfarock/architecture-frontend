import React from 'react';
import commonStyles from './util/commonStyles';
import ProjectsForm from './projectsForm';
import ProjectsTable from './projectsTable';

const AdminPage = () => {
  return (
    <div className={`${commonStyles.responsiveWidth} ${commonStyles.responsiveMargin}`}>
      <ProjectsTable />
      <ProjectsForm />
    </div>
  );
};

export default AdminPage;