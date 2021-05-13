import React, { useState } from 'react';
import Input from './common/input';
import SectionHeader from './common/sectionHeader';
import FileInput from './common/fileInput';
import Grid from './common/grid';

const ProjectsForm = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const inputFiles = Array.from(e.target.files);
    
    Promise.all(inputFiles.map(file => {
      return (new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = data => {
          resolve(data.target.result);
        };
        reader.readAsDataURL(file);
      }));
    }))
    .then(images => {
      setFiles([...files, ...images]);
    });
  }

  const formatImagesPreview = () => {
    return files.map((fileUrl, index) => ({
      content: () => (
        <img className="max-h-96 object-cover w-full h-full text-center" key={index} src={fileUrl} alt="file" />
      )
    }));
  }

  return (
    <div className="w-full">
      <SectionHeader className="mb-10">Cadastro de projetos</SectionHeader>
      <form>
        <Input label="Nome do projeto"
               name="projectName"
               type="text"
               id="projectName" />

        <label htmlFor="mainImage">Insira as imagens do projeto</label>
        <FileInput accept="image/*"
                   name="mainImage"
                   type="file"
                   id="mainImage"
                   multiple
                   onChange={handleFileChange} />

        <Grid items={formatImagesPreview()} />
      </form>
    </div>
  );
};

export default ProjectsForm;