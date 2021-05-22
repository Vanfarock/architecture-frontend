import React from 'react';
import Button from './common/button';
import { getProjects } from '../service/projectsService';
import commonStyles from './util/commonStyles';
import SectionHeader from './common/sectionHeader';

const ProjectsTable  = () => {
  const projects = getProjects();

  return (
    <div className="w-full">
      <SectionHeader className="mb-3">Projetos</SectionHeader>
      <table className="block">
        <thead className="flex w-full">
          <tr className={`bg${commonStyles.backgroundColorHover} flex flex-row justify-start items-center w-full px-5 py-3`}>
            <th className="w-full text-left">Nome do projeto</th>
            <th className="flex-1"><Button className="px-4 py-2">Novo</Button></th>
          </tr>
        </thead>
        <tbody className="flex flex-col w-full">
          {projects.map(p => (
            <tr key={p._id} className={`even:bg${commonStyles.backgroundColor} hover:bg${commonStyles.backgroundColorHover} flex flex-row items-center w-full px-5 py-2`}>
              <td className="w-full">{p.description}</td>
              <td className="flex-1"><Button className="px-2 py-1">Excluir</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProjectsTable.propTypes = {};

export default ProjectsTable ;