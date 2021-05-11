import React from 'react';

const ProjectsForm = () => {
  return (
    <div className="w-full">
      <form>
        <input name="projectName" type="text" />
        <input name="mainImage" type="file" />
      </form>
    </div>
  );
};

export default ProjectsForm;