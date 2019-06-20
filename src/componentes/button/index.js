import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button onClick={props.onClick} style={{ marginRight: 10 }}>
    {props.children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default Button;
