import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({label, labelClassName, textareaClassName, id, ...other}) => {
  return (
    <>
      <label className={labelClassName} htmlFor={id}>{label}</label>
      <textarea {...other} id={id} className={`bg-gray-50 border p-3 my-2 w-full ${textareaClassName}`} /> 
    </>
  );
};

Textarea.propTypes = {
  label: PropTypes.any,
  labelClassName: PropTypes.string,
  textareaClassName: PropTypes.string,
  id: PropTypes.string.isRequired
};

export default Textarea;