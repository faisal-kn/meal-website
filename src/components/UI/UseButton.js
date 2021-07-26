import React from 'react';

import './Button.css';
import CartIcon from '../cart/CartIcon';

const Button = (props) => {
  return (
    <button className="button" type={props.typeOf}>
      {props.value}
    </button>
  );
};

export default Button;
