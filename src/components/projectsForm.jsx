import React, { useState } from 'react';
import Input from './common/input';
import SectionHeader from './common/sectionHeader';
import Image from './common/image';
import FileInput from './common/fileInput';
import Grid from './common/grid';
import Button from './common/button';
import commonStyles from './util/commonStyles';

const ProjectsForm = () => {
  const [files, setFiles] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
  }

  const handleFileChange = (e) => {
    const inputFiles = Array.from(e.target.files);
    
    e.target.value = null;

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

  const removeFile = index => {
    const copy = [...files];
    copy.splice(index, 1);

    setFiles(copy);
  }

  const formatImagesPreview = () => {
    return files.map((fileUrl, index) => ({
      content: () => (
        <div key={index} className="relative">
          <Image hover={false} src={fileUrl} />
          <span className={`bg${commonStyles.primaryColor} hover:bg${commonStyles.primaryColorHover} transition text-sm cursor-pointer text-white absolute px-2 py-1 top-0 right-0 rounded-full transform translate-x-1/4 -translate-y-1/4`}
                onClick={() => removeFile(index)}>&#10006;</span>
        </div>
      )
    }));
  }

  return (
    <div className="w-full">
      <SectionHeader className="mb-10">Cadastro de projetos</SectionHeader>
      <form onSubmit={handleSubmit}>
        <Input label="Nome do projeto"
               name="projectName"
               type="text"
               id="projectName" />

        <div className="mb-3">
          <FileInput accept="image/*"
                     name="mainImage"
                     type="file"
                     id="mainImage"
                     label="Imagens do projeto"
                     multiple
                     onChange={handleFileChange} />
        </div>

        <Grid items={formatImagesPreview()} />

        <Button className="p-3 mt-5 w-1/4">Salvar</Button>
      </form>
    </div>
  );
};

export default ProjectsForm;