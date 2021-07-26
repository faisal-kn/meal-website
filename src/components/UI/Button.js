import React from 'react';

import './Button.css';
import CartIcon from '../cart/CartIcon';

const Button = (props) => {
  return (
    <button className="button">
      <span className="icon">
        <CartIcon />
      </span>
      {props.value}
      <span className="badge">{props.items}</span>
    </button>
  );
};

export default Button;
