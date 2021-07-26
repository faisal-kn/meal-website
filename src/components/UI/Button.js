import React from 'react';

import './Button.css';

const Button = (props) => {
  return (
    <button className="button">
      {props.value}
      <span className="badge">{props.items}</span>
    </button>
  );
};

export default Button;
