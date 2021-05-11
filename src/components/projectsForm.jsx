import React from 'react';
import Photo from '../assets/icons/photo.svg';
import Input from './common/input';
import SectionHeader from './common/sectionHeader';

const ProjectsForm = () => {
  const formatLabel = () => (
    <div className="flex flex-row h-full justify-center items-center cursor-pointer hover:bg-gray-50 ">
      <img className="w-14 mr-5" src={Photo} alt="Icon" />
      <h1 className="text-lg">Imagem principal</h1>
    </div>
  );

  return (
    <div className="w-full">
      <SectionHeader className="mb-10">Cadastro de projetos</SectionHeader>
      <form>
        <Input label="Nome do projeto"
               labelClassName="self-start"
               name="projectName"
               type="text"
               id="projectName" />
        <Input label={formatLabel()}
               labelClassName="self-start border inline-block h-96 w-2/4"
               inputClassName="hidden"
               name="mainImage"
               type="file"
               id="mainImage" />
      </form>
    </div>
  );
};

export default ProjectsForm;