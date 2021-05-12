import React from 'react';
import PropTypes from 'prop-types';
import ImageUpload from '../../assets/icons/image-upload.svg';

const FileInput = ({id, ...other}) => {
  return (
    <label className="self-start border block h-96 w-2/4" htmlFor={id}>
      <div className="flex flex-col h-full justify-center items-center cursor-pointer hover:bg-gray-50 ">
        <img className="w-14 mr-5" src={ImageUpload} alt="Icon" />
        <span className="text-md my-3">Selecione uma imagem ou arraste aqui</span>
        <span className="p-3 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white">Selecione um arquivo</span>
        <input {...other} id={id} className="hidden" /> 
      </div>
    </label>
  );
};

FileInput.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FileInput;