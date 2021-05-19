import React from 'react';
import PropTypes from 'prop-types';
import commonStyles from './../util/commonStyles';

const FileInput = ({id, label, multiple, ...other}) => {
  const buttonLabel = () => {
    if (multiple)
      return "Selecione um ou mais arquivos";
    return "Selecione um arquivo";
  }

  return (
    <>
      {label && <label className="mr-2" htmlFor={id}>{label}</label>}
      <label className={`bg${commonStyles.primaryColor} hover:bg${commonStyles.primaryColorHover} self-start inline-block border cursor-pointer p-3 hover:pointer rounded-md text-white`} htmlFor={id}>{buttonLabel()}</label>
      <input {...other} id={id} multiple={multiple} className="hidden" /> 
    </>
  );
};

FileInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  multiple: PropTypes.bool,
};

export default FileInput;