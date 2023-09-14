import React from 'react';
import PropTypes from 'prop-types';
export const Input = ({ errorMessage, label, name, value,
                         type, onFocus, onChange }) => {
  return (
    <label>
        {label}
        <input id={`input_${name}`} name={name} 
                onChange={onChange}
                onFocus={onFocus} value={value} type={type}
        />
        {errorMessage && <span className='error'>{errorMessage}</span>}
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price', 'password', 'email']),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool
};

Input.defaultProps = {
  onChange: ()=>{},
  onFocus: ()=>{},
  autoFocus: false,
  type: 'text',
  name: 'username'
};
