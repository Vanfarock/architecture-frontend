import React from 'react';

const Project = ({ match }) => {
  return (
    <div>
      <h1>Projeto {match.params.id}</h1>
    </div>
  );
};

export default Project;