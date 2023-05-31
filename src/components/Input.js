import React from 'react';
import './Input.css';
import PropTypes from 'prop-types';

function Input({ result }) {
  return (
    <span className="display-input">{result}</span>
  );
}

Input.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Input;
