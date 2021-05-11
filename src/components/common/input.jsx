import React from 'react';
import PropTypes from 'prop-types';

const Input = ({label, labelClassName, inputClassName, inputId, ...other}) => {
  return (
    <>
      <label className={labelClassName} htmlFor={inputId}>{label}</label>
      <input {...other} className={`bg-gray-50 border p-3 my-2 w-full ${inputClassName}`} /> 
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  inputID: PropTypes.string.isRequired
};

export default Input;