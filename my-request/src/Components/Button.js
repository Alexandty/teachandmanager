import React from 'react';

const Button = (props) => (
  <button
    type="button"
    {...props}
    className={`btn btn-dju b-white btn-rounded ${props.className}`}
  >
    {props.children}
  </button>
);

export default Button;