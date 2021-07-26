import React from 'react';

import './MealItem.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const price = `$ ${props.price}`;
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
      </div>
      <div className="description">{props.description}</div>
      <div className="price">{price}</div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
