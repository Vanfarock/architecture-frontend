import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({label, labelClassName, textareaClassName, textareaId, ...other}) => {
  return (
    <>
      <label className={labelClassName} htmlFor={textareaId}>{label}</label>
      <textarea {...other} className={`bg-gray-50 border p-3 my-2 w-full ${textareaClassName}`} /> 
    </>
  );
};

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  inputID: PropTypes.string.isRequired
};

export default Textarea;