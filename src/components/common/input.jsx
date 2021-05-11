import React from 'react';
import PropTypes from 'prop-types';

const Input = ({label, labelClassName, inputClassName, id, ...other}) => {
  return (
    <>
      {label && <label className={labelClassName} htmlFor={id}>{label}</label>}
      <input {...other} id={id} className={`bg-gray-50 border p-3 my-2 w-full ${inputClassName}`} /> 
    </>
  );
};

Input.propTypes = {
  label: PropTypes.any,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  id: PropTypes.string.isRequired
};

export default Input;